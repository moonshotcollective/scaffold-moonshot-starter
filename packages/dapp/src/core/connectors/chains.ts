import arbitrumLogoUrl from "../../../public/arbitrum_logo.svg";
import optimismLogoUrl from "../../../public/optimism_logo.svg";
import polygonLogoUrl from "../../../public/polygon_logo.svg";

export enum SupportedChainId {
  MAINNET = 1,

  // LOCAL HARDHAT
  HARDHAT = 31337,
  // TESTNETS
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,

  // L2
  POLYGON = 137,
  MUMBAI = 80001,
  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,
  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,

  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.HARDHAT,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,

  SupportedChainId.POLYGON,
  SupportedChainId.MUMBAI,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
];

export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,
] as const;

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number];

export const L2_CHAIN_IDS = [
  SupportedChainId.POLYGON,
  SupportedChainId.MUMBAI,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
] as const;

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number];

export interface L1ChainInfo {
  readonly docs: string;
  readonly explorer: string;
  readonly infoLink: string;
  readonly label: string;
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string;
  readonly logoUrl: string;
}

export type ChainInfo = {
  readonly [chainId: number]: L1ChainInfo | L2ChainInfo;
} & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo;
} & { readonly [chainId in SupportedL1ChainId]: L1ChainInfo };

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.ARBITRUM_ONE]: {
    bridge: "https://bridge.arbitrum.io/",
    docs: "https://offchainlabs.com/",
    explorer: "https://arbiscan.io/",
    infoLink: "https://info.uniswap.org/#/arbitrum",
    label: "Arbitrum",
    logoUrl: arbitrumLogoUrl,
  },
  [SupportedChainId.ARBITRUM_RINKEBY]: {
    bridge: "https://bridge.arbitrum.io/",
    docs: "https://offchainlabs.com/",
    explorer: "https://rinkeby-explorer.arbitrum.io/",
    infoLink: "https://info.uniswap.org/#/arbitrum/",
    label: "Arbitrum Rinkeby",
    logoUrl: arbitrumLogoUrl,
  },
  [SupportedChainId.MAINNET]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Mainnet",
  },
  [SupportedChainId.RINKEBY]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://rinkeby.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Rinkeby",
  },
  [SupportedChainId.ROPSTEN]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://ropsten.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Ropsten",
  },
  [SupportedChainId.KOVAN]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://kovan.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Kovan",
  },
  [SupportedChainId.GOERLI]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://goerli.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Görli",
  },
  [SupportedChainId.OPTIMISM]: {
    bridge: "https://gateway.optimism.io/",
    docs: "https://optimism.io/",
    explorer: "https://optimistic.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/optimism/",
    label: "Optimism",
    logoUrl: optimismLogoUrl,
  },
  [SupportedChainId.OPTIMISTIC_KOVAN]: {
    bridge: "https://gateway.optimism.io/",
    docs: "https://optimism.io/",
    explorer: "https://optimistic.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/optimism",
    label: "Optimistic Kovan",
    logoUrl: optimismLogoUrl,
  },
  [SupportedChainId.HARDHAT]: {
    docs: "https://hardhat.org/getting-started/",
    explorer: "",
    infoLink: "https://hardhat.org",
    label: "Hardhat Local",
  },
  [SupportedChainId.MUMBAI]: {
    docs: "https://polygon.technology/",
    explorer: "https://mumbai.polygonscan.com/",
    infoLink: "https://polygon.technology/",
    bridge: "",
    label: "Mumbai",
    logoUrl: polygonLogoUrl,
  },
  [SupportedChainId.POLYGON]: {
    docs: "https://polygon.technology/",
    explorer: "https://polygonscan.com/",
    infoLink: "https://polygon.technology/",
    bridge: "https://wallet.polygon.technology/",
    label: "Mumbai",
    logoUrl: polygonLogoUrl,
  },
};
