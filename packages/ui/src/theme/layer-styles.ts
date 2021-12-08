import { borderRadius, primary } from './utils/default-props';

const layerStyles = {
  'solid-card': {
    p: '2rem',
    bg: 'whisper',
    borderRadius: borderRadius,
    border: '1px solid',
    borderColor: primary,
    '.chakra-ui-dark &': {
      bg: 'fog',
      border: '1px solid',
      borderColor: 'meteorid',
    },
  },
  'outline-card': {
    p: '2rem',
    border: '1px solid',
    borderRadius: borderRadius,
    borderColor: primary,
    '.chakra-ui-dark &': { borderColor: primary },
  },
  'no-border-card': {
    p: '2rem',
    bg: 'whisper',
    borderRadius: borderRadius,
    '.chakra-ui-dark &': { bg: 'fog' },
  },
};

export default layerStyles;
