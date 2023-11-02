import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Center, Group, Pagination, ScrollArea, Stack, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserDetail } from 'react-icons/bi';

const timeline = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
  },
];


/**
 * Fungsi untuk menampilkan timeline.
 * @returns {component} menampilakn timeline.
 */
export default function TableTimeline() {
  const router = useRouter()
  return (
    <>
      <Box >
        <Group gap={3}>
          <Text fz={20} fw={700}>
            JULY
          </Text>
          <Box pt={7}>
            <Text fz={12} fw={700}>
              2023
            </Text>
          </Box>
        </Group>
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
                {timeline.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>{v.brand}</Table.Td>
                    <Table.Td>{v.activity}</Table.Td>
                    <Table.Td>{v.date}</Table.Td>
                    <Table.Td>{v.status}</Table.Td>
                    <Table.Td>
                      <Group justify="center">
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
        <Box pt={20}>
        <Group gap={3}>
          <Text fz={20} fw={700}>
            JULY
          </Text>
          <Box pt={7}>
            <Text fz={12} fw={700}>
              2023
            </Text>
          </Box>
        </Group>
        </Box>
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
                {timeline.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>{v.brand}</Table.Td>
                    <Table.Td>{v.activity}</Table.Td>
                    <Table.Td>{v.date}</Table.Td>
                    <Table.Td>{v.status}</Table.Td>
                    <Table.Td>
                      <Group justify="center">
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
        <Group justify='flex-end' pt={10}>
          <Pagination total={10} />
        </Group>
      </Box>
    </>
  );
}

