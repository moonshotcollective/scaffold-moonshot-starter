import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useCustomColor from "../../hooks/useCustomColor";
import DiscordButton from "../Buttons/DiscordButton";
import TwitterButton from "../Buttons/TwitterButton";
import ScaffoldIcon from "../Icons/ScaffoldIcon";
import ThemeToggle from "./ThemeToggle";

const LinkItem = ({ href, children, ...props }: any) => {
  const { pathname } = useRouter();
  const { accentColor } = useCustomColor();

  let isActive = false;
  if (href === pathname) {
    isActive = true;
  }

  return (
    <NextLink href={href}>
      <Link color={isActive ? accentColor : ""} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

const LinkItems = () => {
  return (
    <>
      <LinkItem href="/">Home</LinkItem>
      <LinkItem href="/about">About</LinkItem>
    </>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accentColor } = useCustomColor();

  return (
    <Box as="nav" w="100%" top="0" zIndex={1}>
      <Container
        display="flex"
        p={2}
        maxW="7xl"
        wrap="wrap"
        alignItems="center"
        justify="space-between"
      >
        <HStack px="4">
          <ScaffoldIcon size="36px" />
          <NextLink href="/">
            <Link
              display={{ base: "none", md: "flex" }}
              fontWeight="bold"
              color={accentColor}
              textTransform="uppercase"
              size="md"
            >
              Scaffold
            </Link>
          </NextLink>
          <HStack pl="4" spacing="4" display={{ base: "none", lg: "flex" }}>
            <LinkItems />
          </HStack>
        </HStack>

        <HStack marginLeft="auto">
          <HStack display={{ base: "none", md: "flex" }}>
            <DiscordButton />
            <TwitterButton />
          </HStack>
          <ThemeToggle />
          <IconButton
            size="md"
            px="2"
            mr="2"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
      </Container>

      {isOpen ? (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack onClick={onClose} align="start" fontSize="lg" spacing="4">
                <LinkItems />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : null}
    </Box>
  );
};

export default Header;
