import type { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleFunction = (props) => {
  return {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: {
      color: mode(`fresh`, `moon`)(props),
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  };
};

export default {
  baseStyle,
};
