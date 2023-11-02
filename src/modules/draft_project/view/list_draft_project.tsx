"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Center, Group, Pagination, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';

const dataDraft = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
];

/**
 * Fungsi untuk menampilkan list draft project.
 * @returns {component} menampilakn list draft project.
 */
export default function ListDraftProject() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/recent-activity" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST DRAFT PROJECT</Text>
        </Box>
        <Box
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10
        }}
        >
          <Table>
            <Table.Thead>
              <Table.Tr c={Warna.biruTua}>
                <Table.Th>NO</Table.Th>
                <Table.Th>BRAND</Table.Th>
                <Table.Th>ACTIVITY</Table.Th>
                <Table.Th>DATE</Table.Th>
                <Table.Th>
                  <Center>
                    ACTION
                  </Center>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {dataDraft.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>{v.brand}</Table.Td>
                  <Table.Td>{v.activity}</Table.Td>
                  <Table.Td>{v.date}</Table.Td>
                  <Table.Td>
                    <Center>
                      <ActionIcon
                        onClick={() => router.push(`/dashboard/project/444`)}
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
        </Box>
          <Box>
            <Group justify='flex-end'>
              <Pagination total={10}/>
            </Group>
          </Box>
      </Stack>
    </>
  );

}
