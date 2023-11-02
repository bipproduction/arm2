"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Center, Divider, Group, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';
import { HiOutlineChevronRight } from 'react-icons/hi';

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
];


/**
 * Fungsi untuk menampilkan table draft project.
 * @returns {component} menampilakn table draft project.
 */
function TableDraftProject() {
    const router = useRouter()
    return (
        <>
            <Group justify="space-between" pt={10}>
                <Box>
                    <Text fw={700} c={Warna.biruTua}>DRAFT PROJECTS</Text>
                </Box>
                <ActionIcon
                    onClick={() => router.push("/dashboard/project/draft")}
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
                                        onClick={() => router.push("/dashboard/project/444")}
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

export default TableDraftProject;
