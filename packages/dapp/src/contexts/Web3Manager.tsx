import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useEagerConnect, useInactiveListener } from '../core/hooks/web3'
import { ctxNetworkConstant, network } from '../core/connectors'
import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, Spinner } from '@chakra-ui/react'

export default function Web3ReactManager({ children }: { children: JSX.Element }) {
  const { active } = useWeb3React()
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React(ctxNetworkConstant)

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network)
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active])

  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager)

  // handle delayed loader state
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true)
    }, 600)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // on page load, do nothing until we've tried to connect to the injected connector
  if (!triedEager) {
    return null
  }

  // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
  if (!active && networkError) {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>Oops! An unknown error occurred.</AlertTitle>
        <AlertDescription>Please refresh the page, or visit from another browser or device.</AlertDescription>
        <CloseButton position='absolute' right='8px' top='8px' />
      </Alert>
    )
  }

  // if neither context is active, spin
  if (!active && !networkActive) {
    return showLoader ? (
      <Alert status='info'>
        <Spinner />
        Loading..
      </Alert>
    ) : null
  }

  return children
}