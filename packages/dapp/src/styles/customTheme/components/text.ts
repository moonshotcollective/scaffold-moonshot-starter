import { SystemStyleObject, SystemStyleFunction } from '@chakra-ui/theme-tools';
import useThemeColor from "../useThemeColor";

const baseStyle: SystemStyleFunction = (props) => {
  const { getPrimaryColor, getInverseTextColor } = useThemeColor();
  return {
    _selection: {
      bg: getPrimaryColor(props),
      color: getInverseTextColor(props),
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {};

const defaultProps = {};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
