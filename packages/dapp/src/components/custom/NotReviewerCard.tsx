import { Text, Heading, VStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function NotReviewerCard() {
  const router = useRouter();
  return (
    <VStack align="left" w="100%" spacing="0.5rem">
      <Heading fontSize="1.5rem">You shall not pass!</Heading>
      <Text pb="2rem" fontSize="1rem">
        Sorry, this address is not a reviewer If you think this is an error,
        please contact our support team.
      </Text>
      <Button w="100%" fontSize="md" onClick={() => router.push("/projects")}>
        Browse projects
      </Button>
    </VStack>
  );
}

export default NotReviewerCard;
