import { ethers } from "ethers";

/* eslint-disable import/prefer-default-export */
export type State = {
  loading: boolean;
  isSignedIn: boolean;
  account?: string;
  chainId?: number;
  provider?: ethers.providers.Web3Provider;
  staticProvider: ethers.providers.Web3Provider;
  ens?: string;
  self?: any;
  core?: any;
  identityLink?: any;
  contracts?: any;
  connectWeb3?: any;
  logout?: any;
};
export const Web3Reducer = (state: State, action: Record<string, any>) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.payload,
      };
    case "SET_IS_SIGNED_IN":
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case "SET_ENS":
      return {
        ...state,
        ens: action.payload,
      };
    case "SET_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    case "SET_CONTRACTS":
      return {
        ...state,
        contracts: action.payload,
      };
    default:
      return state;
  }
};
