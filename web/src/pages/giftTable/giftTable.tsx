import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import SectionHeader from "../../components/sectionHeader/sectionHeader";

import { EmailIcon } from "@chakra-ui/icons";

export default function GiftTable() {
  const backgroundStyle = {
    backgroundImage: "url(/pictures/CASUAL-136.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "0px -400px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Stack
      id="gift-table"
      w={"full"}
      p={"20pt"}
      style={backgroundStyle}
      spacing={-4}
    >
      <SectionHeader title="Mesa de Regalos"></SectionHeader>
      <Stack spacing={8} py={12} px={6} align={"center"} justify={"center"}>
        <Box
          bg={useColorModeValue("white", "white")}
          boxShadow={"dark-lg"}
          p={8}
          w={{ base: "80vw", md: "40vw" }}
          textAlign={"center"}
        >
          <Stack spacing={3} align={"center"} justify={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={400}
              width="40%"
              color={useColorModeValue("#000035", "Black")}
            >
              Nuestro mejor regalo es tu presencia, pero si tu deseo es hacernos
              un obsequio, esta es nuestra sugerencia
            </Text>
            <Stack direction="row" spacing={10}>
              <EmailIcon
                w={12}
                h={12}
                color={useColorModeValue("#000035", "Black")}
              />
              <EmailIcon
                w={12}
                h={12}
                color={useColorModeValue("#000035", "Black")}
              />
              {/* <Text
                fontSize={"md"}
                fontWeight={400}
                color={useColorModeValue("white", "Black")}
              >
                CLABE: 10293810328091391823
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
