"use client";
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Group,
  Image,
  Modal,
  Select,
  Text,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import { isModalCheckout } from "../val/isModalCheckout";
import { Warna } from "@/modules/_global/fun/warna";
import ModalCheckout from "./modal_checkout";


/**
 * Fungsi untuk menampilkan item checkout.
 * @returns {component} menampilakn item checkout.
 */
function ItemCheckout() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const [valOpenCheckout, setOpenCheckout] = useAtom(isModalCheckout);
  return (
    <>
      <Box>
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text fw={700} c={Warna.biruTua}>DELIVERY ADDRESS</Text>
          <Grid pt={10}>
            <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
              <Select
                placeholder="ADDRESS BOOK"
                data={[
                  { value: "Jakarta", label: "Jakarta" },
                  { value: "Bali", label: "Bali" },
                  { value: "Bandung", label: "Bandung" },
                  { value: "Malang", label: "Malang" },
                ]}
              />
            </Grid.Col>
          </Grid>
          <Box pt={20}>
            <Divider size="md" color={Warna.biruTua} />
          </Box>
          <Box pt={20}>
            <Text fw={700} c={Warna.biruTua}>NOTE</Text>
            <Box pt={10}>
              <Textarea placeholder="Note" />
            </Box>
          </Box>
          <Box pt={20}>
            <Divider size="md" color={Warna.biruTua} />
          </Box>
          <Box pt={20}>
            <Text fw={700} c={Warna.biruTua}>WHEN SHOULD WE DELIVER IT?</Text>
            <Grid pt={10}>
              <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
                <DateInput placeholder="SELECT DATE" />
              </Grid.Col>
            </Grid>
          </Box>
          <Box pt={20}>
            <Divider size="md" color={Warna.biruTua} />
          </Box>
          <Box pt={20}>
            <Box
              style={{
                backgroundColor: Warna.biruTua,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Group justify="space-between">
                <Group>
                  <Box>
                    <Image
                      src={"../img/meja.jpeg"}
                      radius={10}
                      maw={{ base: 100, sm: 200 }}
                      mx="auto"
                      alt="img"
                    />
                  </Box>
                  <Box>
                    <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                      Item
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Harmony 2
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Display
                    </Text>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Text
                      fw={700}
                      fz={{ sm: 40, base: 20 }}
                      pr={40}
                      color="white"
                    >
                      x2
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Box pt={20}>
                <Group style={{ cursor: "pointer" }} onClick={toggle}>
                  <Text fz={{ sm: 13, base: 9 }} fw={700} color="white">
                    NOTE
                  </Text>
                  <ActionIcon color="gray.0" variant="subtle">
                    <MdOutlineNoteAlt />
                  </ActionIcon>
                </Group>
              </Box>
              <Collapse in={opened}>
                <Textarea />
              </Collapse>
            </Box>
          </Box>
        </Box>
        <Grid pt={20} pb={60}>
          <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
            <Button
              fullWidth
              radius={"lg"}
              color={Warna.biruTua}
              onClick={() => setOpenCheckout(true)}
            >
              CHECKOUT
            </Button>
          </Grid.Col>
        </Grid>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenCheckout}
        onClose={() => setOpenCheckout(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalCheckout />
      </Modal>
    </>
  );
}

export default ItemCheckout;

