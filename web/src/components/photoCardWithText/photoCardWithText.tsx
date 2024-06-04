import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export type PhotoCardWithTextProps = {
  imageSrc: string;
  text: string;
};

export default function PhotoCardWithText(props: PhotoCardWithTextProps) {
  return (
    <Center py={4}>
      <Box
        p={2}
        bg={useColorModeValue("white", "white")}
        pos={"relative"}
        zIndex={1}
        border={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("blackAlpha.200", "gray.900")}
      >
        <Box rounded={"lg"} pos={"relative"}>
          <Image src={props.imageSrc} />
        </Box>
        <Stack pt={5} pb={10} align={"center"}>
          <Text
            color={"gray.500"}
            fontSize={"md"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            {props.text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
