"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Card, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';


/**
 * Fungsi untuk menampilkan list view detail assets.
 * @returns {component} menampilakn list view detail assets.
 */
export default function ListViewDetailAssets() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/add-assets" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>DETAIL VIEW ASSETS</Text>
        </Box>
        <Box style={{
          backgroundColor: Warna.biruTua,
          borderRadius: 10,
          padding: 30
        }}>
          <SimpleGrid
            cols={{ base: 2, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >

            <Box>
              <Image
                src={"/img/meja.jpeg"}
                maw={"auto"} mx="auto" alt="a"
                radius={"lg"}
              />
            </Box>
            <Box style={{
              flex: 3,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Box pt={20}>
                <Text fw={700} fz={25} c={"white"}>
                  ITEM NAME
                </Text>
              </Box>
              <Group justify="space-between" pt={20}>
                <Group>
                  <ActionIcon variant="subtle" color="rgba(255, 255, 255, 1)" aria-label="icon">
                    <HiCheckCircle size="30" />
                  </ActionIcon>
                  <Box>
                    <Text fz={8} fw={700} c={"white"}>
                      CONDITIONS
                    </Text>
                    <Text fz={8} fw={700} c={"red.9"}>
                      GOOD CONDITION
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Box pt={20}>
                <Button fullWidth c={Warna.biruTua} bg={"white"} radius={"lg"}>
                  + Add To Cart
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
}