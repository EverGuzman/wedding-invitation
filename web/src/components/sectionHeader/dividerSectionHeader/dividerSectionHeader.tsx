import {
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type SectionHeaderProps = {
  title: string;
};

export default function DividerSectionHeader(props: SectionHeaderProps) {
  return (
    <Stack pt={5} pb={10} align={"center"}>
      <Divider borderColor={useColorModeValue("gray.800", "white")} />
      <Heading>
        <Text
          fontWeight={400}
          fontSize={"5xl"}
          color={useColorModeValue("gray.600", "white")}
          align="center"
        >
          {props.title}
        </Text>
      </Heading>
      <Divider borderColor={useColorModeValue("gray.800", "white")} />
    </Stack>
  );
}
