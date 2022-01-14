import { menuAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
import useThemeColor from '../../hooks/useThemeColor';
import { borderRadius, colorScheme } from '../default-props';

const baseStyleList: SystemStyleFunction = (props) => {
  const { getOverBgColor } = useThemeColor();

  return {
    bg: getOverBgColor(props),
    boxShadow: mode('sm', 'dark-lg')(props),
    color: 'inherit',
    minW: '3xs',
    // py: '2',
    p: '2',
    zIndex: 1,
    borderRadius: borderRadius,
    borderColor: getOverBgColor(props),
    borderWidth: '1px',
  };
};

const baseStyleItem: SystemStyleFunction = (props) => {
  // const { colorScheme: c } = props;
  const { getPrimaryColor, getInverseTextColor } = useThemeColor();

  return {
    py: '0.4rem',
    px: '0.8rem',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    borderRadius: borderRadius,
    _focus: {
      bg: getPrimaryColor(props),
      color: getInverseTextColor(props),
    },
    _active: {
      bg: getPrimaryColor(props),
      color: getInverseTextColor(props),
    },
    _expanded: {
      bg: getPrimaryColor(props),
      color: getInverseTextColor(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  };
};

const baseStyleGroupTitle: SystemStyleObject = {
  mx: 4,
  my: 2,
  fontWeight: 'semibold',
  fontSize: 'sm',
};

const baseStyleCommand: SystemStyleObject = {
  opacity: 0.6,
};

const baseStyleDivider: SystemStyleObject = {
  border: 0,
  borderBottom: '1px solid',
  borderColor: 'inherit',
  my: '0.5rem',
  opacity: 0.6,
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: 'common',
  transitionDuration: 'normal',
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  button: baseStyleButton,
  list: baseStyleList(props),
  item: baseStyleItem(props),
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider,
});

const defaultProps = {
  colorScheme: colorScheme,
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
};
