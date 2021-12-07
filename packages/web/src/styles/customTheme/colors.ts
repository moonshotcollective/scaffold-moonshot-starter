import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    50: "#ECE7FE",
    100: "#CABCFB",
    200: "#A890F8",
    300: "#8665F6",
    400: "#643AF3",
    500: "#420EF1",
    600: "#350BC1",
    700: "#280891",
    800: "#1A0660",
    900: "#0D0330",
  },
  blue: {
    50: "#E8EBFC",
    100: "#C0C8F7",
    200: "#97A5F1",
    300: "#6F82EC",
    400: "#465EE7",
    500: "#1E3BE1",
    600: "#023FAA",
    700: "#2F2A5B",
    800: "#001849",
    900: "#060C2D",
  },
  yellow: {
    50: "#FFFAE5",
    100: "#FFF1B8",
    200: "#FFE88A",
    300: "#FFDE5C",
    400: "#FFD52E",
    500: "#FFCC00",
    600: "#CCA300",
    700: "#997A00",
    800: "#665200",
    900: "#332900",
  },
  purple: {
    50: "#EFE7FD",
    100: "#D2BCFB",
    200: "#B591F8",
    300: "#9866F5",
    400: "#6F3FF5",
    500: "#6A39EC",
    600: "#5E0FF0",
    700: "#4B0CC0",
    800: "#380990",
    900: "#250660",
  },
  green: {
    50: "#E8FCF4",
    100: "#BFF7E1",
    200: "#96F3CE",
    300: "#6DEEBB",
    400: "#44E9A8",
    500: "#00DEA5",
    600: "#1BE495",
    700: "#16B677",
    800: "#108959",
    900: "#0B5B3C",
  },
  violet: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#c9b8ff",
    400: "#bfaef4",
    500: "#ad98f1",
    600: "#a993f0",
    700: "#a68ff0",
    800: "#a28aef",
    900: "#9e86ef",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
