import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';
import { colorScheme } from '../default-props';

import Checkbox from './checkbox';

type BaseStyle = {
  control: {
    color: string;
    _focus: { boxShadow: string };
    _checked: {
      bg: string;
      borderColor: string;
      color: string;

      _hover: {
        bg: string;
        borderColor: string;
      };
    };
  };
};

const baseStyleControl: SystemStyleFunction = (props) => {
  const { control } = Checkbox.baseStyle(props) as BaseStyle;

  return {
    ...control,
    borderRadius: 'full',
    _focus: {
      // eslint-disable-next-line no-underscore-dangle
      ...control._focus,
    },
    _checked: {
      // eslint-disable-next-line no-underscore-dangle
      ...control._checked,
      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        w: '50%',
        h: '50%',
        borderRadius: '50%',
        bg: 'currentColor',
      },
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props),
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: 'md' },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: 'lg' },
  },
  sm: {
    control: { width: 3, height: 3 },
    label: { fontSize: 'sm' },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: colorScheme,
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
