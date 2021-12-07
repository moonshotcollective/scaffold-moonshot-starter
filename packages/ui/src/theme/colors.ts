import { DeepPartial, Theme } from '@chakra-ui/react';
/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['current' | 'purple']>
> = {
  // white: '#fff',
  // space: '#0E0333',
  // spacepink: '#301041',
  // spacelight: '#1A103D',
  // spacelightalpha: 'rgba(255, 255, 255, 0.05)',
  // stone: '#9B95B0',
  // smoke: '#3B3058',
  // purple: {
  //   50: '#eee9fe',
  //   100: '#cab8fb',
  //   200: '#8C65F7', // purplelight
  //   300: '#6F3FF5', // purple
  //   400: '#5932C4', // purpledark
  //   500: '#6F3FF5',
  //   600: '#4b0ff2',
  //   700: '#420bdc',
  //   800: '#3b0ac4',
  //   900: '#2d0893',
  // },
  // pink: {
  //   50: '#ffffff',
  //   100: '#fccfdf',
  //   200: '#F579A6', // pinklight
  //   300: '#F35890', // pink
  //   400: '#D44D6E', // pinkdark
  //   500: '#F35890',
  //   600: '#f02870',
  //   700: '#ed1161',
  //   800: '#d60f57',
  //   900: '#a60c44',
  // },
  // aqua: {
  //   50: '#98fee6',
  //   100: '#66fed9',
  //   200: '#5BF1CD', // aqualight
  //   300: '#02E2AC', // aqua
  //   400: '#11BC92', // aquadark
  //   500: '#02E2AC',
  //   600: '#02af86',
  //   700: '#019672',
  //   800: '#017d5f',
  //   900: '#014a39',
  // },

  // Basic
  cosmos: '#0F0A1E',
  fog: '#18112C',
  meteorid: '#513B91',
  ice: '#AFA2D6',
  whisper: '#EFEDF5',

  // Attention
  moon: '#F5D070',
  fresh: '#26cd7f',
  violet: {
    50: '#eee9fe',
    100: '#cab8fb',
    200: '#8D69F3', // dark violet
    300: '#A785F4', // dark violet hover
    400: '#BDA3F7', // dark violet active
    500: '#6F3FF5',
    600: '#4b0ff2', // light violet hover
    700: '#2d0893', // light violet active
    800: '#6F3FF5', // light violet
    900: '#2d0893',
  },
  yellow: {
    50: '#FDF7E7',
    100: '#FAE9BC',
    200: '#F5D070', // dark yellow
    300: '#F7DB91', // dark yellow hover
    400: '#FAE9BC', // dark yellow active
    500: '#EEB111',
    600: '#BF8D0D',
    700: '#8F6A0A',
    800: '#5F4707',
    900: '#302303',
  },
  green: {
    50: '#98fee6',
    100: '#66fed9',
    200: '#5BF1CD', // aqualight
    300: '#02E2AC', // aqua
    400: '#11BC92', // aquadark
    500: '#02E2AC',
    600: '#02af86',
    700: '#019672',
    800: '#017d5f',
    900: '#014a39',
  },

  // Functional
  froly: '#F86D97',
  madang: '#9AF1A8',
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
