"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Center, Divider, Group, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';
import { HiOutlineChevronRight } from 'react-icons/hi';

const dataDeliveryStatus = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "On Process",
    no: "111",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Delivered",
    no: "222",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "On Process",
    no: "111",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Delivered",
    no: "222",
  },
];


/**
 * Fungsi untuk menampilkan table delivery status.
 * @returns {component} menampilakn table delivery status.
 */
export default function TableDeliveryStatus() {
  const router = useRouter()
  return (
    <>
    <Group justify="space-between" pt={10}>
        <Box>
            <Text fw={700} c={Warna.biruTua}>DELIVERY STATUS</Text>
        </Box>
        <ActionIcon
            onClick={() => router.push(`/dashboard/delivery-status`)}
            color={Warna.biruTua}
            variant="subtle"
        >
            <HiOutlineChevronRight size="25" />
        </ActionIcon>
    </Group>
    <Box pt={5}>
        <Divider size="md" color={Warna.biruTua} />
    </Box>
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
            {dataDeliveryStatus.map((v, i) => (
                <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>{v.brand}</Table.Td>
                    <Table.Td>{v.activity}</Table.Td>
                    <Table.Td>{v.date}</Table.Td>
                    <Table.Td>{v.status}</Table.Td>
                    <Table.Td>
                        <Center>
                            <ActionIcon
                                onClick={() => router.push(`/dashboard/delivery-status/` + v.no)}
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
</>
  );
}

