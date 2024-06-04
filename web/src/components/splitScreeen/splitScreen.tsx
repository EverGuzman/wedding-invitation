import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PhotoCardWithText, {
  PhotoCardWithTextProps,
} from "../photoCardWithText/photoCardWithText";

export default function SplitScreen() {
  const photoCardWithText: PhotoCardWithTextProps = {
    imageSrc: "/pictures/Portada.jpg",
    text: "Nos casamos y queremos compartir este momento con ustedes",
  };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      backgroundColor="blackAlpha.200"
      w={"full"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={"center"}
          >
            <Text
              fontWeight={400}
              fontSize={"6xl"}
              color={useColorModeValue("gray.800", "white")}
              as={"span"}
            >
              Itzel Alejandra
              <br />&<br />
              Jesus Alejandro
            </Text>
            <br />
            <br />
            <Text
              fontSize={"2xl"}
              fontWeight={400}
              color={useColorModeValue("gray.600", "white")}
            >
              25 - Noviembre - 2022
            </Text>
          </Heading>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <PhotoCardWithText {...photoCardWithText}></PhotoCardWithText>
      </Flex>
    </Stack>
  );
}
