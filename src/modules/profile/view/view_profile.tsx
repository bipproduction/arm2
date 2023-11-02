"use client";
import React, { useState } from "react";
import { Avatar, Box, Button, Divider, Grid, Group, Stack, Text } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Warna } from "@/modules/_global/fun/warna";

/**
 * Fungsi untuk menampilkan profile.
 * @returns {component} menampilakn profile.
 */
export default function ViewProfile() {
  const router = useRouter();
  // const [hasilGambar, setHasilGambar] = useState(`/img/user/${data.idImage}.${data.extension}`)
  return (
    <>
      <ButtonBack />
      <Box p={30}>
        <Box>
          <Group justify="space-between">
            <Group>
              <Avatar
                size={"xl"}
                radius={40}
                // src={hasilGambar && hasilGambar}
                // alt={data.name}
                color={Warna.biruTua}
                bg={"white"}
              />
              <Box>
                <Text fz={15} c="gray.6">
                  Welcome,
                </Text>
                <Text fw={700} fz={20} c={Warna.biruTua}>
                  {/* {data.name} */}
                  MOH ALIF AL LUKMAN
                </Text>
              </Box>
            </Group>
            <Group>
              <Button
                leftSection={<AiOutlineEdit size="20" />}
                variant="outline"
                color={Warna.biruTua}
                radius="xl"
                w={120}
                onClick={() => router.push("/dashboard/profile/edit")}
              >
                Edit
              </Button>
            </Group>
          </Group>
        </Box>
        <Box pt={40} pb={40}>
          <Divider my="xs" color={Warna.biruTua} />
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 30,
          }}
          pt={40}
        >
          <Text fw={700} fz={20} c={Warna.biruTua}>
            Personal Data
          </Text>
          <Box pt={20}>
            <Grid>
              <Grid.Col span={{ md: 6, lg: 6 }}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14} c={Warna.biruTua}>
                      NAME
                    </Text>
                    <Text c="gray.6" fz={14}>
                      Moh Alif Al Lukman
                      {/* {data.name} */}
                    </Text>
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14} c={Warna.biruTua}>
                      EMAIL
                    </Text>
                    <Text c="gray.6" fz={14}>
                      {/* {data.email} */}
                      allukman.lukman99@gmail.com
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ md: 6, lg: 6 }}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14} c={Warna.biruTua}>
                      NO. PHONE
                    </Text>
                    <Text c="gray.6" fz={14}>
                      {/* +{data.phone} */}
                      087701790942
                    </Text>
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14} c={Warna.biruTua}>
                      ADDRESS
                    </Text>
                    <Text c="gray.6" fz={14}>
                      {/* {data.address} */}
                      Jl. Gunung Anthena 1 No 11A, Denpasar Barat, Bali
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )

}

