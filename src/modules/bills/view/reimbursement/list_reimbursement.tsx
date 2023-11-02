"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdAdd, MdOutlineCreateNewFolder } from 'react-icons/md';


const dataReimbursement = [
  {
    id: 1,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Approval",
    no: "123"
  },
  {
    id: 2,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Approved",
    no: "222"
  },
  {
    id: 3,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Declined",
    no: "111"
  },
  {
    id: 4,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Paid",
    no: "333"
  },
  {
    id: 5,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Paid",
    no: "333"
  },
  {
    id: 6,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Approval",
    no: "123"
  },
  {
    id: 7,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Approved",
    no: "222"
  },
  {
    id: 8,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Declined",
    no: "111"
  },
  {
    id: 9,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Declined",
    no: "111"
  },
  {
    id: 10,
    name: "Outlet A",
    date: "23 Feb 2023",
    price: "21.000.000 IDR",
    status: "Approved",
    no: "222"
  },
];


/**
 * Fungsi untuk menampilkan edit Reimbursement.
 * @returns {component} menampilakn edit Reimbursement.
 */
export default function ListReimbursement() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/bills" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>LIST INVOICE
          </Text>
        </Box>
        <Box>
          <Group justify="flex-end">
            <Button bg={Warna.biruTua} radius={'lg'} leftSection={<MdAdd size="1rem" />} onClick={() => router.push('reimbursement/add')}>
              Add Reimbursement
            </Button>
          </Group>
        </Box>
        <Box pt={10}>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              APPROVAL
            </Button>
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              APPROVED
            </Button>
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              PAID
            </Button>
            <Button color={Warna.biruTua} radius={"lg"} fullWidth>
              DECLINED
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
                      <Table.Th>NAME</Table.Th>
                      <Table.Th>DATE</Table.Th>
                      <Table.Th>PRICE</Table.Th>
                      <Table.Th>STATUS</Table.Th>
                      <Table.Th>
                        <Center>
                          ACTION
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataReimbursement.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.date}</Table.Td>
                        <Table.Td>{v.price}</Table.Td>
                        <Table.Td>{v.status}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon variant="subtle" aria-label="crerate" color={Warna.biruTua}
                              onClick={() => router.push(`/dashboard/reimbursement/` + v.no)}
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

