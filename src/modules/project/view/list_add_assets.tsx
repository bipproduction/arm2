"use client";
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Card, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import {
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
} from "@mantine/core";
import { useRouter } from "next/navigation";

const img = [
  {
    id: 1,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 2,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 3,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 4,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 5,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 6,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 7,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 8,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
];


/**
 * Fungsi untuk menampilkan list add assets.
 * @returns {component} menampilakn list add assets.
 */
export default function ListAddAssets() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/project/create" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>ADD ASSETS</Text>
        </Box>
        <Box pt={10}>
          <Group justify='space-between'>
            <Box>
              <Select
                placeholder="Location"
                data={['Jakarta', 'Bali', 'Surabaya', 'Malang']}
                radius={"lg"}
              />
            </Box>
            <Box>
              <TextInput placeholder='Search' w={300} radius={"lg"} />
            </Box>
          </Group>
        </Box>
        <Box pt={20}>
          <SimpleGrid
            cols={{ base: 4, sm: 4, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <div>
              <Button color={Warna.biruTua} radius={"lg"} fullWidth>
                Mobile Bar
              </Button>
            </div>
            <div>
              <Button color={Warna.biruTua} radius={"lg"} fullWidth>
                Display
              </Button>
            </div>
            <div>
              <Button color={Warna.biruTua} radius={"lg"} fullWidth>
                Lightbox
              </Button>
            </div>
            <div>
              <Button color={Warna.biruTua} radius={"lg"} fullWidth>
                Bottle
              </Button>
            </div>
          </SimpleGrid>
        </Box>
        <Box pt={20}>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}

          >
            {img.map((item) => (

              <Card
                shadow="sm"
                key={item.id}
                bg={Warna.biruTua}

              >
                <Card.Section p={10} bg={"white"}>
                  <Image
                    src={"../img/meja.jpeg"}
                    maw={"auto"} mx="auto" alt="a"
                    onClick={() => router.push(item.link)}
                    style={{
                      cursor: "pointer"
                    }}
                  />
                </Card.Section>
                <Card.Section p={10}>
                <Box >
                  <Text fw={700} fz={25} c={"white"}>
                    ITEM NAME
                  </Text>
                  <Text fw={700} fz={10} c={"white"}>
                    TOTAL QTY : 25
                  </Text>
                </Box>
                <Group justify="right" c={"white"}>
                  <Box>
                    <Text fz={12} c={"white"}>AVAILABLE</Text>
                    <Group justify="right">
                      <Text fz={12} c={"white"}>QTY</Text>
                    </Group>
                  </Box>
                  <Box>
                    <Text fw={700} fz={40} c={"white"}>
                      20
                    </Text>
                  </Box>
                </Group>
                </Card.Section>
              </Card>

            ))}
          </SimpleGrid>
        </Box>
      </Stack>

    </>
  );
}

