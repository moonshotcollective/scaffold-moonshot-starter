import { extendTheme } from "@chakra-ui/react";

import { customTheme } from "@scaffold-eth/ui";
// import { customTheme } from "./theme";

// Style guide;
//   white: "#fff",
//   space: "#0E0333",
//   spacelight: "#1A103D",
//   spacelightalpha: "rgba(255, 255, 255, 0.05)",
//   stone: "#9B95B0",
//   smoke: "#3B3058",
//   purple: {
//     200: "#8C65F7", // purplelight
//     300: "#6F3FF5", // purple
//     400: "#5932C4", // purpledark
//   },
//   pink: {
//     200: "#F579A6", // pinklight
//     300: "#F35890", // pink
//     400: "#D44D6E", // pinkdark
//   },
//   aqua: {
//     200: "#5BF1CD", // aqualight
//     300: "#02E2AC", // aqua
//     400: "#11BC92", // aquadark
//   },
// };
const theme = extendTheme(customTheme);

export default theme;
