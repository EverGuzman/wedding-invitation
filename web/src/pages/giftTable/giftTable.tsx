import {
  Box,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import SectionHeader from "../../components/sectionHeader/sectionHeader";

import { EmailIcon } from "@chakra-ui/icons";

export default function GiftTable() {
  const imageUrl = useBreakpointValue({
    lg: `${process.env.PUBLIC_URL}/pictures/CASUAL-136.jpg`,
    base: `${process.env.PUBLIC_URL}/pictures/CASUAL-136-crop.jpg`,
  });

  // Define the object position using useBreakpointValue
  const objectPosition = useBreakpointValue({
    lg: "center -300px",
    base: "center 0px",
  });

  return (
    <Stack id="gift-table" w={"full"} spacing={-4}>
      <SectionHeader title="Mesa de Regalos"></SectionHeader>
      <Flex rounded={"lg"} pos={"relative"} justify={"center"}>
        <Box
          height={{
            lg: "500px",
            base: "300px", // Increased height for a better zoom effect on mobile
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
            bottom={{ lg: "0", base: "0" }}
            bg="rgba(255, 255, 255, 0.6)" // White background with 60% opacity
          >
            <Box
              bg={"transparent"}
              p={8}
              w={{ base: "100vw", md: "40vw" }}
              textAlign={"center"}
            >
              <Stack spacing={3} align={"center"} justify={"center"}>
                <Text
                  fontSize={{ lg: "2xl", base: "xl" }}
                  fontWeight={500}
                  width="50%"
                  color={useColorModeValue("#000035", "Black")}
                >
                  ¡Gracias por formar parte de nuestro inicio como familia!
                </Text>
                <Stack direction="row" spacing={10}>
                  <EmailIcon
                    w={12}
                    h={12}
                    color={useColorModeValue("#000035", "Black")}
                  />
                  {/* <EmailIcon
                w={12}
                h={12}
                color={useColorModeValue("#000035", "Black")}
              /> */}
                  {/* <Text
                fontSize={"md"}
                fontWeight={400}
                color={useColorModeValue("white", "Black")}
              >
                CLABE: 10293810328091391823
              </Text> */}
                </Stack>
                <Text
                  fontSize={{ lg: "2xl", base: "xl" }}
                  fontWeight={500}
                  width="50%"
                  color={useColorModeValue("#000035", "Black")}
                >
                  Tendremos una caja para sobres el día del evento.
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
}
