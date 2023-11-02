"use client";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { PageHeader } from "@/modules/_global/layout/components/page_header";
import {
  ActionIcon,
  Box,
  Collapse,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { MdOutlineNoteAlt } from "react-icons/md";


/**
 * Fungsi untuk menampilkan detail delivery status.
 * @returns {component} menampilakn detail delivery status.
 */
export function DetailDeliveryStatus({ id }: { id: string }) {
  let status = "ON PROCESS";
  if (id == "222") status = "DELIVERED";
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/delivery-status" />
        <PageHeader
          title={"DELIVERY STATUS"}
          date="23 February 2023"
          number={id}
          status={status}
        />
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
            color={Warna.biruTua}
            size="md"
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
              borderRadius: 5,
            }}
            px={20}
            mb={10}
            py={20}
          >
            <Divider
              mb={5}
              label={
                <Text fw={700} fz={17} c={Warna.biruTua}>
                  Assets
                </Text>
              }
              size="md"
              labelPosition="left"
              color={Warna.biruTua}
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
                <Group pt={20}>
                  <Group style={{ cursor: "pointer" }} onClick={toggle}>
                    <Text fz={{ sm: 13, base: 9 }} fw={700} c="white">
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
    </>
  );
}
