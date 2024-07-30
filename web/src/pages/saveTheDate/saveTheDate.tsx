import {
  Heading,
  Stack,
  Text,
  Box,
  Image,
  Flex,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import "../landing/landing.css";
import Countdown from "../../components/countdown/countdown";

const targetDate = new Date("2024-09-15T16:00:00");

export default function SaveTheDate() {
  const imageUrl = useBreakpointValue({
    xxl: `${process.env.PUBLIC_URL}/pictures/CASUAL-40.jpg`,
    base: `${process.env.PUBLIC_URL}/pictures/CASUAL-61.jpg`,
  });

  const objectPosition = useBreakpointValue({
    xxl: "center -800px",
    xl2: "center -300px",
    lg: "center -200px",
    base: "center 0px",
  });

  const event = {
    title: "Melina y Ever",
    location: "La Cantera Eventos",
    start: "20240915T160000Z", // Start date and time in YYYYMMDDTHHmmssZ format
    end: "20240916T003000Z", // End date and time in YYYYMMDDTHHmmssZ format
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&location=${encodeURIComponent(
    event.location
  )}`;

  return (
    <Stack
      direction={"column"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
    >
      <Flex rounded={"lg"} pos={"relative"} justify={"center"}>
        <Box
          height={{
            xl: "400px",
            lg: "400px",
            base: "280px", // Increased height for a better zoom effect on mobile
          }}
          overflow="hidden"
          position="relative"
        >
          <Image
            alt="Melina y Ever"
            src={imageUrl}
            objectFit="cover"
            objectPosition={objectPosition}
            transition="0.2s ease-in-out"
          />
          <Stack
            direction={"column"}
            align={"center"}
            justify={"center"}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          >
            <Heading
              fontSize={{ base: "5xl", md: "7xl" }}
              paddingBottom={10}
              fontWeight={400}
              color={"white"}
              textAlign="center"
            >
              Save the Date
            </Heading>
            <Text>
              <Countdown date={targetDate}></Countdown>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
}
