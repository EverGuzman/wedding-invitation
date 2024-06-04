import { Box, Flex, keyframes, Text } from "@chakra-ui/react";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export type FadeInTextProps = {
  text: string;
};

export default function FadeInText(props: FadeInTextProps) {
  const lines = props.text.split("\n").map((value, index) => {
    return { value, key: index, animation: index };
  });
  return (
    <Flex
      py={4}
      flex={1}
      align={"center"}
      justify={"center"}
      textAlign={"center"}
    >
      <Box>
        {lines.map((line) => (
          <Text
            key={line.key}
            fontSize={{ base: "md", md: "2xl" }}
            animation={`${fadein} ${line.animation}s`}
          >
            {line.value}
          </Text>
        ))}
      </Box>
    </Flex>
  );
}
