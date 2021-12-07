import { Switch as ChakraSwitch, SwitchProps } from '@chakra-ui/react';
import React from 'react';

export { SwitchProps } from '@chakra-ui/react';

export const Switch = (args: SwitchProps & { children?: React.ReactNode }) => {
  return <ChakraSwitch {...args} />;
};
