import { Heading, Stack, Text } from "@chakra-ui/react";
import "../landing/landing.css";
import Countdown from "../../components/countdown/countdown";

const targetDate: Date = new Date("2024-09-15T16:00:00");
// const text: string = `El destino nos puso en el mismo camino y ahora caminaremos juntos hasta el final`

const backgroundStyle = {
  backgroundImage: "url(/pictures/CASUAL-40.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "0px -850px",
  backgroundRepeat: "no-repeat",
};

export default function Landing() {
  return (
    <Stack
      direction={"column"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
      id="save-date"
      style={backgroundStyle}
    >
      <br />
      <br />
      <Heading>
        <Text
          fontSize={{ base: "5xl", md: "7xl" }}
          fontWeight={400}
          color={"white"}
        >
          Save the Date
        </Text>
      </Heading>
      <Countdown date={targetDate}></Countdown>
      <br />
      <br />
    </Stack>
  );
}
