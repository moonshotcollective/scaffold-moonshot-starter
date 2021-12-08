import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const baseStyleOverlay: SystemStyleObject = {
  bg: 'blackAlpha.600',
  zIndex: 'modal',
};

const baseStyleDialogContainer: SystemStyleFunction = (props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    display: 'flex',
    zIndex: 'modal',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
  };
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  const { scrollBehavior } = props;

  const bgColor = mode(`gray.100`, `cosmos`)(props);
  const borderColor = mode(`gray.100`, `fog`)(props);

  return {
    bg: mode('white', bgColor)(props),
    borderColor: borderColor,
    borderWidth: '1px',
    borderRadius: 'none',
    color: 'inherit',
    my: '3.75rem',
    zIndex: 'modal',
    maxH: scrollBehavior === 'inside' ? 'calc(100% - 7.5rem)' : undefined,
    boxShadow: mode('lg', 'dark-lg')(props),
  };
};

const baseStyleHeader: SystemStyleFunction = (props) => {
  return {
    px: 6,
    py: 4,
    fontSize: 'xl',
    fontWeight: 'semibold',
    color: mode('fog', 'white')(props),
  };
};

const baseStyleCloseButton: SystemStyleObject = {
  position: 'absolute',
  top: 2,
  insetEnd: 3,
  color: 'pink.200',
  _focus: {
    boxShadow: 'none',
  },
};

const baseStyleBody: SystemStyleFunction = (props) => {
  const { scrollBehavior } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
    color: 'gray.200',
  };
};

const baseStyleFooter: SystemStyleObject = {
  px: 6,
  py: 4,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader(props),
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string): PartsStyleObject<typeof parts> {
  if (value === 'full') {
    return {
      dialog: { maxW: '100vw', minH: '100vh', my: 0 },
    };
  }
  return {
    dialog: { maxW: value },
  };
}

const sizes = {
  xs: getSize('xs'),
  sm: getSize('sm'),
  md: getSize('md'),
  lg: getSize('lg'),
  xl: getSize('xl'),
  '2xl': getSize('2xl'),
  '3xl': getSize('3xl'),
  '4xl': getSize('4xl'),
  '5xl': getSize('5xl'),
  '6xl': getSize('6xl'),
  full: getSize('full'),
};

const defaultProps = {
  size: 'md',
  isCentered: 'true',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
