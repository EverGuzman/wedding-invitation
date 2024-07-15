import { Flex, Image, Stack, Box, Text, Icon } from "@chakra-ui/react";
import "../landing/landing.css";
import FadeInText from "../../components/fadeInText/fadeInText";
import { PlayIcon } from "../../components/icons/icons";

const targetDate: Date = new Date("2024-09-15T16:00:00");
// const text: string = `El destino nos puso en el mismo camino y ahora caminaremos juntos hasta el final`;
const text1: string = `Nos conocimos hace 12 años bailando, y hoy, 
nuestros corazones siguen latiendo al mismo compás.`;

const text2: string = `Con la bendición de Dios y de nuestros padres
Hector I. Pérez Trujillo y Ma. Imelda Muñoz Salazar
Everardo Guzmán Leal y Sandra Gpe. López Aranda,
este 15 de Septiembre del 2024`;

const text3: string = `¡NOS CASAMOS!`;

const text4: string = `Nuestra historia no comienza aquí,
pero sí el inicio de una vida juntos.`;

export default function TextAfterLanding() {
  return (
    <Stack
      direction={"column"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
      id="about-us"
    >
      <br />
      <FadeInText fontSize="lg" text={text1}></FadeInText>

      <FadeInText fontSize="lg" text={text2}></FadeInText>

      <FadeInText fontSize="4xl" text={text3}></FadeInText>

      <FadeInText fontSize="lg" text={text4}></FadeInText>

      <br />
    </Stack>
  );
}
