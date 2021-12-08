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
    '50': '#EDE7FD',
    '100': '#CDBDFA',
    '200': '#AC92F6',
    '300': '#8C68F3',
    '400': '#6C3DF0',
    '500': '#4C13EC',
    '600': '#3C0FBD',
    '700': '#2D0B8E',
    '800': '#1E085E',
    '900': '#0F042F',
  },
  yellow: {
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
  green: {
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
