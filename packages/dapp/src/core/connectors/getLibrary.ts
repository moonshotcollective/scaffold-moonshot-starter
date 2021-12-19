import { Web3Provider } from "@ethersproject/providers";
import { SupportedChainId } from "./chains";

const NETWORK_POLLING_INTERVALS: { [chainId: number]: number } = {
  // poll every 15s
  [SupportedChainId.ARBITRUM_ONE]: 15_000,
  [SupportedChainId.ARBITRUM_RINKEBY]: 15_000,
  [SupportedChainId.OPTIMISM]: 15_000,
  [SupportedChainId.OPTIMISTIC_KOVAN]: 15_000,
};

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, "any");
  library.pollingInterval = 15_000;
  library.detectNetwork().then((network) => {
    const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId];
    if (networkPollingInterval) {
      console.debug("Setting polling interval", networkPollingInterval);
      library.pollingInterval = networkPollingInterval;
    }
  });
  return library;
}
