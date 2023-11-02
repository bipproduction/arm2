"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Grid, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

const dataProjectReport = [
  {
    id: 1,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 2,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 3,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 4,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 5,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 6,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 7,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 8,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 9,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
  {
    id: 10,
    name: "PT. Mekar Sejati",
    date: "23 Feb 2023",
    price: "21.000.000 IDR"
  },
];


/**
 * Fungsi untuk menampilkan view project report.
 * @returns {component} menampilakn view project report.
 */
export default function ViewProjectReports() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/insights" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>PROJECT REPORTS</Text>
        </Box>
        <SimpleGrid
          cols={{ base: 1, sm: 3, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >

          <Button color={Warna.biruTua} radius={"lg"} fullWidth>
            BRAND
          </Button>
          <Button color={Warna.biruTua} radius={"lg"} fullWidth>
            CITIES
          </Button>
          <Button color={Warna.biruTua} radius={"lg"} fullWidth>
            CAMPAIGN NAME
          </Button>
        </SimpleGrid>
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
                      <Table.Th>NAME</Table.Th>
                      <Table.Th>DATE</Table.Th>
                      <Table.Th>PRICE</Table.Th>
                      <Table.Th>
                        <Center>
                          ACTION
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataProjectReport.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.date}</Table.Td>
                        <Table.Td>{v.price}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                              onClick={() => router.push('/dashboard/project-report/1293849')}
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

