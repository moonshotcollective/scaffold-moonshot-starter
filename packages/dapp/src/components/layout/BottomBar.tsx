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
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  FaDiscord,
  FaGithub,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa";
import { HiDotsVertical, HiHome, HiBriefcase, HiCube } from "react-icons/hi";
import useCustomColor from "../../core/hooks/useCustomColor";
import { useRouter } from "next/router";
import NextLink from "next/link";

const NavItem = ({ href, children, icon, ...props }: any) => {
  const { pathname } = useRouter();
  const { primaryColor } = useCustomColor();

  let isActive = false;
  if (href === pathname) {
    isActive = true;
  }

  return (
    <NextLink href={href}>
      <Button mx="2" variant="unstyled">
        <VStack>
          <Icon
            w="full"
            borderRadius="md"
            bg={isActive ? primaryColor : ""}
            as={icon}
            {...props}
          />
          <Text textStyle="small">{children}</Text>
        </VStack>
      </Button>
    </NextLink>
  );
};

function BottomBar() {
  const { getOverBgColor, primaryColor } = useCustomColor();
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
      bg={getOverBgColor}
    >
      <HStack w="full" px="4" justify="space-between">
        <HStack w="full" spacing="8" display={{ base: "flex", md: "none" }}>
          <NavItem icon={HiHome} href="/">
            Home
          </NavItem>
          <NavItem icon={HiBriefcase} href="/contract">
            Contract
          </NavItem>
          <NavItem icon={HiCube} href="/example">
            Example
          </NavItem>
        </HStack>
        <Menu autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HiDotsVertical />}
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
