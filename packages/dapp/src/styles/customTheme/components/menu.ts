import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../colors";
import { borderRadius, colorScheme } from "../default-values";

const baseStyleList: SystemStyleFunction = (props) => {
  return {
    bg: mode(colors.neutralLighter, colors.neutralDarker)(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    // py: '2',
    p: "2",
    zIndex: 1,
    borderRadius: borderRadius,
    borderColor: mode(colors.neutralLighter, colors.neutralDarker)(props),
    borderWidth: "1px",
  };
};

const baseStyleItem: SystemStyleFunction = (props) => {
  // const { colorScheme: c } = props;

  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    borderRadius: borderRadius,
    _focus: {
      bg: mode(colors.primary[500], colors.primary[200])(props),
      color: mode(colors.neutralLightest, colors.neutralDarkest)(props),
    },
    _active: {
      bg: mode(colors.primary[500], colors.primary[200])(props),
      color: mode(colors.neutralLightest, colors.neutralDarkest)(props),
    },
    _expanded: {
      bg: mode(colors.primary[500], colors.primary[200])(props),
      color: mode(colors.neutralLightest, colors.neutralDarkest)(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  };
};

const baseStyleGroupTitle: SystemStyleObject = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
};

const baseStyleCommand: SystemStyleObject = {
  opacity: 0.6,
};

const baseStyleDivider: SystemStyleObject = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6,
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
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
