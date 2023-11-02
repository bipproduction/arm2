"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Button, Card, Group, Image, Pagination, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { BsQrCodeScan } from 'react-icons/bs';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { MdOutlineDriveFileRenameOutline, MdOutlinePrint } from 'react-icons/md';


const dataasset = [
  {
    id: 1,
    image: "../img/meja.jpeg",
  },
  {
    id: 2,
    image: "../img/meja.jpeg",
  },
  {
    id: 3,
    image: "../img/meja.jpeg",
  },
  {
    id: 4,
    image: "../img/meja.jpeg",
  },
  {
    id: 5,
    image: "../img/meja.jpeg",
  },
  {
    id: 6,
    image: "../img/meja.jpeg",
  },
];


/**
 * Fungsi untuk menampilkan list assets.
 * @returns {component} menampilakn list assets.
 */
export default function ListAssets() {
  const router = useRouter()
  return (
    <>
      <Group justify='space-between'>
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>ASSETS</Text>
        </Box>
        <Box >
          <Button
            leftSection={<BsQrCodeScan size="20" />}
            color={Warna.biruTua}
            radius={"lg"}
            onClick={() => router.push("/dashboard/assets/scan")}
            mr={20}
          >
            SCAN BARCODE
          </Button>
          <Button
            leftSection={<AiOutlineFolderAdd size="20" />}
            color={Warna.biruTua}
            radius={"lg"}
            onClick={() => router.push("/dashboard/assets/add")}
          >
            ADD ASSETS
          </Button>
        </Box>
      </Group>
      <Box pt={50}>
        <SimpleGrid
          cols={{ base: 5, sm: 5, lg: 5 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Button color={Warna.biruTua} radius={"lg"}>
            All
          </Button>
          <Button color={Warna.biruTua} radius={"lg"}>
            Mobile Bar
          </Button>
          <Button color={Warna.biruTua} radius={"lg"}>
            Lighbox
          </Button>
          <Button color={Warna.biruTua} radius={"lg"}>
            Display
          </Button>
          <Button color={Warna.biruTua} radius={"lg"}>
            Bottle
          </Button>
        </SimpleGrid>
      </Box>
      <Box>
        <Box pt={20}>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}

          >
            {dataasset.map((item) => (

              <Card
                shadow="sm"

                key={item.id}
                bg={Warna.biruTua}

              >
                <Card.Section p={10} bg={"white"}>
                  <Image
                    src={item.image}
                    maw={"auto"} mx="auto" alt="a"
                    onClick={() =>
                      router.push("/dashboard/assets/detail-assets")
                    }
                    style={{
                      cursor: "pointer"
                    }}
                  />
                </Card.Section>
                <Card.Section p={10}>
                  <Group justify="space-between">
                    <Group gap={30}>
                      <ActionIcon
                        onClick={() => router.push("/dashboard/assets/edit")}
                        color="rgba(166, 5, 5, 1)"
                        variant='subtle'
                      >
                        <MdOutlineDriveFileRenameOutline
                          size="25"
                        />
                      </ActionIcon>
                      <ActionIcon
                        onClick={() =>
                          router.push(
                            "/dashboard/assets/detail-assets/37923729"
                          )
                        }
                        c={"yellow"}
                        variant='subtle'
                      >
                        <MdOutlinePrint
                          size="25"
                        />
                      </ActionIcon>
                    </Group>
                    <Group gap={3}>
                      <Box pt={18}>
                        <Text fz="xs" c="white" >
                          QTY
                        </Text>
                      </Box>
                      <Title w={"bold"} c={"white"} size="h1">
                        12
                      </Title>
                    </Group>
                  </Group>
                </Card.Section>

              </Card>

            ))}
          </SimpleGrid>
        </Box>
        <Group justify='flex-end' pt={15}>
          <Pagination total={10} />
        </Group>
      </Box>
    </>
  );
}

