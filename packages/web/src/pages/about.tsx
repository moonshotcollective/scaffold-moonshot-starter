import {
  Heading,
  HStack,
  Text,
  VStack,
  Box
} from "@chakra-ui/react";
import { useRouter } from "next/router";


const About = () => {
  const router = useRouter();

  function goTo(destination: string) {
    router.push(destination);
  }
  return (
    <Box w="full">
      <VStack w="full" p="8">
        <HStack align="center" w="full">
          <Heading as="h1" color="fresh">About</Heading>
        </HStack>
        <Text as="h2" fontSize="xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos esse rerum doloremque eligendi tenetur reprehenderit consequuntur adipisci officia amet quam architecto, commodi deserunt neque debitis porro non iusto asperiores molestiae!
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos esse rerum doloremque eligendi tenetur reprehenderit consequuntur adipisci officia amet quam architecto, commodi deserunt neque debitis porro non iusto asperiores molestiae!
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
