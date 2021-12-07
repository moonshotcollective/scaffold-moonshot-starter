import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import { keyframes } from "@chakra-ui/react";

const rainbow = keyframes`
  0% { box-shadow: 0 0px 20px 0px aqua }
  33% { box-shadow: 0 0px 20px 0px pink }
  66% { box-shadow: 0 0px 20px 0px purple }
  100% { box-shadow: 0 0px 20px 0px aqua }
`;

const baseStyleList: SystemStyleFunction = (props) => {
  return {
    bg: "space",
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "sm",
    borderColor: "space",
    borderWidth: "1px",
    animation: `${rainbow} infinite 4s ease-in-out`,
  };
};

const baseStyleItem: SystemStyleFunction = (props) => {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "aqua.100")(props),
      color: "space",
    },
    _active: {
      bg: mode("gray.200", "aqua.200")(props),
      color: "space",
    },
    _expanded: {
      bg: mode("gray.100", "aqua.100")(props),
      color: "space",
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

export default {
  parts: parts.keys,
  baseStyle,
};
