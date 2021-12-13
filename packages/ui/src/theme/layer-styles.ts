import { colors } from '../theme/colors';
import { borderRadius } from './utils/default-props';
import { lighten, darken } from '@chakra-ui/theme-tools';

const layerStyles = {
  'solid-card': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: colors.neutralLight,
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.neutralDark,
    },
  },
  'outline-card': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.neutralLight,
    '.chakra-ui-dark &': {
      borderColor: colors.neutralDark,
    },
  },
  'no-border-card': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
    },
  },

  // With hover highlight
  'solid-hover2': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: colors.neutralLight,
    _hover: { bg: darken(colors.neutralLighter, 5) },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.neutralDark,
      _hover: { bg: lighten(colors.neutralDarker, 5) },
    },
  },
  'outline-hover2': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.neutralLight,
    _hover: { bg: darken(colors.neutralLighter, 5) },
    '.chakra-ui-dark &': {
      borderColor: colors.neutralDark,
      _hover: { bg: lighten(colors.neutralDarker, 5) },
    },
  },
  'no-border-hover2': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    _hover: { bg: darken(colors.neutralLighter, 5) },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      _hover: { bg: lighten(colors.neutralDarker, 5) },
    },
  },

  // With Y transform on hover
  'solid-hover': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: colors.neutralLight,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'translateY(-4px)', shadow: 'lg' },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.neutralDark,
    },
  },
  'outline-hover': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.neutralLight,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'translateY(-4px)', shadow: 'lg' },
    '.chakra-ui-dark &': { borderColor: colors.neutralDark },
  },
  'no-border-hover': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'translateY(-4px)', shadow: 'lg' },
    '.chakra-ui-dark &': { bg: colors.neutralDarker },
  },
};

export default layerStyles;
