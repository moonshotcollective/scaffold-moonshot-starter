import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
}

function NavLink({
  to,
  activeProps,
  children,
  _hover,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === to;
  const color = useColorModeValue("black", "selected");
  const hoverColors = {
    bg: useColorModeValue("gray.200", "brand.900"),
    color: useColorModeValue("purple.400", "green.500"),
  };
  if (isActive) {
    return (
      <Link href={to} passHref>
        <ChakraLink
          fontWeight="bold"
          px={2}
          py={1}
          color={color}
          _hover={{
            textDecoration: "none",
            ...hoverColors,
          }}
          rounded={"md"}
          {...props}
          {...activeProps}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to} passHref>
      <ChakraLink
        px={2}
        py={1}
        rounded={"md"}
        color={color}
        _hover={{
          textDecoration: "none",
          ...hoverColors,
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
