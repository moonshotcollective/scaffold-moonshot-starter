import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Circle } from "components/Circles/Circle";
import React from "react";
import { appStaticContent } from "../../next-seo.config";
import ExampleLogoIcon from "../components/Icons/ExampleLogoIcon";
import useCustomColor from "../hooks/useCustomColor";
import { Title } from "@scaffold-eth/ui";

const Home = () => {
  const { dappLink, name: appName } = appStaticContent;
  const { primaryColor, accentColorScheme, accentColor } = useCustomColor();

  return (
    <Box w="full">
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
        }}
      >
        <VStack align="left" w="full">
          <HStack>
            <ExampleLogoIcon />
            <Title>{appStaticContent.name}</Title>
          </HStack>
          <Text as="i" color={primaryColor}>
            by Moonshot Collective
          </Text>
          <Text pt="10" textStyle="h2">
            {appStaticContent.description}
          </Text>
          <Flex d="row" pt="4" pb="12">
            <Link href={dappLink} target="_blank" rel="noopener noreferrer">
              <Button
                m="2"
                size="lg"
                colorScheme={accentColorScheme}
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
              <Button m="2" size="lg" aria-label="Contribute">
                Contribute
              </Button>
            </Link>
          </Flex>
        </VStack>
        <Box rounded="full" w="full" justifyContent="flex-end">
          <AspectRatio ratio={16 / 10} boxShadow="2xl" borderRadius="30px">
            <iframe
              style={{ borderRadius: "30px" }}
              title={`${appName} demo video`}
              src="https://bafybeieyeqdlwvnchd6w2la6vgptfweampcpwsjhywxths6nwiphweofzm.ipfs.dweb.link/FEVDnaKVUAI-NDl.mp4"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>

      <Divider mt="16" bg={primaryColor} />

      <VStack mt="16" spacing="12" align="left">
        <Heading color={accentColor}>How it works</Heading>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 3,
          }}
          spacing={8}
          p="4"
        >
          <VStack layerStyle="no-border-card">
            <Box m="4">
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </VStack>

          <VStack layerStyle="no-border-card">
            <Box m="4">
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </VStack>

          <VStack layerStyle="no-border-card">
            <Box m="4">
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
          </VStack>
        </SimpleGrid>
      </VStack>
      <Divider mt="16" bg={primaryColor} />

      <VStack mt="16" spacing="8" align="left">
        <Heading color={accentColor} mb="8">
          FAQs
        </Heading>

        <Flex d="column">
          <Text color={primaryColor} fontWeight="bold">
            When will {appName} be available ?
          </Text>
          <Box whiteSpace="normal">
            <Text as="span">We will release the beta version during</Text>
            <Link target="_blank" px="1" rel="noopener noreferrer">
              <Text as="span" color={accentColor}>
                Schelling Point
              </Text>
            </Link>
            <Text as="span">on the 17th of February 2022.</Text>
          </Box>
        </Flex>

        <Flex d="column">
          <Text color={primaryColor} fontWeight="bold">
            What is the tech stack ?
          </Text>
          <Text>
            We are using Next.js with Chakra-UI &amp; TypeScript for our
            front-end.
          </Text>
        </Flex>

        <Flex d="column">
          <Text color={primaryColor} fontWeight="bold">
            Which blockhain will {appName} run on ?
          </Text>
          <Text>
            The dApp will be available on the Ethereum mainnet and Polygon for
            the beta version but we are planning to support other networks in the future.
          </Text>
        </Flex>

        <Flex d="column">
          <Text color={primaryColor} fontWeight="bold">
            Is {appName} open source ?
          </Text>
          <Text>
            Yes, it is! We are looking for super shadowy coders &amp; talented
            Anons!
          </Text>
        </Flex>
      </VStack>
      <Divider mt="16" bg={primaryColor} />
    </Box>
  );
};

export default Home;
