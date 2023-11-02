"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Center, Group, Pagination, ScrollArea, Stack, Table } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const projectBrief = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmarkFill />,
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmarkFill />,
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
];

/**
 * Fungsi untuk menampilkan table project.
 * @returns {component} menampilakn table project.
 */
export default function TableProject() {
  const router = useRouter()
  return (
    <>
      <Stack pt={10}>
        <Box style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20
        }}>
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
                {projectBrief.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>{v.brand}</Table.Td>
                    <Table.Td>{v.activity}</Table.Td>
                    <Table.Td>{v.date}</Table.Td>
                    <Table.Td>{v.status}</Table.Td>
                    <Table.Td>
                      <Group justify="center">
                        <Box style={{ cursor: "pointer" }}>
                          <ActionIcon
                            color={Warna.biruTua}
                            variant='subtle'
                          >
                            {v.icon}
                          </ActionIcon>
                        </Box>
                        <Box>
                          <ActionIcon
                            color={Warna.biruTua}
                            variant='subtle'
                            onClick={() =>
                              router.push("/dashboard/archive/3232323232")
                            }
                          >
                            <BiSolidUserDetail size="25" />
                          </ActionIcon>
                        </Box>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Box>
        <Group justify='flex-end'>
          <Pagination total={10} />
        </Group>
      </Stack>
    </>
  );
}
