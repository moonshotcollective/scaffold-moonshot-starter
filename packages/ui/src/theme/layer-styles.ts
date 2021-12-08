import { colors } from '../theme/colors';
import { borderRadius } from './utils/default-props';

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
    '.chakra-ui-dark &': { borderColor: colors.neutralDark },
  },
  'no-border-card': {
    p: '2rem',
    bg: colors.neutralLighter,
    borderRadius: borderRadius,
    '.chakra-ui-dark &': { bg: colors.neutralDarker },
  },
};

export default layerStyles;
