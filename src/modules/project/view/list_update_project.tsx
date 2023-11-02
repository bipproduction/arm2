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
  ModalBase,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure, useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Warna } from "@/modules/_global/fun/warna";
import { isModalUpdateDraft } from "../val/isModalForm";
import ModalUpdate from "../components/modal_update";


/**
 * Fungsi untuk menampilkan list update project.
 * @returns {component} menampilakn list update project.
 */
export default function ListUpdateProject() {
  const focusTrapRef = useFocusTrap();
  const [opened, { toggle }] = useDisclosure(false);
  const [valOpenUpdateDraft, setOpenUpdateDraft] = useAtom(isModalUpdateDraft)
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/detail-draft-project/2982372998732" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>UPDATE PROJECT</Text>
        </Box>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 5,
            borderRadius: 20,
          }}
          px={20}
          mb={10}
          py={20}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} c={Warna.biruTua}>
                Detail Project
              </Text>
            }
            labelPosition="left" 
            size="md"
            color={Warna.biruTua}
          />
          <Box pt={10}>
            <Text>Event : We The Fest</Text>
            <Text>Location : Jakarta Selatan</Text>
            <Text>Date : 23 May 2023</Text>
            <Text>Name : PT. Mekar Jaya</Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
          </Box>
        </Box>
      </Box>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 5,
            borderRadius: 20,
          }}
          px={20}
          mb={10}
          py={20}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} c={Warna.biruTua}>
                ASSETS
              </Text>
            }
            labelPosition="left" 
            size="md"
            color={Warna.biruTua}
          />
          <Box pt={20}>
            <Box
          style={{
            backgroundColor: Warna.biruTua,
            padding: 20,
            borderRadius: 20,
          }}
            >
              <Group justify="space-between">
                <Group>
                  <Box>
                    <Image
                      src={"/img/meja.jpeg"}
                      radius={10}
                      maw={{ base: 100, sm: 200 }}
                      mx="auto"
                      alt="img"
                    />
                  </Box>
                  <Box>
                    <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                      ITEM
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
                      c="white"
                    >
                      x2
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Group pt={20}>
                <Group style={{ cursor: "pointer" }} onClick={toggle}>
                  <Text fz={{ sm: 13, base: 9 }} fw={700} color="white">
                    NOTE
                  </Text>
                  <ActionIcon color="gray.0" variant="subtle">
                    <MdOutlineNoteAlt />
                  </ActionIcon>
                </Group>
              </Group>
              <Collapse in={opened}>
                <Textarea />
              </Collapse>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 5,
            borderRadius: 20,
          }}
          px={20}
          mb={10}
          py={20}
          ref={focusTrapRef}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} c={Warna.biruTua}>
                QUOTATION
              </Text>
            }
            labelPosition="left" 
            size="md"
            color={Warna.biruTua}
          />
          <Box pt={10}>
            <TextInput placeholder="ESTIMATES BUDGET" />
          </Box>
        </Box>
      </Box>
      <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
          <Button
            fullWidth
            radius={"lg"}
            color={Warna.biruTua}
            onClick={() => setOpenUpdateDraft(true)}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenUpdateDraft}
        onClose={() => setOpenUpdateDraft(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalUpdate />
      </Modal>
    </>
  );
}
