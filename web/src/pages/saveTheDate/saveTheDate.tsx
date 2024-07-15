import {
  Heading,
  Stack,
  Text,
  Box,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import "../landing/landing.css";
import Countdown from "../../components/countdown/countdown";

const targetDate = new Date("2024-09-15T16:00:00");

export default function SaveTheDate() {
  const imageUrl = useBreakpointValue({
    lg: `${process.env.PUBLIC_URL}/pictures/CASUAL-40.jpg`,
    base: `${process.env.PUBLIC_URL}/pictures/CASUAL-43.jpg`,
  });

  const objectPosition = useBreakpointValue({
    lg: "center -800px",
    base: "center 0px",
  });

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
            lg: "500px", // Increased height for a better zoom effect on mobile
          }}
          overflow="hidden"
          position="relative"
        >
          <Image
            alt="Melina y Ever"
            src={imageUrl}
            objectFit={{ lg: "cover", base: "cover" }}
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
