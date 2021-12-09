import { useColorModeValue } from "@chakra-ui/react";

function useCustomColor() {
  const primaryColor = useColorModeValue("violet.800", "violet.200");
  const bgColor = useColorModeValue("whisper", "fog");
  const accentColor = useColorModeValue("fresh", "moon");

  return { primaryColor, bgColor, accentColor };
}

export default useCustomColor;
