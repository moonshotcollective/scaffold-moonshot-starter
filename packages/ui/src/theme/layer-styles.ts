import { colors } from '../theme/colors';
import { borderRadius } from './default-props';
import { lighten, darken } from '@chakra-ui/theme-tools';

const layerStyles = {
  'gradient-border': {
    p: '2px',
    borderRadius: borderRadius,
    bgGradient: `linear(to-r, gray.300, ${colors.accentDark[500]}, ${colors.primary[500]})`,
  },
  'gradient-bg': {
    bgGradient: `linear(to-r, gray.300, ${colors.accentDark[500]}, ${colors.primary[500]})`,
    // _hover: {
    //   bgGradient: `linear(to-r, gray.300, ${colors.accentDark[500]}, ${colors.primary[500]})`,
    // },
  },
  'gradient-text': {
    bgGradient: `linear(to-r, gray.300, ${colors.accentDark[500]}, ${colors.primary[500]})`,
    bgClip: 'text',
  },
  'solid-card': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: colors.borderLight,
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.borderDark,
    },
  },
  'outline-card': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.borderLight,
    '.chakra-ui-dark &': {
      borderColor: colors.borderDark,
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
    borderColor: colors.borderLight,
    _hover: { bg: darken(colors.neutralLighter, 5) },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.borderDark,
      _hover: { bg: lighten(colors.neutralDarker, 5) },
    },
  },
  'outline-hover2': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.borderLight,
    _hover: { bg: darken(colors.neutralLighter, 5) },
    '.chakra-ui-dark &': {
      borderColor: colors.borderDark,
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
    borderColor: colors.borderLight,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'translateY(-4px)', shadow: 'lg' },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.borderDark,
    },
  },
  'outline-hover': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.borderLight,
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

  // With Zoom transform on hover
  'solid-hover3': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: colors.borderLight,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'scale(1.05)' },
    '.chakra-ui-dark &': {
      bg: colors.neutralDarker,
      border: '1px solid',
      borderColor: colors.borderDark,
    },
  },
  'outline-hover3': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: colors.borderLight,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'scale(1.05)' },
    '.chakra-ui-dark &': { borderColor: colors.neutralDark },
  },
  'no-border-hover3': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    transition: 'all 0.3s',
    'transition-timing-function': 'spring(1 100 10 10)',
    _hover: { transform: 'scale(1.05)' },
    '.chakra-ui-dark &': { bg: colors.neutralDarker },
  },
};

export default layerStyles;
