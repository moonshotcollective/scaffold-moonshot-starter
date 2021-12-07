import { extendTheme } from '@chakra-ui/react';

import components from './components';
import colors from './colors';
import fonts from './fonts';
import styles from './styles';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,
  components,
  colors,
  fonts,
  styles,
});
