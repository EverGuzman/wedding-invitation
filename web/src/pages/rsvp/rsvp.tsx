import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScL_8qUyAsFjhzfY1vW4rgjL-PqvxwFoZ6q_yJ05raXYaf6SQ/viewform?usp=sf_link";

export default function RSVP() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    numPeople: "",
    assist: "",
  });

  const [valueNum, setValueNum] = useState("");

  const handleChangeNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueNum(event.target.value);

    setFormData((prevState) => ({
      ...prevState,
      ["numPeople"]: event.target.value,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      assist: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScL_8qUyAsFjhzfY1vW4rgjL-PqvxwFoZ6q_yJ05raXYaf6SQ/formResponse`;
    const formDataToSend = new FormData();

    // Append data to FormData object
    formDataToSend.append("entry.1978863469", formData.name);
    formDataToSend.append("entry.926786837", formData.phone);
    formDataToSend.append("entry.875104305", formData.numPeople);
    formDataToSend.append("entry.2072923205", formData.assist);

    // Send data to Google Form
    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // to avoid CORS policy issues
      });
      toast({
        title: "¡Gracias por tu confirmación!",
        description: "Hemos recibido tu respuesta.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu respuesta.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // List of keys that are not numeric
    const invalidKeys = ["e", "+", "-", ".", "E"];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Stack id="rsvp" w={"full"} p={"20pt"}>
      <Stack p={{ base: undefined, md: 10 }}>
        <Stack
          direction={"column"}
          p={{ base: 2, md: 6 }}
          flex={1}
          align={"center"}
          justify={"center"}
          borderWidth={"3px"}
          borderColor={useColorModeValue("blackAlpha.600", "gray.600")}
          pos={"relative"}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={"center"}
          >
            <Text
              fontWeight={400}
              fontFamily={"heading"}
              fontSize={"5xl"}
              color={useColorModeValue("gray.800", "Black")}
              as={"span"}
            >
              Confirmación de Asistencia
            </Text>
            <br />
            <br />
            <Stack fontFamily={"body"}>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
                fontSize={"md"}
              >
                ¡Queremos compartir este momento tan esperado contigo! Por favor
                ayúdanos confirmando tu asistencia.
              </Text>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
                fontSize={"md"}
              ></Text>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
                fontSize={"xl"}
              >
                - No niños -
              </Text>
            </Stack>
          </Heading>
          <br />
          <Box w={"100%"}>
            <form onSubmit={handleSubmit}>
              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend">Asistencia</FormLabel>
                <RadioGroup
                  id="assist"
                  name="assist"
                  defaultValue="Si"
                  value={formData.assist}
                  onChange={handleRadioChange}
                >
                  <HStack spacing="24px" justify={"center"}>
                    <Radio value="Si">Si</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type={"text"}
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={formData.name}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Teléfono</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type={"phone"}
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>No. Personas</FormLabel>
                <Input
                  id="numberOfPeople"
                  name="numberOfPeople"
                  placeholder="No. Personas"
                  aria-label="Número de Personas"
                  type="number"
                  min={0}
                  max={10}
                  onChange={handleChangeNum}
                  onKeyDown={handleKeyDown}
                  value={valueNum}
                />
              </FormControl>
              <Button
                type={"submit"}
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Enviar
              </Button>
            </form>
          </Box>
          <Text fontSize={"xs"} fontFamily={"sans-serif"} fontWeight={"light"}>
            Nota: Te agradeceríamos que solo respondas cuando tu decisión sea
            definitiva. Fecha límite: 28 de agosto de 2024. ¡Gracias!
          </Text>
          <br />
        </Stack>
      </Stack>
    </Stack>
  );
}
