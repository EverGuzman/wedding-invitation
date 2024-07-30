import { StylesProvider, background, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xl2: "1535px",
  xxl: "1879px", // Custom breakpoint
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        // backgroundImage: `url(${backgroundImageUrl})`,
        // backgroundAttachment: "fixed",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // bg: mode("#fdfaf3", "gray.800")(props),
        bg: mode("white", "gray.800")(props),
        color: mode("#000035", "white")(props),
      },
    }),
  },
  fonts: {
    heading: `'Birthstone', handwriting`,
    body: `'Charm', handwriting`,
    names: `'Amsterdam-Four', handwriting`,
    date: `'Montserrat', handwriting`,
    notes: `'Sans-serif', handwriting`,
  },
  breakpoints,
});

export default theme;
