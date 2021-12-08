import {
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="solid"
      size="md"
      aria-label="theme toggle"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
    />
  );
};

export default ThemeToggle;
