import { StylesProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "#000035",
      },
    },
  },
  fonts: {
    heading: `'Birthstone', handwriting`,
    body: `'Charm', handwriting`,
    names: `'Amsterdam-Four', handwriting`,
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
