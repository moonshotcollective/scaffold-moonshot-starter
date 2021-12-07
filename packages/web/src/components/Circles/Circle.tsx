import { Flex } from "@chakra-ui/layout";
import { background } from "@chakra-ui/styled-system";
import React from "react";

export const Circle = ({
  text,
  textColor,
  w,
  h,
  backgroundColor,
  borderColor,
  borderWidth,
  ...props
}: {
  text: string;
  textColor: string;
  borderColor: string;
  borderWidth: string;
  backgroundColor: string;
  w: string;
  h: string;
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      rounded="full"
      textColor={textColor}
      w={w}
      h={h}
      borderWidth={borderWidth}
      borderColor={borderColor}
      {...props}
    >
      {text}
    </Flex>
  );
};
