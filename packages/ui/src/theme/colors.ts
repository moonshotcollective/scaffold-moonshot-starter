import { DeepPartial, Theme } from '@chakra-ui/react';

interface ExtendedColors {
  neutralDarkest: string;
  neutralDarker: string;
  neutralDark: string;
  neutralLightest: string;
  neutralLighter: string;
  neutralLight: string;
  borderDark: string;
  borderLight: string;

  // Functional
  success: string;
  error: string;

  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentDark: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentLight: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['current' | 'purple']>
> &
  ExtendedColors = {
  // Basic
  neutralDarkest: '#0F0A1E',
  neutralDarker: '#18112C',
  neutralDark: '#513B91',
  neutralLightest: '#fff',
  neutralLighter: '#EFEDF5',
  neutralLight: '#AFA2D6',

  borderDark: '#30363d',
  borderLight: '#c7d2da',
  

  // Functional
  success: '#9AF1A8',
  error: '#F86D97',

  // Main
  primary: {
    '50': '#EDE7FD',
    '100': '#CDBDFA',
    '200': '#AC92F6', //
    '300': '#8C68F3',
    '400': '#6C3DF0',
    '500': '#4C13EC', //
    '600': '#3C0FBD',
    '700': '#2D0B8E',
    '800': '#1E085E',
    '900': '#0F042F',
  },
  accentDark: {
    '50': '#FDF7E7',
    '100': '#FAE9BC',
    '200': '#F7DB91',
    '300': '#F4CD66',
    '400': '#F1BF3C',
    '500': '#EEB111',
    '600': '#BF8D0D',
    '700': '#8F6A0A',
    '800': '#5F4707',
    '900': '#302303',
  },
  accentLight: {
    '50': '#E9FBF3',
    '100': '#C3F4DD',
    '200': '#9CEDC7',
    '300': '#75E5B1',
    '400': '#4FDE9B',
    '500': '#28D785',
    '600': '#20AC6B',
    '700': '#188150',
    '800': '#105635',
    '900': '#082B1B',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
