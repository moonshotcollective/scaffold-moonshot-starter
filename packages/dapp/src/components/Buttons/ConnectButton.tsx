import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Web3Context } from "../../contexts/Web3Provider";
import Address from '../custom/Address';

function ConnectButton({ w }: { w?: string }) {
  const { account, connectWeb3, logout, provider } = useContext(Web3Context);

  return (
    <HStack w="full">
      {account && provider ? (
        <>
          <Address address={account} value={account} fontSize="18px" size="short" />
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Button onClick={connectWeb3} w={w}>
          Connect
        </Button>
      )}
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
        >
          {/* <Avatar
            w="40px"
            h="40px"
            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          /> */}
        </MenuButton>
        <MenuList rounded="3xl">
          <MenuItem>
            <Link href="/profile" passHref>
              <Button leftIcon={<BsFillPersonLinesFill />} w="full">
                Profile
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/settings" passHref>
              <Button leftIcon={<AiFillSetting />} w="full">
                Settings
              </Button>
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem w="full">
            <Button onClick={logout}>Logout</Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default ConnectButton;
