import { createWeb3ReactRoot } from '@web3-react/core'
import { ctxNetworkConstant } from '../core/connectors';


const Web3ReactProviderDefault = createWeb3ReactRoot(ctxNetworkConstant)

const Web3ReactProviderDefaultSSR = ({ children, getLibrary }: any) => {
  return (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderDefault>
  )
}

export default Web3ReactProviderDefaultSSR;