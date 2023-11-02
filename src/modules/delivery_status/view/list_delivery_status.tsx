"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Group, Pagination, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';

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
    {
        id: 5,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "On Process",
        no: "111",
    },
    {
        id: 6,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "Delivered",
        no: "222",
    },
    {
        id: 7,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "On Process",
        no: "111",
    },
    {
        id: 8,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "Delivered",
        no: "222",
    },
    {
        id: 9,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "On Process",
        no: "111",
    },
    {
        id: 10,
        brand: "The Macallan",
        activity: "Bar Take Over",
        date: "23 February 2023",
        status: "Delivered",
        no: "222",
    },
];


/**
 * Fungsi untuk menampilkan list delivery status.
 * @returns {component} menampilakn list delivery status.
 */
export default function ListDeliveryStatus() {
    const router = useRouter()
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/recent-activity" />
                <Box>
                    <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST DELIVERY STATUS</Text>
                </Box>
                <SimpleGrid
                    cols={{ base: 2, sm: 2, lg: 2 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                    <Box>
                        <Button fullWidth radius={"lg"} color={Warna.biruTua}>ON PROCESS</Button>
                    </Box>
                    <Box>
                        <Button fullWidth radius={"lg"} color={Warna.biruTua}>DELIVERED</Button>
                    </Box>
                </SimpleGrid>
                <Box>
                    <Box style={{
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 20
                    }}>
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
                    </Box>
                </Box>
                <Group justify='flex-end'>
                    <Pagination total={10} />
                </Group>
            </Stack>
        </>
    );
}
