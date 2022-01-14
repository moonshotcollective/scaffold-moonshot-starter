import {
  Box as ChakraBox,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../theme/colors';

export { ButtonProps } from '@chakra-ui/react';

export const FixedBottom = (
  args: BoxProps & { children?: React.ReactNode }
) => {
  const getOverBgColor = useColorModeValue(
    colors.neutralLighter,
    colors.neutralDarker
  );
  const primaryColor = useColorModeValue(
    colors.primary[500],
    colors.primary[200]
  );

  return (
    <ChakraBox
      display={{ base: 'flex', md: 'none' }}
      w="full"
      p="2"
      bottom="0"
      position="fixed"
      zIndex="sticky"
      borderTopWidth="1px"
      borderTopColor={primaryColor}
      bg={getOverBgColor}
      {...args}
    >
      {args.children}
    </ChakraBox>
  );
};
