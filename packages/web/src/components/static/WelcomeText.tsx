import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/hooks";
import { Code } from "@chakra-ui/layout";
import React from "react";
import { HiClipboardCheck } from "react-icons/hi";

const WelcomeText = ({
  address,
  username,
}: {
  address: string;
  username: string;
}) => {
  const { hasCopied, onCopy } = useClipboard(address);
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl" my="10">
        Welcome {username}!
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
        mb="10"
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          {address ? (
            <>
              Your current address is
              <Code colorScheme="green" cursor="pointer" onClick={onCopy} p="2">
                {address}
              </Code>
            </>
          ) : (
            "Please authenticate to access the dApp!"
          )}

          {hasCopied && <HiClipboardCheck />}
        </Box>
      </Box>
    </>
  );
};

export default WelcomeText;
