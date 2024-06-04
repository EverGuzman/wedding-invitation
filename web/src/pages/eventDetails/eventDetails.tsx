import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import InfoCardImage, {
  InfoCardImageProps,
} from "../../components/infoCardImage/infoCardImage";
import InfoCardImageDouble, {
  InfoCardImageDoubleProps,
} from "../../components/infoCardImageDouble/infoCardImageDouble";
import DividerSectionHeader from "../../components/sectionHeader/dividerSectionHeader/dividerSectionHeader";

const churchInfo: InfoCardImageProps = {
  type: "right",
  title: "Ceremonia Religiosa",
  description: "Templo de San Maximiliano María Kolbe",
  timeDescription: "4:00pm",
  locationDescription: "Talia 329, Contry Tesoro, 64830 Monterrey, N.L.",
  link: "https://maps.app.goo.gl/U78bbf73cP3ZZyat8",
  imageSrc: `${process.env.PUBLIC_URL}/icons/church-icon.png`,
};

const civilInfo: InfoCardImageProps = {
  type: "left",
  title: "Civil",
  description: "La Cantera Eventos",
  timeDescription: "6:30pm",
  locationDescription:
    "Carr Nacional 2700, Valle de Cristal, 64986 Monterrey, N.L.",
  link: "https://maps.app.goo.gl/DqhbbiNQbHyxyhFc7",
  imageSrc: `${process.env.PUBLIC_URL}/pictures/details/Civil.jpg`,
};

const receptionInfo: InfoCardImageProps = {
  type: "left",
  title: "Recepción",
  description: "La Cantera Eventos",
  timeDescription: "7:00pm",
  locationDescription:
    "Carr Nacional 2700, Valle de Cristal, 64986 Monterrey, N.L.",
  link: "https://maps.app.goo.gl/DqhbbiNQbHyxyhFc7",
  imageSrc: `${process.env.PUBLIC_URL}/icons/reception-icon.png`,
};

export default function EventDetails() {
  return (
    <Stack id="event-details" w={"full"} p={"20pt"}>
      <DividerSectionHeader title="Detalles del Evento"></DividerSectionHeader>
      <Stack spacing={10} p={{ base: undefined, md: 10 }}>
        <InfoCardImage {...churchInfo}></InfoCardImage>
        <InfoCardImage {...receptionInfo}></InfoCardImage>
        <Stack
          direction={{ base: "column", md: "row" }}
          p={2}
          flex={1}
          align={"center"}
          justify={"center"}
          backgroundColor={"transparent"}
          borderWidth={"3px"}
          borderColor={useColorModeValue("blackAlpha.600", "gray.600")}
          pos={"relative"}
        >
          <Flex flex={1} m={8} align={"center"} justify={"center"}>
            <Stack spacing={2} w={"full"} maxW={"lg"}>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                textAlign={"center"}
              >
                <Text
                  fontWeight={400}
                  fontSize={"4xl"}
                  color={useColorModeValue("gray.800", "Black")}
                  as={"span"}
                >
                  Código de vestimenta
                </Text>
                <br />
              </Heading>
              <Box textAlign={"center"}>
                <Text
                  fontSize={"2xl"}
                  fontWeight={800}
                  color={useColorModeValue("gray.600", "Black")}
                >
                  Formal
                </Text>
                <Flex justify={"center"}>
                  <Image
                    alt="Melina y Ever"
                    src={`${process.env.PUBLIC_URL}/pictures/details/dresscode.png`}
                    width="35%"
                  />
                </Flex>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
