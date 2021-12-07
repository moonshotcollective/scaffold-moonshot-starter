import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Link,
  AspectRatio
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/color-mode";

import { Circle } from "components/Circles/Circle";
import ExampleLogoIcon from '../components/Icons/ExampleLogoIcon';
import { appStaticContent } from '../../next-seo.config';

const Home = () => {
  const { dappLink, name: appName } = appStaticContent;
  const headingColor = useColorModeValue("green.600", "green.500");
  const subHeadingColor = useColorModeValue("green.500", "purple.400");

  return (
    <Box mt={16} mb={8} w="full">
      <HStack>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
          }}
        >
          <VStack align="left" w="full">
            <HStack align="center">
              <ExampleLogoIcon />
              <Heading color={headingColor}>{appStaticContent.name}</Heading>
            </HStack>
            <Text color={subHeadingColor} fontWeight="bold">
              {" "}
              by Moonshot Collective
            </Text>
            <Text pt="10" pr="10" fontSize="3xl">
              {appStaticContent.description}
            </Text>
            <HStack py="12" justifyContent="space-evenly">
              <Link
                href={dappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  h="51px"
                  p="5"
                  fontSize={{
                    base: "xl",
                    xs: "md",
                  }}
                  aria-label="Launch App"
                >
                  Launch App
                </Button>
              </Link>
              <Link
                href="https://moonshotcollective.space"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  h="51px"
                  p="5"
                  fontSize={{
                    base: "xl",
                    xs: "md",
                  }}
                  aria-label="Contribute"
                >
                  Contribute
                </Button>
              </Link>
            </HStack>
          </VStack>
          <Box
            rounded="full"
            w="full"
            justifyContent="flex-end"
          >
            <AspectRatio
              ratio={16 / 10}
              boxShadow="2xl"
              borderRadius="30px"
            >
              <iframe
                style={{ borderRadius: "30px" }}
                title={`${appName} demo video`}
                src='https://bafybeieyeqdlwvnchd6w2la6vgptfweampcpwsjhywxths6nwiphweofzm.ipfs.dweb.link/FEVDnaKVUAI-NDl.mp4'
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </SimpleGrid>
      </HStack>

      <Divider mt="8" backgroundColor="purple.400" />

      <VStack mt="16" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          How it Works
        </Heading>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 3,
          }}
          spacing={4}
        >
          <HStack>
            <Box>
              <Circle
                backgroundColor="none"
                textColor="purple.400"
                w="36px"
                h="36px"
                borderWidth="1px"
                borderColor="purple.400"
                text="1"
              />
            </Box>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </HStack>

          <HStack>
            <Box>
              <Circle
                backgroundColor="none"
                textColor="purple.400"
                w="36px"
                h="36px"
                borderWidth="1px"
                borderColor="purple.400"
                text="2"
              />
            </Box>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </HStack>

          <HStack>
            <Box>
              <Circle
                backgroundColor="none"
                textColor="purple.400"
                w="36px"
                h="36px"
                borderWidth="1px"
                borderColor="purple.400"
                text="3"
              />
            </Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </HStack>
        </SimpleGrid>
      </VStack>
      <Divider mt="16" backgroundColor="purple.400" />

      <VStack mt="16" spacing="4" align="left">
        <Heading size="md" color={headingColor}>
          FAQs
        </Heading>
        <Text color="purple.400" fontWeight="bold">
          When will {appName} be available ?
        </Text>
        <Box whiteSpace="normal">
          <Text as="span">
            We will release the beta version during
          </Text>
          <Link target="_blank" px="1" rel="noopener noreferrer">
            <Text as="span" color="green.500">Schelling Point</Text>
          </Link>
          <Text as="span">
            on the 17th of February 2022.
          </Text>
        </Box>
        <Text color="purple.400" fontWeight="bold">
          What is the tech stack ?
        </Text>
        <Text>
          We are using Next.js with Chakra-UI &amp; TypeScript for our front-end.
        </Text>
        <Text>
          We choose Ceramic for our main data store &amp; decentralized identity management in conjunction with Filecoin &amp; IPFS for file storage.
        </Text>
        <Text color="purple.400" fontWeight="bold">
          Which blockhain will {appName} run on ?
        </Text>
        <Text>
          The dApp will be available on the Ethereum mainnet and Polygon for the
          beta version but we are planning to support chains like Solana,
          Avalanche as well as chains running on Substrate &amp; Tendermint in
          the future.
        </Text>
        <Text color="purple.400" fontWeight="bold">
          Is {appName} open source ?
        </Text>
        <Text>
          Yes, it is! We are looking for super shadowy coders &amp; talented
          Anons!
        </Text>
      </VStack>
      <Divider mt="16" backgroundColor="purple.400" />
    </Box>
  );
};

export default Home;
