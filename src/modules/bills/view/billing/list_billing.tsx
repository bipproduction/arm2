"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { use } from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

const dataBilling = [
  {
      id: 1,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 2,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 3,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 4,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 5,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 6,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 7,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 8,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 9,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
  {
      id: 10,
      name: "Outlet A",
      date: "23 Feb 2023",
      price: "21.000.000 IDR"
  },
];


/**
 * Fungsi untuk menampilkan list billing.
 * @returns {component} menampilakn list billing.
 */
export default function ListBilling() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST BILLING
          </Text>
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
                    {dataBilling.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.date}</Table.Td>
                        <Table.Td>{v.price}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                              onClick={() => router.push('/dashboard/billing/271837199')}
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



