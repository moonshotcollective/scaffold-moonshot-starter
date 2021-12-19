import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useWeb3React } from '@web3-react/core';
import NextLink from "next/link";
import React, { useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Web3Context } from "../../contexts/Web3Provider";
import Address from "../custom/Address";

// const MenuOptions = (logout: any) => (
//   <Menu>
//     <MenuButton
//       as={Button}
//       rounded="full"
//       variant="link"
//       cursor="pointer"
//       minW={0}
//     >
//       ok
//     </MenuButton>
//     <MenuList>
//       <NextLink href="/profile" passHref>
//         <MenuItem icon={<BsFillPersonLinesFill />}>Profile</MenuItem>
//       </NextLink>
//       <NextLink href="/settings" passHref>
//         <MenuItem icon={<AiFillSetting />}>Settings</MenuItem>
//       </NextLink>
//       <MenuDivider />
//       <MenuItem>
//         <Button colorScheme="pink" onClick={logout}>
//           Logout
//         </Button>
//       </MenuItem>
//     </MenuList>
//   </Menu>
// );

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
          {/* <Button onClick={logout}>Logout</Button> */}
          {/* <MenuOptions /> */}
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
