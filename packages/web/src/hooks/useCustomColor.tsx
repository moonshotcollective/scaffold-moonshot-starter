import { useColorModeValue } from "@chakra-ui/react";

function useCustomColor() {
  const primaryColor = useColorModeValue("violet.800", "violet.200");
  const headingColor = useColorModeValue("fresh", "moon");
  const accentColor = useColorModeValue("fresh", "moon");

  return { primaryColor, headingColor, accentColor };
}

export default useCustomColor;
