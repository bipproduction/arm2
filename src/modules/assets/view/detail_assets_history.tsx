"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Button, Card, Collapse, Group, Image, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';


/**
 * Fungsi untuk menampilkan detail assets hostory.
 * @returns {component} menampilakn detail assets hostory.
 */
export default function DetailAssetsHistory() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>DETAIL ASSETS & HISTORY
          </Text>
        </Box>
        <Group justify='center'>
          <Card
            withBorder
            padding="lg"
            radius="md"
            w={400}
          >
            <Card.Section mb="sm" pt={20} p={10}>
              <Image
                src="/img/meja.jpeg"
                alt="Meja portable"
                maw={200}
                mx="auto"
              />
            </Card.Section>
            <Card.Section p={20} bg={Warna.biruTua}>
              <Group justify="space-between" pt={10}>
                <Group >
                  <Text fw={"bold"} c={"white"}>ITEM</Text>
                </Group>
                <Group>
                  <ActionIcon variant="subtle" color="rgba(255, 255, 255, 1)" aria-label="icon">
                    <HiCheckCircle size="30" />
                  </ActionIcon>
                  <Box>
                    <Text fz={8} fw={700} c={"white"}>
                      CONDITIONS
                    </Text>
                    <Text fz={8} fw={700} c="red">
                      GOOD CONDITION
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Box pt={20}>
                <Button
                  fullWidth
                  radius={"lg"}
                  c={Warna.biruTua}
                  bg={"white"}
                  onClick={toggle}
                >
                  HISTORY
                </Button>

                <Box pt={10}>
                  <Collapse in={opened}>
                    <Box
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 20,
                      }}
                    >
                      <Text>Event : We The Fest</Text>
                      <Text>Location : Jakarta Selatan</Text>
                      <Text>Date : 23 May 2023</Text>
                      <Text>Name : PT. Mekar Jaya</Text>
                      <Text>
                        .......... : ........... ......... ...........
                        ...........
                      </Text>
                      <Text>
                        .......... : ........... ......... ...........
                        ...........
                      </Text>
                      <Text>
                        .......... : ........... ......... ...........
                        ...........
                      </Text>
                      <Text>
                        .......... : ........... ......... ...........
                        ...........
                      </Text>
                      <Text>
                        .......... : ........... ......... ...........
                        ...........
                      </Text>
                    </Box>
                  </Collapse>
                </Box>
              </Box>
            </Card.Section>
          </Card>
        </Group>
      </Stack>
    </>
  );
}

