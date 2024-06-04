import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export type HeaderProps = {
  title: string;
};

export default function SectionHeader(props: HeaderProps) {
  return (
    <Stack pt={5} pb={10} align={"center"}>
      <Heading>
        <Text
          fontWeight={400}
          fontSize={"5xl"}
          color={useColorModeValue("white", "white")}
          align="center"
        >
          {props.title}
        </Text>
      </Heading>
    </Stack>
  );
}
