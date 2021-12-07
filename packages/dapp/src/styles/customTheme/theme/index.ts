import foundations from "./foundations";

const direction = "ltr";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

export const customTheme = {
  direction,
  ...foundations,
  config,
};
