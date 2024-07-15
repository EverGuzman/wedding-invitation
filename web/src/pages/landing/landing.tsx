import React from "react";
import { Flex, Image, Stack, Box, Text, Icon, Center } from "@chakra-ui/react";
import "../landing/landing.css";
import { PlayIcon, PauseIcon } from "../../components/icons/icons";
import { useAudio } from "../../contexts/AudioContext";

const targetDate: Date = new Date("2024-09-15T16:00:00");

export default function Landing() {
  const { isPlaying, togglePlayPause } = useAudio();

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
            <Stack direction={"column"} align="center" justify="center">
              <Text>Melina & Ever</Text>
              <Text fontSize={"xl"} fontFamily={"date"}>
                1 5 . 0 9 . 2 0 2 4
              </Text>
              <Center>
                <Box
                  boxSize="35px"
                  bg="whiteAlpha.600"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={togglePlayPause}
                >
                  <Icon
                    as={isPlaying ? PauseIcon : PlayIcon}
                    boxSize={6}
                    color="black"
                  />
                </Box>
              </Center>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
