import {
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useWeb3React } from '@web3-react/core';
import React, { useContext } from "react";
import { IoMdExit } from "react-icons/io";

import { Web3Context } from "../../contexts/Web3Provider";
import Address from "../custom/Address";


function ConnectButton({ w }: { w?: string }) {
  const { account, connectWeb3, logout } = useContext(Web3Context);
  const { active } = useWeb3React();

  return (
    <HStack w="full">
      {account ? (
        <>
          <Address
            address={account}
            value={account}
            logout={logout}
            fontSize="18px"
            size="short"
          />
          <IconButton aria-label="exit" icon={<IoMdExit />} onClick={logout} />
        </>
      ) : active && (
        <Button onClick={connectWeb3} w={w}>
          Connect
        </Button>
      )}
    </HStack>
  );
}

export default ConnectButton;
