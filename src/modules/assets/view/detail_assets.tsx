"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Card, Checkbox, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { MdOutlinePrint } from 'react-icons/md';
const assetDetail = [
  {
    id: 1,
    image: "/img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 2,
    image: "/img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 3,
    image: "/img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 4,
    image: "/img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 5,
    image: "/img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 6,
    image: "/img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
];


/**
 * Fungsi untuk menampilkan detail assets.
 * @returns {component} menampilakn detail assets.
 */
export default function DetailAssets() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>DETAIL ASSETS</Text>
        </Box>
        <Group justify='space-between'>
          <Box >
            <Checkbox label={"All"} />
          </Box>
          <Box>
            <Button
              color={Warna.biruTua}
              radius={"lg"}
              onClick={() =>
                router.push("/dashboard/assets/detail-assets/37923729")
              }
            >
              VIEW BARCODE
            </Button>
          </Box>
        </Group>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}

        >
          {assetDetail.map((item) => (
            <Card
              shadow="sm"
              key={item.id}
              bg={Warna.biruTua}

            >
              <Card.Section p={10} bg={"white"}>
                <Box pb={10}>
                  <Checkbox />
                </Box>
                <Image
                  style={{
                    cursor: "pointer"
                  }}
                  src={item.image}
                  maw={"auto"} mx="auto" alt="a"
                  onClick={() =>
                    router.push("/dashboard/assets/detail-assets-history")
                  }
                />
              </Card.Section>
              <Card.Section p={10}>
                <Box>
                  <Text fw={700} fz={25} c={"white"}>
                    ITEM NAME
                  </Text>
                </Box>
                <Group justify="space-between" pt={10}>
                  <Group gap={30} style={{ cursor: "pointer" }}>
                    <ActionIcon
                      onClick={() =>
                        router.push(
                          "/dashboard/assets/detail-assets/37923729"
                        )
                      }
                      variant="subtle"
                      color='yellow'
                    >
                      <MdOutlinePrint
                        size="25"
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                  <Group>
                    <ActionIcon variant="subtle" color="rgba(255, 255, 255, 1)" aria-label="icon">
                      <item.icon size="30" />
                    </ActionIcon>
                    <Box>
                      <Text fz={8} fw={700} c={"white"}>
                        CONDITIONS
                      </Text>
                      <Text fz={8} fw={700} c={"red.9"}>
                        {item.conditions}
                      </Text>
                    </Box>
                  </Group>
                </Group>
              </Card.Section>
            </Card>

          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}

