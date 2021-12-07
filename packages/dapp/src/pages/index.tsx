import {
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import Container from "../components/layout/Container";

const Home = () => {
  const router = useRouter();

  function goTo(destination: string) {
    router.push(destination);
  }
  return (
    <Container>
      <VStack w="full" bgImage="/images/nightcity1.png" p="8">
        <HStack align="center">
          <Heading fontSize="7xl">Homepage</Heading>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </VStack>
    </Container>
  );
};

export default Home;
