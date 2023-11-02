"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';


const quotation = [
  {
    id: 1,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 2,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 3,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 4,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 5,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 6,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 7,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 8,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 9,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 10,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
];


/**
 * Fungsi untuk menampilkan list quotation.
 * @returns {component} menampilakn list quotation.
 */
export default function ListQuotation() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST QUOTATION</Text>
        </Box>
        <Group justify="flex-end">
          <Button
            color={Warna.biruTua}
            radius={"lg"}
            onClick={() => router.push(`/dashboard/quotation/create`)}
          >
            CREATE QUOTATION
          </Button>
        </Group>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <ScrollArea>
            <Table
            >
              <Table.Thead>

                <Table.Tr c={Warna.biruTua}>
                  <Table.Th>No</Table.Th>
                  <Table.Th>NAME</Table.Th>
                  <Table.Th>ROLE</Table.Th>
                  <Table.Th>PRICE</Table.Th>
                  <Table.Th>
                    <Center>
                      ACTION
                    </Center>
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {quotation.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>{v.name}</Table.Td>
                    <Table.Td>{v.role}</Table.Td>
                    <Table.Td>{v.price}</Table.Td>
                    <Table.Td>
                      <Group justify="center">
                        <Box>
                          <ActionIcon
                            color={Warna.biruTua}
                            variant='subtle'
                            onClick={() =>
                              router.push("/dashboard/quotation/3232323232")
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
