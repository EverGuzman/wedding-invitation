import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export type PhotoCardProps = {
  imageSrc: string;
};

export default function PhotoCard(props: PhotoCardProps) {
  return (
    <Center py={4}>
      <Box
        // position={{ base: "relative", md: "absolute" }}
        // flex={{ base: 1, md: 0 }}
        // left={{ base: 0, md: 15 }}
        // right={{ base: 0, md: 15 }}
        p={5}
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
      </Box>
    </Center>
  );
}
