import type { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleFunction = (props) => {
  return {
    fontSize: 'md',
    marginEnd: 3,
    mb: 2,
    color: mode('fog', 'white')(props),
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: {
      opacity: 0.4,
    },
  };
};

export default {
  baseStyle,
};
