import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import components from './components';
import colors from './colors';
import fonts from './fonts';
import styles from './styles';
import layerStyles from './layer-styles';
import textStyles from './text-styles';
import { colorScheme } from './utils/default-props';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const customTheme = extendTheme(
  {
    config,
    components,
    colors,
    fonts,
    styles,
    layerStyles,
    textStyles,
  },
  withDefaultColorScheme({ colorScheme: colorScheme })
);
