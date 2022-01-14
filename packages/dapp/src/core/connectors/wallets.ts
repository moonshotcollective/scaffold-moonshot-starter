import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected, portis, walletconnect, walletlink } from ".";
import INJECTED_ICON_URL from "../../../public/arrow-right.svg";
import COINBASE_ICON_URL from "../../../public/coinbaseWalletIcon.svg";
import WALLETCONNECT_ICON_URL from "../../../public/walletConnectIcon.svg";

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    iconURL: INJECTED_ICON_URL,
    description: "Injected web3 provider.",
    href: null,
    color: "#010101",
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconURL: "../../../public/metamask.png",
    description: "Easy-to-use browser extension.",
    href: null,
    color: "#E8831D",
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    iconURL: WALLETCONNECT_ICON_URL,
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: "#4196FC",
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: "Coinbase Wallet",
    iconURL: COINBASE_ICON_URL,
    description: "Use Coinbase Wallet app on mobile device",
    href: null,
    color: "#315CF5",
  },
  COINBASE_LINK: {
    name: "Open in Coinbase Wallet",
    iconURL: COINBASE_ICON_URL,
    description: "Open in Coinbase Wallet app.",
    href: "https://go.cb-w.com/mtUDhEZPy1",
    color: "#315CF5",
    mobile: true,
    mobileOnly: true,
  },
  Portis: {
    connector: portis,
    name: "Portis",
    iconURL: "../../../public/portisIcon.png",
    description: "Login using Portis hosted wallet",
    href: null,
    color: "#4A6C9B",
    mobile: true,
  },
};
