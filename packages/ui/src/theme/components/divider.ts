import type {
  SystemStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';
import useThemeColor from '../../hooks/useThemeColor';

const baseStyle: SystemStyleFunction = (props) => {
  const { getBorderColor } = useThemeColor();
  return {
    opacity: 0.6,
    borderColor: 'inherit',
    bg: getBorderColor(props),
  };
};

const variantSolid: SystemStyleObject = {
  borderStyle: 'solid',
};

const variantDashed: SystemStyleObject = {
  borderStyle: 'dashed',
};

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
};

const defaultProps = {
  variant: 'solid',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
