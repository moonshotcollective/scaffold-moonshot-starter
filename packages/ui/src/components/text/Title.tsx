import {
  Text as ChakraText,
  TextProps,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../theme/colors';

export { TextProps } from '@chakra-ui/react';

export const Title = (args: TextProps & { children?: React.ReactNode }) => {
  const titleColor = useColorModeValue(
    colors.accentLight[500],
    colors.accentDark[500]
  );

  return (
    <ChakraText
      as="h1"
      textStyle="h1"
      fontWeight="bold"
      color={titleColor}
      {...args}
    >
      {args.children || 'Hello World'}
    </ChakraText>
  );
};
