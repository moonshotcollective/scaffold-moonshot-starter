import ABIS from "@scaffold-eth/hardhat-ts/hardhat_contracts.json";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import Authereum from "authereum";
import { ethers } from "ethers";
import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import Web3Modal from "web3modal";

import { NETWORK_URLS } from '../core/connectors';
import { ALL_SUPPORTED_CHAIN_IDS } from '../core/connectors/chains';
import getLibrary from '../core/connectors/getLibrary';
import NETWORKS from "../core/networks";
import { State, Web3Reducer } from "./Web3Reducer";

export const supportedNetworks = Object.keys(ABIS);

const injected = new InjectedConnector({
  supportedChainIds: supportedNetworks.map((net) => parseInt(net, 10)),
});

const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_URLS,
  qrcode: true,
});

const initialState = {
  loading: false,
  account: undefined,
  provider: undefined,
  contracts: undefined,
  chainId: undefined,
} as State;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
      rpcs: NETWORK_URLS,
      qrcode: true,
    },
  },
  // authereum: {
  //   package: Authereum,
  // },
};

const Web3Context = createContext(initialState);

const Web3Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(Web3Reducer, initialState);
  const { chainId, activate, library } = useWeb3React();

  const setAccount = (account: null | string) => {
    dispatch({
      type: "SET_ACCOUNT",
      payload: account,
    });
  };

  const setContracts = (contracts: null | any) => {
    dispatch({
      type: "SET_CONTRACTS",
      payload: contracts,
    });
  };

  const setENS = (ens: null | string) => {
    dispatch({
      type: "SET_ENS",
      payload: ens,
    });
  };

  async function updateState() {
    if (chainId && library) {
      const strChainId = chainId.toString() as keyof typeof NETWORKS;
      if (supportedNetworks.includes(strChainId)) {
        const network = NETWORKS[strChainId];
        const abis = ABIS as Record<string, any>;
        try {
          const yourContract = new ethers.Contract(
            abis[strChainId][network.name].contracts.YourContract.address,
            abis[strChainId][network.name].contracts.YourContract.abi,
            library.getSigner()
          );
          setContracts({ yourContract });
        } catch (error) {
          console.log('error reseting contract for', strChainId, error);
        }
      }
    }
  }

  // Reload contracts globally on network change
  useEffect(() => {
    updateState();
  }, [ABIS, chainId, library]);

  const logout = async () => {
    setAccount(null);
    setContracts(null);
    localStorage.setItem("defaultWallet", "");
  };

  const connectWeb3 = useCallback(async () => {
    // Set up Web3 Modal
    const web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: false,
    });
    const provider = await web3Modal.connect();
    const lib = getLibrary(provider);
    activate(
      lib?.connection.url === "metamask" ? injected : walletconnect
    );

    const signer = lib.getSigner();
    const account = await signer.getAddress();

    // Get ens
    let ens = null;
    try {
      ens = await lib.lookupAddress(account);
      setENS(ens);
    } catch (error) {
      console.log({ error });
      setENS(null);
    }

    // check if supported network
    const strChainId = chainId ? chainId?.toString() : "";
    if (supportedNetworks.includes(strChainId)) {
      const network = NETWORKS[strChainId as keyof typeof NETWORKS];
      const abis = ABIS as Record<string, any>;
      const yourContract = new ethers.Contract(
        abis[strChainId][network.name].contracts.YourContract.address,
        abis[strChainId][network.name].contracts.YourContract.abi,
        signer
      );
      console.log('reseting contract for', strChainId, network.name, network.chainId);
      setContracts({ yourContract });
    }

    setAccount(account);

  }, [ABIS, chainId]);

  return (
    <Web3Context.Provider
      value={{
        ...state,
        connectWeb3,
        logout,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Context, Web3Provider };
