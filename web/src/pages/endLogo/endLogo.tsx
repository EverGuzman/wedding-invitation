import {
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { useCallback } from "react";

export default function EndLogo() {
  return (
    <Stack
      w={"full"}
      id="end-logo"
      p={{ base: 5, md: 10 }}
      alignContent={"center"}
    >
      <Image
        alignSelf={"center"}
        width={"70%"}
        src={`${process.env.PUBLIC_URL}/pictures/logos/1-black.png`}
      />
    </Stack>
  );
}
