"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';

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
 * Fungsi untuk menampilkan list project status.
 * @returns {component} menampilakn list project status.
 */
export default function ListProjectStatus() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/recent-activity" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST PROJECT STATUS</Text>
        </Box>
        <Box>
          <SimpleGrid
            cols={{ base: 4, sm: 4, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Button color={Warna.biruTua} fullWidth radius={"lg"}>
                APPROVAL
              </Button>
            </Box>
            <Box>
              <Button color={Warna.biruTua} fullWidth radius={"lg"}>
                DECLINED
              </Button>
            </Box>
            <Box>
              <Button color={Warna.biruTua} fullWidth radius={"lg"}>
                CANCELED
              </Button>
            </Box>
            <Box>
              <Button color={Warna.biruTua} fullWidth radius={"lg"}>
                JOB ORDER
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
        <Box
        style={{
          borderBlockColor: "white",
          padding: 10,
          borderRadius: 20
        }}
        >
          <ScrollArea>
          <Table>
            <Table.Thead>
              <Table.Tr c={Warna.biruTua}>
                <Table.Th>NO</Table.Th>
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
                      <ActionIcon
                        onClick={() => router.push(`/dashboard/project/` + v.no)}
                        color={Warna.biruTua}
                        variant="subtle"
                      >
                        <BiSolidUserDetail size="25" />
                      </ActionIcon>
                    </Center>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          </ScrollArea>
        </Box>

      </Stack>
    </>
  );
}

