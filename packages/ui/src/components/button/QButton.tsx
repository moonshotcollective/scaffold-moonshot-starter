import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import React from 'react';

export { ButtonProps } from '@chakra-ui/react';

export const QButton = (args: ButtonProps & { children?: React.ReactNode }) => {
  return (
    <ChakraButton
      textColor="#ffcc00"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
        fontWeight: 'bold',
        background: '#ffcc00',
        color: '#6F3FF5',
      }}
      rounded="full"
      {...args}
    >
      {args.children || 'Hello World'}
    </ChakraButton>
  );
};
