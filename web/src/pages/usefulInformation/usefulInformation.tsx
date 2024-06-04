import { Stack } from "@chakra-ui/react";
import InfoCard, { InfoCardProps } from "../../components/infoCard/infoCard";
import DividerSectionHeader from "../../components/sectionHeader/dividerSectionHeader/dividerSectionHeader";

const INFO_CARDS: InfoCardProps[] = [
  //   {
  //     key: 1,
  //     title: "Hospedaje",
  //     items: [
  //       {
  //         key: 1,
  //         name: "Novotel",
  //         additonalInfo: "Código: Boda Itzel y Alejandro",
  //         phone: "Tel. 81 8133 8133",
  //         address:
  //           "Av Lázaro Cárdenas 3000, Valle Oriente, 66269 San Pedro Garza García, N.L.",
  //       },
  //     ],
  //   },
  {
    key: 1,
    title: "Novotel",
    items: [
      {
        key: 1,
        name: "Código: Boda Itzel y Alejandro",
        // additonalInfo: "Código: Boda Itzel y Alejandro",
        phone: "Tel. 81 8133 8133",
        address:
          "Av Lázaro Cárdenas 3000, Valle Oriente, 66269 San Pedro Garza García, N.L.",
      },
    ],
  },
];

export default function UsefulInformation() {
  return (
    <Stack id="useful-information" w={"full"} p={"20pt"}>
      {/* <DividerSectionHeader title="Información útil"></DividerSectionHeader> */}
      <DividerSectionHeader title="Hospedaje"></DividerSectionHeader>
      <Stack spacing={10} p={{ base: undefined, md: 10 }}>
        {INFO_CARDS.map((infoCard) => (
          <InfoCard {...infoCard} />
        ))}
      </Stack>
    </Stack>
  );
}
