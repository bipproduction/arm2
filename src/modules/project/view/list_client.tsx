"use client";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Image,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
  keys,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const dataClient = [
  {
    id: 1,
    image: "../img/image.jpeg",
    name: "PT Nusantara",
    Role: "Requestor",
  },
  {
    id: 2,
    image: "../img/image.jpeg",
    name: "PT Bunga Indah",
    Role: "Requestor",
  },
  {
    id: 3,
    image: "../img/image.jpeg",
    name: "PT Nuansa Raya",
    Role: "Requestor",
  },
  {
    id: 4,
    image: "../img/image.jpeg",
    name: "PT Alam Abadi",
    Role: "Requestor",
  },
  {
    id: 5,
    image: "../img/image.jpeg",
    name: "PT Mitra Solution",
    Role: "Requestor",
  },
  {
    id: 6,
    image: "../img/image.jpeg",
    name: "PT Nusantara",
    Role: "Requestor",
  },
  {
    id: 7,
    image: "../img/image.jpeg",
    name: "PT Bunga Indah",
    Role: "Requestor",
  },
  {
    id: 8,
    image: "../img/image.jpeg",
    name: "PT Nuansa Raya",
    Role: "Requestor",
  },
  {
    id: 9,
    image: "../img/image.jpeg",
    name: "PT Alam Abadi",
    Role: "Requestor",
  },
  {
    id: 10,
    image: "../img/image.jpeg",
    name: "PT Mitra Solution",
    Role: "Requestor",
  },
];


/**
 * Fungsi untuk menampilkan list client.
 * @returns {component} menampilakn list client.
 */
export default function TabelListClient() {
  const router = useRouter();

  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard" />
        <Box>
          <Group justify="space-between">
            <Box>
              <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST CLIENT</Text>
            </Box>
            <Box>
              <TextInput placeholder="Search" w={300} radius={"lg"} />
            </Box>
          </Group>
        </Box>
        <Box pt={10}>
          <Box
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <SimpleGrid
              cols={1}
              spacing="lg"
            >
              <ScrollArea>
                <Table>
                  <Table.Thead>

                    <Table.Tr>
                      <Table.Th>No</Table.Th>
                      <Table.Th>IMAGE</Table.Th>
                      <Table.Th>NAME</Table.Th>
                      <Table.Th>ROLE</Table.Th>
                      <Table.Th>
                        <Center>
                          ACTION
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataClient.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>
                          <Image src={v.image} w={80} alt="img" />
                        </Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.Role}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                              onClick={() => router.push(`/dashboard/project/create`)}
                            >
                              <MdOutlineCreateNewFolder size="30" />
                            </ActionIcon>
                          </Center>
                        </Table.Td>
                      </Table.Tr>
                    ))}

                  </Table.Tbody>
                </Table>
              </ScrollArea>
            </SimpleGrid>
          </Box>
        </Box>
        <Group justify="flex-end" pt={10}>
          <Pagination total={10} />
        </Group>
      </Stack>
    </>
  );
}


