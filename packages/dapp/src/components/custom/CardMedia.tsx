import { VStack, Image } from "@chakra-ui/react";

function CardMedia({ children, src, ...others }: any) {
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
      <Image h="120px" w="full" src={src} objectFit="contain" />
      {children}
    </VStack>
  );
}

export default CardMedia;
