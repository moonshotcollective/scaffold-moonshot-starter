import {
  Box,
  Button,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  FaDiscord,
  FaGithub,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import useCustomColor from "../../hooks/useCustomColor";

function BottomBar() {
  const { bgColor, primaryColor } = useCustomColor();
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      w="full"
      p="2"
      bottom="0"
      position="fixed"
      zIndex="sticky"
      borderTopWidth="1px"
      borderTopColor={primaryColor}
      bg={bgColor}
    >
      <HStack w="full" px="4" justify="space-between">
        <Button>Connect</Button>
        <Menu autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HiDotsHorizontal />}
          ></MenuButton>
          <MenuList>
            <MenuItem icon={<FaDiscord />}>
              <Link
                href="https://discord.gg/3A3kxBSb62"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
            </MenuItem>
            <MenuItem icon={<FaTwitter />}>
              <Link
                href="https://twitter.com/gitcoindao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </MenuItem>
            <MenuItem icon={<FaGithub />}>Github</MenuItem>
            <MenuItem icon={<FaRegCommentDots />}>Blog</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default BottomBar;
