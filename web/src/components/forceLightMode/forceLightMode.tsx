import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ForceLightMode(props: { children: JSX.Element }) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return props.children;
}
