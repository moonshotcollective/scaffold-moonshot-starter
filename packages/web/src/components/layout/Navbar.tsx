import React from "react";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import NextLink from "next/link";
import TwitterButton from "../Buttons/TwitterButton";
import DiscordButton from "../Buttons/DiscordButton";
import GitcoinIcon from '../Icons/GitcoinIcon';

export default function Navbar() {
  const headingColor = useColorModeValue("purple.400", "green.500");
  return (
    <>
      <Box bg={useColorModeValue("violet.100", "blue.700")} px={4} rounded="xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Flex _hover={{ cursor: "pointer" }} align="center" mr={5}>
              <NextLink href="/">
                <>
                  <GitcoinIcon size="30px" />
                  <Box
                    display={{
                      base: "none",
                      sm: "block",
                    }}
                  >
                    <Heading pl="2" color={headingColor} textTransform="uppercase">
                      Coordination.party
                    </Heading>
                  </Box>
                </>
              </NextLink>
            </Flex>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction="row" spacing={3}>
              <DiscordButton />
              <TwitterButton />
              <ThemeToggle />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
