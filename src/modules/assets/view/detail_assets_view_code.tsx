"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { isModalBarcode } from "../val/isModalAssets";
import ModalViewBarcode from "../components/modal_view_barcode";

const dataasset = [
  {
    id: 1,
    image: "/img/barcode.png",
    date: "23 Feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
  {
    id: 2,
    image: "/img/barcode.png",
    date: "23 Feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
  {
    id: 3,
    image: "/img/barcode.png",
    date: "23 feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
  {
    id: 4,
    image: "/img/barcode.png",
    date: "23 Feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
  {
    id: 5,
    image: "/img/barcode.png",
    date: "23 Feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
  {
    id: 6,
    image: "/img/barcode.png",
    date: "23 Feb 2023",
    brand: "ITEM",
    no_production: "No. 68328382232",
  },
];


/**
 * Fungsi untuk menampilkan detail assets view code.
 * @returns {component} menampilakn detail assets view code.
 */
export default function DetailAssetsViewCode() {
  const [valOpenBarcode, setOpenBarcode] = useAtom(isModalBarcode)
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>DETAIL BARCODE</Text>
        </Box>
      </Stack>
      <Box pt={20}>
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
                  />
                </Card.Section>
                <Card.Section p={10}>
                  <Group justify="space-between">
                    <Group>
                      <Text fw={700} p={10} c={"white"}>
                        {item.brand}
                      </Text>
                    </Group>
                    <Group>
                      {/* <item.icon size="30" /> */}
                      <Box>
                        <Text fz={10} fw={700} c={"white"}>
                          {item.no_production}
                        </Text>
                        <Group justify="flex-end">
                          <Text fz={10} fw={700} color="red.9">
                            {item.date}
                          </Text>
                        </Group>
                      </Box>
                    </Group>
                  </Group>
                </Card.Section>
              </Card>

            ))}
          </SimpleGrid>
        </Box>
        <Container size="xs" px="xs">
          <Group pt={40} pb={40}>
            <Button
              fullWidth
              color={Warna.biruTua}
              radius={20}
            onClick={() => setOpenBarcode(true)}
            >
              PRINT
            </Button>
          </Group>
        </Container>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenBarcode}
        onClose={() => setOpenBarcode(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalViewBarcode />
      </Modal>
    </>
  );
}


