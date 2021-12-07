import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import React from 'react';

export { ButtonProps } from '@chakra-ui/react';

export const Button = (args: ButtonProps & { children?: React.ReactNode }) => {
  return (
    <ChakraButton {...args}>{args.children || 'Hello World'}</ChakraButton>
  );
};
