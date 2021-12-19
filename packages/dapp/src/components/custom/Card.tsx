import { VStack, StackProps } from "@chakra-ui/react";

function Card(props: StackProps) {
  const { children, ...others } = props;
  return (
    <VStack
      bg="spacelightalpha"
      p="8"
      h="lg"
      borderRadius="base"
      spacing="4"
      align="start"
      {...others}
    >
      {children}
    </VStack>
  );
}

export default Card;
