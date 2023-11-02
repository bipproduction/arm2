"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdAdd, MdOutlineCreateNewFolder } from 'react-icons/md';


const dataOutlet = [
  {
    id: 1,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 2,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 3,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 4,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 5,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 6,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 7,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 8,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 9,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
  {
    id: 10,
    name: "Outlet A",
    date: "23 Feb 2023",
    location: "Jakarta Pusat"
  },
];


/**
 * Fungsi untuk menampilkan view outlet.
 * @returns {component} menampilakn view outlet.
 */
export default function ViewOutlet() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/insights" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>OUTLET DATABASE</Text>
        </Box>
        <Group justify="flex-end">
          <Button radius={'lg'} bg={Warna.biruTua} leftSection={<MdAdd size="1rem" />} onClick={() => router.push('outlet/add')}>
            Add Outlet
          </Button>
        </Group>
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
                      <Table.Th>LOCATION</Table.Th>
                      <Table.Th>
                        <Center>
                          ACTION
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataOutlet.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.date}</Table.Td>
                        <Table.Td>{v.location}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                            onClick={()=>router.push('outlet/1123243')}
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

