"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';


const dataProjectStatus = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    no: "123",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Declined Project",
    no: "111",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    no: "123",
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Declined Project",
    no: "111",
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
];


/**
 * Fungsi untuk menampilkan list project activities analytic.
 * @returns {component} menampilakn list project activities analytic.
 */
export default function ListProjectActivitiesAnalytic() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            LIST PROJECT
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            cols={{ base: 1, sm: 3, lg: 3 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              DECLINED
            </Button>
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              CANCELED
            </Button>
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              REVOKED
            </Button>
          </SimpleGrid>
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
                      <Table.Th>BRAND</Table.Th>
                      <Table.Th>ACTIVITY</Table.Th>
                      <Table.Th>DATE</Table.Th>
                      <Table.Th>STATUS</Table.Th>
                      <Table.Th>
                        <Center>
                          ACTION
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataProjectStatus.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.brand}</Table.Td>
                        <Table.Td>{v.activity}</Table.Td>
                        <Table.Td>{v.date}</Table.Td>
                        <Table.Td>{v.status}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                              onClick={() =>
                                router.push(`/dashboard/project/` + v.no)
                              }
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


