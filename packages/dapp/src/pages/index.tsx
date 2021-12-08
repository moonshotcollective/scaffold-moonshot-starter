import {
  Heading,
  HStack,
  Text,
  VStack,
  Button
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
      <VStack w="full" p="8">
        <HStack align="center">
          <Heading fontSize="7xl">Homepage</Heading>
        </HStack>
        <Heading fontSize="xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos esse rerum doloremque eligendi tenetur reprehenderit consequuntur adipisci officia amet quam architecto, commodi deserunt neque debitis porro non iusto asperiores molestiae!
        </Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos esse rerum doloremque eligendi tenetur reprehenderit consequuntur adipisci officia amet quam architecto, commodi deserunt neque debitis porro non iusto asperiores molestiae!
        </Text>
        <HStack>
          <Button>Action 1</Button>
          <Button variant="outline">Action 2</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Home;
