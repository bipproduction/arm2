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
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {
  MdEditDocument,
  MdModeEditOutline,
  MdOutlineNoteAlt,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Warna } from "@/modules/_global/fun/warna";
import { PageHeader } from "@/modules/_global/layout/components/page_header";
import { isModalRevoked } from "../val/isModalRevoked";
import ModalRevoked from "../components/modal_revoked";


/**
 * Fungsi untuk menampilkan detail project status.
 * @returns {component} menampilakn detail project status.
 */
export function DetailProjectStatus({ id }: { id: string }) {
  let title = "APPROVAL";
  if (id == "111") title = "DECLINED";
  if (id == "222") title = "CANCELED";
  if (id == "333") title = "JOB ORDER";
  if (id == "444") title = "DRAFT ORDER";
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const [valOpenRevoked, setOpenRevoked] = useAtom(isModalRevoked);
  return (
    <>
    <Stack>
      <ButtonBack link="/dashboard/project-status" />
      <PageHeader title={title} date="23 February 2023" number={id} />
      </Stack>
      <Box mt={20}>
        <Group justify="flex-end">
          {(id == "111" || id == "222" || id == "333") && (
            <Button
              w={150}
              color={Warna.biruTua}
              radius={"lg"}
              leftSection={<MdModeEditOutline size="1rem" />}
              onClick={() => router.push(`/dashboard/project/${id}/edit`)}
            >
              EDIT
            </Button>
          )}
          {id == "444" && (
            <Group justify="right">
              <Button
                leftSection={<IoIosCloseCircle size="20" />}
                color={Warna.biruTua}
                radius={"lg"}
                w={150}
              onClick={() => setOpenRevoked(true)}
              >
                REVOKE
              </Button>
              <Button
                leftSection={<MdEditDocument size="20" />}
                color={Warna.biruTua}
                radius={"lg"}
                w={150}
                onClick={() => router.push("/dashboard/project/444/update")}
              >
                UPDATE
              </Button>
            </Group>
          )}
        </Group>
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
              <Text fw={700} fz={17} color={Warna.biruTua}>
                Detail Project
              </Text>
            }
            size="md"
            color={Warna.biruTua}
            labelPosition="left"
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
                <Text fw={700} fz={17} color={Warna.biruTua}>
                  Assets
                </Text>
              }
              size="md"
              color={Warna.biruTua}
              labelPosition="left"
            />
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
                        src={"../../img/meja.jpeg"}
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
                      <Text color="gray.3" fz={{ sm: 13, base: 9 }}>
                        Harmony 2
                      </Text>
                      <Text color="gray.3" fz={{ sm: 13, base: 9 }}>
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
      </Box>
      <Modal
        size={"md"}
        opened={valOpenRevoked}
        onClose={() => setOpenRevoked(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalRevoked />
      </Modal>

    </>
  );
}

