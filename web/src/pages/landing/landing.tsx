import { Flex, Image, Stack, Box, Text } from "@chakra-ui/react";
import "../landing/landing.css";
import FadeInText from "../../components/fadeInText/fadeInText";

const targetDate: Date = new Date("2024-09-15T16:00:00");
// const text: string = `El destino nos puso en el mismo camino y ahora caminaremos juntos hasta el final`;
const text1: string = `Con la bendición de Dios y de nuestros padres
Hector I. Pérez Trujillo y Ma. Imelda Muñóz Salazar
Everardo Guzmán Leal y Sandra Gpe. López Aranda
Tenemos el honor de invitarlos a la celebración de nuestro matrimonio`;

export default function Landing() {
  return (
    <Stack
      direction={"column"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
      id="about-us"
    >
      {/* <SplitScreen /> */}
      <Flex
        rounded={"lg"}
        pos={"relative"}
        width={{ base: "150vw", md: "100vw" }}
        justify={"center"}
      >
        <Box
          height={{
            lg: "1800px",
            sm: "100%",
          }}
          overflow="hidden"
          position="relative"
        >
          <Image
            alt="Melina y Ever"
            src={`${process.env.PUBLIC_URL}/pictures/CASUAL-141.jpg`}
            width="100%"
            objectFit="cover"
            objectPosition={{
              lg: "center -800px",
              sm: "center",
            }} // Adjusts the vertical position to crop from top
            transition="0.2s ease-in-out"
          />
          <Box
            position="absolute"
            bottom="50px" // Position the text towards the bottom of the image
            width="100%"
            height="25%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
            fontFamily={"names"}
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight={400}
            bg="blackAlpha.600" // Semi-transparent background for better text visibility
            p="4"
          >
            {/* <Image
              width={{ base: "80%", lg: "50%" }}
              src={`${process.env.PUBLIC_URL}/pictures/logos/1-white.png`}
            ></Image> */}
            <Stack direction={"column"}>
              <Text>Melina & Ever</Text>
              <br />
              <Text fontSize={"xl"} fontFamily={"date"}>
                1 5 . 0 9 . 2 0 2 4
              </Text>
            </Stack>
          </Box>
        </Box>
      </Flex>

      <FadeInText text={text1}></FadeInText>
    </Stack>
  );
}
