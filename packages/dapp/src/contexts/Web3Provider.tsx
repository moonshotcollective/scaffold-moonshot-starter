import ABIS from "@scaffold-eth/hardhat-ts/hardhat_contracts.json";
import publishedModel from "@scaffold-eth/schemas/lib/model.json";
import { EthereumAuthProvider, SelfID } from "@self.id/web";
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

import {
  ceramicCoreFactory,
  CERAMIC_TESTNET,
} from "../core/ceramic";
import { IdentityLink } from "../core/ceramic/identity-link";
import NETWORKS from "../core/networks";

import { State, Web3Reducer } from "./Web3Reducer";

const { NEXT_PUBLIC_INFURA_ID } = process.env;
const supportedNetworks = Object.keys(ABIS);

const rpcs = {
  1: `https://mainnet.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
  42: `https://kovan.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`,
  80001: `https://polygon-mumbai.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`,
  100: "https://dai.poa.network", // xDai
};
const injected = new InjectedConnector({
  supportedChainIds: supportedNetworks.map((net) => parseInt(net, 10)),
});

// TODO: create custom ceramic auth for wallet connect?
const walletconnect = new WalletConnectConnector({
  rpc: rpcs,
  qrcode: true,
});

const staticProvider = new ethers.providers.StaticJsonRpcProvider(
  `https://mainnet.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

const initialState = {
  loading: false,
  account: undefined,
  provider: undefined,
  contracts: undefined,
  staticProvider
} as State;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      bridge: "https://polygon.bridge.walletconnect.org",
      infuraId: NEXT_PUBLIC_INFURA_ID,
      rpc: rpcs,
    },
  },
  // authereum: {
  //   package: Authereum,
  // },
};
const Web3Context = createContext(initialState);

const Web3Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(Web3Reducer, initialState);
  const { activate, chainId } = useWeb3React();

  const setAccount = (account: null | string) => {
    dispatch({
      type: "SET_ACCOUNT",
      payload: account,
    });
  };

  const setProvider = (provider: null | any) => {
    dispatch({
      type: "SET_PROVIDER",
      payload: provider,
    });
  };

  const setSelf = (self: null | any) => {
    dispatch({
      type: "SET_SELF",
      payload: self,
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

  const setCore = (core: null | any) => {
    dispatch({
      type: "SET_CORE",
      payload: core,
    });
  };

  const setIdentityLink = (identityLink: null | any) => {
    dispatch({
      type: "SET_IDENTITY_LINK",
      payload: identityLink,
    });
  };

  useEffect(() => {
    const coreCeramic = ceramicCoreFactory();
    setCore(coreCeramic);
  }, []);

  useEffect(() => {
    async function updateState() {
      if (chainId && state.provider && state.account) {
        const strChainId = chainId.toString() as keyof typeof NETWORKS;
        if (supportedNetworks.includes(strChainId)) {
          const network = NETWORKS[strChainId];
          const abis = ABIS as Record<string, any>;
          const signer = state.provider.getSigner();
          const yourContract = new ethers.Contract(
            abis[strChainId][network.name].contracts.YourContract.address,
            abis[strChainId][network.name].contracts.YourContract.abi,
            signer
          );
          setContracts({ yourContract });
        }
      }
    }
    updateState();
  }, [chainId, state.provider, state.account]);

  const logout = async () => {
    setAccount(null);
    setProvider(null);
    setSelf(null);
    setCore(null);
    setContracts(null);
    localStorage.setItem("defaultWallet", "");
  };

  const connectWeb3 = useCallback(async () => {
    const web3Modal = new Web3Modal({
      providerOptions,
      // TODO: false for production
      cacheProvider: true,
    });
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider, "any");
    activate(
      ethersProvider.connection.url === "metamask" ? injected : walletconnect
    );
    setProvider(ethersProvider);
    const signer = ethersProvider.getSigner();
    const account = await signer.getAddress();

    try {
      const ens = await ethersProvider.lookupAddress(account);
      setENS(ens);
    } catch (error) {
      console.log({ error });
      setENS(null);
    }
    if (chainId) {
      const strChainId = chainId.toString() as keyof typeof NETWORKS;
      if (supportedNetworks.includes(strChainId)) {
        const network = NETWORKS[strChainId];
        const abis = ABIS as Record<string, any>;
        const yourContract = new ethers.Contract(
          abis[strChainId][network.name].contracts.YourContract.address,
          abis[strChainId][network.name].contracts.YourContract.abi,
          signer
        );
        setContracts({ yourContract });
      }
    }

    setAccount(account);

    const identityLinkService = new IdentityLink(
      process.env.NEXT_PUBLIC_CERAMIC_VERIFICATION_SERVER_URL ||
      "https://verifications-clay.3boxlabs.com"
    );
    setIdentityLink(identityLinkService);

    const mySelf = await SelfID.authenticate({
      authProvider: new EthereumAuthProvider(ethersProvider.provider, account),
      ceramic: CERAMIC_TESTNET,
      connectNetwork: CERAMIC_TESTNET,
      model: publishedModel,
    });

    setSelf(mySelf);

    provider.on("chainChanged", () => {
      // window.location.reload();
    });

    provider.on("accountsChanged", () => {
      // window.location.reload();
    });
  }, [chainId, activate]);

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
