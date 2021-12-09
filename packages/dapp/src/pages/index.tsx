import { Heading, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Container from "../components/layout/Container";
import { Title } from "@scaffold-eth/ui";
import useCustomColor from "../core/hooks/useCustomColor";

const Home = () => {
  const router = useRouter();
  const { coloredText, accentColorScheme } = useCustomColor();

  function goTo(destination: string) {
    router.push(destination);
  }
  return (
    <Container>
      <VStack w="full">
        <HStack align="center" w="full">
          <Title>Title</Title>
        </HStack>
        <Text textStyle="h2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          esse rerum doloremque eligendi tenetur reprehenderit consequuntur
          adipisci officia amet quam architecto, commodi deserunt neque debitis
          porro non iusto asperiores molestiae!
        </Text>
        <Text color={coloredText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          esse rerum doloremque eligendi tenetur reprehenderit consequuntur
          adipisci officia amet quam architecto, commodi deserunt neque debitis
          porro non iusto asperiores molestiae!
        </Text>
        <HStack>
          <Button colorScheme={accentColorScheme}>Action 1</Button>
          <Button>Action 1</Button>
          <Button variant="outline">Action 2</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Home;
