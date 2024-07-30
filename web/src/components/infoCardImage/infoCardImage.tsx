import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type InfoCardImageProps = {
  type: InfoCardTypes;
  title: string;
  description: string;
  timeDescription: string;
  locationDescription: string;
  link: string;
  imageSrc: string;
};

export type InfoCardTypes = "right" | "left";

export default function InfoCardImage(props: InfoCardImageProps) {
  const mapaicon = `${process.env.PUBLIC_URL}/icons/mapa_icon2.png`;

  return (
    <Stack
      direction={{
        base: "column",
        md: props.type === "right" ? "row" : "row-reverse",
      }}
      p={2}
      flex={1}
      align={"center"}
      justify={"center"}
      borderWidth={"3px"}
      borderColor={useColorModeValue("blackAlpha.600", "gray.600")}
      pos={"relative"}
      _after={{
        transition: "all .3s ease",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        top: 3,
        right: props.type === "right" ? undefined : 3,
        left: props.type === "right" ? 3 : undefined,
        backgroundColor: useColorModeValue("blackAlpha.200", "white"),
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: "blur(20px)",
        },
      }}
    >
      <Flex
        // position={{ base: "relative", md: "absolute" }}
        flex={{ base: 1, md: 1 }}
        // left={props.type === "left" ? { base: 0, md: 15 } : undefined}
        // right={props.type === "right" ? { base: 0, md: 15 } : undefined}

        zIndex={5}
        w={{ md: "35vw" }}
        pos={"relative"}
        justify={"center"}
        // mt={{ base: undefined, md: 10 }}
      >
        <Image alt={props.description} src={props.imageSrc} width="60%" />
      </Flex>
      <Flex
        flex={1}
        m={8}
        align={"center"}
        justify={"center"}
        // placeContent={props.type === "right" ? "flex-start" : "flex-end"}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"} m={8} justify={"center"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={"center"}
          >
            <Text
              fontWeight={400}
              fontSize={"7xl"}
              color={useColorModeValue("gray.800", "Black")}
              lineHeight={1}
              as={"span"}
            >
              {props.title}
            </Text>
            <br />
          </Heading>
          <Box textAlign={"center"}>
            {/* <Text
              fontSize={"lg"}
              fontWeight={400}
              color={useColorModeValue("gray.600", "Black")}
              mb={"1"}
            >
              Te extendemos la invitación porque nos encantaría que seas parte
              de nuestra ceremonia civil.
            </Text>
            <br /> */}
            <Text
              fontSize={"xl"}
              fontWeight={400}
              color={useColorModeValue("gray.600", "Black")}
              mb={"1"}
            >
              {props.description}
            </Text>
            <Text
              fontSize={"xl"}
              fontWeight={400}
              color={useColorModeValue("gray.600", "Black")}
              mb={"1"}
            >
              {props.timeDescription}
            </Text>
            <Text
              fontSize={"xl"}
              fontWeight={400}
              color={useColorModeValue("gray.600", "Black")}
              mb={"1"}
            >
              {props.locationDescription}
            </Text>
            <Box
              fontSize="xl"
              color={useColorModeValue("gray.600", "white")}
              mb="1"
              as={Link}
              href={props.link}
              isExternal
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text textDecoration="underline" mr="2">
                Ubicación
              </Text>
              <Image src={mapaicon} width="10%" />
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
