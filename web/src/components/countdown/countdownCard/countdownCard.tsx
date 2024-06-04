import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type CountdownCardProps = {
  number: number;
  label: string;
};

export default function CountdownCard(props: CountdownCardProps) {
  return (
    <Center>
      <Box
        // bg={useColorModeValue("transparent", "gray.800")}
        bg="transparent"
        // boxShadow={"2xl"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          borderColor={"white"}
          borderWidth={"thin"}
          p={1}
          // backgroundColor={useColorModeValue("white", "gray.800")}
          backgroundColor={"transparent"}
          align={"center"}
        >
          <Stack
            w={{ base: "20vw", md: "10vw" }}
            h={{ base: "20vw", md: "10vw" }}
            p={4}
            direction={"column"}
            align={"center"}
            justify={"center"}
            borderColor={"white"}
            borderWidth={"thin"}
            // backgroundColor={useColorModeValue("blue.900", "gray.600")}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign={"center"}
            >
              <Text
                fontSize={"1.5em"}
                fontWeight={400}
                color={useColorModeValue("white", "white")}
                as={"span"}
              >
                {props.number}
              </Text>
              <br />
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight={400}
                color={useColorModeValue("white", "white")}
              >
                {props.label}
              </Text>
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
