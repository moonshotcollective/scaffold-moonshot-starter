import { BigNumber, utils } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import UNISWAP_LOGO_URL from "../../../public/uniswap-logo.svg";
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from "./chains";
import getLibrary from "./getLibrary";
import { NetworkConnector } from "./NetworkConnector";

interface SwitchNetworkArguments {
  library: Web3Provider | undefined;
  chainId: SupportedChainId;
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export const switchToNetwork = async ({
  library,
  chainId,
}: SwitchNetworkArguments): Promise<null | void> => {
  if (!library?.provider?.request) {
    return;
  }
  const formattedChainId = utils.hexStripZeros(
    BigNumber.from(chainId).toHexString()
  );
  return library?.provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: formattedChainId }],
  });
};

export const ctxNetworkConstant = "NETWORK";
const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_ID;
const PORTIS_ID = process.env.NEXT_PUBLIC_PORTIS_ID;

if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `NEXT_PUBLIC_INFURA_ID must be a defined environment variable`
  );
}

export const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.HARDHAT]: `http://localhost:8545`,
  [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.MUMBAI]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.POLYGON]: `https://polygon.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`,
};

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

// export const gnosisSafe = new SafeAppConnector();

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: true,
});

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? "",
  networks: [1],
});

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[SupportedChainId.MAINNET],
  appName: "Uniswap",
  appLogoUrl: UNISWAP_LOGO_URL,
});
