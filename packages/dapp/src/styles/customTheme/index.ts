import { extendTheme } from "@chakra-ui/react";

import { customTheme } from "@scaffold-eth/ui";
import { colors } from "./colors";
import styles from "./styles";
import layerStyles from "./layer-styles";
import fonts from "./fonts";
import { borderRadius } from "./default-values";
import components from "./components";

const myTheme = {
  components: {
    ...components,
    Text: {
      baseStyle: {
        textTransform: "none",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
        borderRadius: borderRadius,
        textTransform: "none",
      },
    },
  },
  colors,
  fonts,
  styles,
  layerStyles,
};

const theme = extendTheme(
  customTheme
  // , myTheme
);

export default theme;
