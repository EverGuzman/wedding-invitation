import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type InfoCardProps = {
  key: number;
  title: string;
  items: InfoCardItemProps[];
};

export type InfoCardItemProps = {
  key: number;
  name: string;
  additonalInfo?: string;
  phone: string;
  address: string;
};

export default function InfoCard(props: InfoCardProps) {
  return (
    <Stack
      align={"center"}
      justify={"center"}
      borderWidth={"3px"}
      borderColor={useColorModeValue("blackAlpha.600", "gray.600")}
      pos={"relative"}
      p={5}
      _after={{
        transition: "all .3s ease",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        backgroundColor: useColorModeValue("blackAlpha.200", "white"),
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: "blur(20px)",
        },
      }}
      // p={2}
      // flex={1}
      // align={"center"}
      // justify={"center"}
      // borderWidth={"3px"}
      // borderColor={useColorModeValue("blackAlpha.600", "gray.600")}
      // pos={"relative"}
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
              {props.title}
            </Text>
            <br />
          </Heading>
          {props.items.map((item) => (
            <InfoCardItem {...item} />
          ))}
        </Stack>
      </Flex>
    </Stack>
  );
}

const InfoCardItem = (item: InfoCardItemProps) => {
  return (
    <Box textAlign={"center"}>
      <Text
        fontSize={"lg"}
        fontWeight={800}
        color={useColorModeValue("gray.600", "Black")}
      >
        {item.name}
      </Text>
      {item.additonalInfo ? InfoCardItemSection(item.additonalInfo) : undefined}
      {InfoCardItemSection(item.phone)}
      {InfoCardItemSection(item.address)}
    </Box>
  );
};

const InfoCardItemSection = (text: string) => {
  return (
    <Text
      fontSize={"lg"}
      fontWeight={400}
      color={useColorModeValue("gray.600", "Black")}
    >
      {text}
    </Text>
  );
};
