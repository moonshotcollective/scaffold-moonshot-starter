import { useMultiAuth } from "@ceramicstudio/multiauth";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

function LogoutButton(props: ButtonProps) {
  // omit state, connect & pick disconnect
  const [, , disconnect] = useMultiAuth();
  return (
    <Button
      rightIcon={<HiOutlineLogout />}
      variant="outline"
      color="red.500"
      onClick={() => disconnect()}
      borderColor="red.500"
      _hover={{
        boxShadow: "lg",
        fontWeight: "bold",
        background: "red.100",
      }}
      _active={{
        bg: "red.200",
      }}
      rounded="full"
      {...props}
    >
      LOGOUT
    </Button>
  );
}

export default LogoutButton;
