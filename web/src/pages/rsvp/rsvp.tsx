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
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { RSVPModel } from "../../firebase/models/rsvp";
import { saveRSVP } from "../../firebase/rsvp";
import { useState } from "react";

export default function RSVP() {
  const formik = useFormik<RSVPModel>({
    initialValues: {
      goingToAttend: "Si",
      name: "",
      phone: "",
      numberOfPeople: 1,
    },
    onSubmit: async (values) => {
      try {
        await saveRSVP(values);
        alert("Gracias Por Confirmar");
        formik.resetForm();
      } catch {
        alert("Error: Favor de intentar despues");
      }
    },
  });

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
            <Stack fontFamily={"body"} fontSize={"xl"}>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
              >
                ¡Queremos compartir este momento tan esperado contigo!
              </Text>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
              >
                Por favor ayúdanos confirmando tu asistencia.
              </Text>
              <Text
                fontWeight={400}
                color={useColorModeValue("gray.800", "Black")}
                as={"span"}
              >
                - No niños -
              </Text>
            </Stack>
          </Heading>
          <Box w={"100%"}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend">Asistencia</FormLabel>
                <RadioGroup
                  id="goingToAttend"
                  name="goingToAttend"
                  defaultValue="Si"
                  value={formik.values.goingToAttend}
                >
                  <HStack spacing="24px" justify={"center"}>
                    <Radio value="Si" onChange={formik.handleChange}>
                      Si
                    </Radio>
                    <Radio value="No" onChange={formik.handleChange}>
                      No
                    </Radio>
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
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Teléfono</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type={"phone"}
                  placeholder="Teléfono"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
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
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  value={value}
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
        </Stack>
      </Stack>
    </Stack>
  );
}
