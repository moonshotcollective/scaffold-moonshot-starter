import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("brand.900", "violet.100")(props),
        bg: mode("violet.50", "#0e0333")(props),
      },
    }),
  },
  fonts,
  colors,
  components: {
    Button,
  },
});

export default customTheme;
