import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, HStack, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { switchToNetwork } from '../../core/connectors'
import { ALL_SUPPORTED_CHAIN_IDS, CHAIN_INFO } from '../../core/connectors/chains'

function NetworkSwitch() {
  const { chainId, library } = useWeb3React();
  return chainId ? (
    <Menu>
      <MenuButton w="md" as={Button} rightIcon={<ChevronDownIcon />}>
        <HStack>
          <Image
            boxSize='2rem'
            borderRadius='full'
            src={CHAIN_INFO[chainId].logoUrl}
            alt={CHAIN_INFO[chainId].label}
            mr='12px'
          />
          <Text size="sm">
            {CHAIN_INFO[chainId].label}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {ALL_SUPPORTED_CHAIN_IDS.filter(removedCurrentChainId => removedCurrentChainId !== chainId).map((supportedChainId, i) => {
          return <MenuItem minH='48px' key={supportedChainId.toString()} onClick={() => switchToNetwork({ library, chainId: supportedChainId })
          }>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src={CHAIN_INFO[supportedChainId].logoUrl}
              alt={CHAIN_INFO[supportedChainId].label}
              mr='12px'
            />
            <span>{CHAIN_INFO[supportedChainId].label}</span>
          </MenuItem>
        })}
      </MenuList>
    </Menu>
  ) : (
    <Link href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
      <Button>
        Install wallet
      </Button>
    </Link>
  )
}

export default NetworkSwitch
