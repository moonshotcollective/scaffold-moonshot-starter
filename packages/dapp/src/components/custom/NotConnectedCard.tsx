import { Text, Heading, VStack, Box, Button } from "@chakra-ui/react";
import { useContext } from 'react';
import { Web3Context } from '../../contexts/Web3Provider';

import ConnectButton from "../Buttons/ConnectButton";

function NotConnectedCard() {
  const { connectWeb3 } = useContext(Web3Context)
  return (
    <VStack align="left" w="100%" spacing="0.5rem">
      <Heading fontSize="1.5rem">Wallet not connected</Heading>
      <Text pb="2rem" fontSize="1rem">
        Please connect a wallet to continue.
      </Text>
      <Box justifyContent="center">
        <Button onClick={() => connectWeb3()}>Connect</Button>
      </Box>
    </VStack>
  );
}

export default NotConnectedCard;
