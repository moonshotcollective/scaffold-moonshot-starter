import { mode, Styles } from "@chakra-ui/theme-tools";
import { colors } from "./colors";

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      fontSize: ["16px", "110%", "120%", "140%"],
      color: mode(colors.neutralDarkest, colors.neutralLightest)(props),
      bg: mode(colors.neutralLightest, colors.neutralDarkest)(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
  }),
};

export default styles;
