"use client";
import { Warna } from "@/modules/_global/fun/warna";
import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


/**
 * Fungsi untuk menampilkan Delivery Status.
 * @returns {component} menampilakn Delivery Status.
 */
export function DeliveryStatus() {
  const router = useRouter();
  return (
    <Box>
      <Box
        style={{
          backgroundColor: Warna.biruTua,
          borderRadius: 10,
        }}
        p={20}
      >
        <Grid>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                // height: "100%"
              }}
            >
              <Box pt={50}>
                <Text ta={"center"} fz={20} fw={700}>
                  DELIVERY STATUS
                </Text>
                <Text ta={"center"} fz={50} fw={700}>
                  80
                </Text>
              </Box>
              <Group justify="flex-end">
                <Group
                  justify="flex-end"
                  pt={22}
                  pb={10}
                  style={{ cursor: "pointer" }}
                  pr={20}
                  onClick={() => router.push("/dashboard/delivery-status")}
                >
                  <Text fz={10} c="dark">
                    Detail Delivery Status
                  </Text>
                  <ActionIcon color="dark" variant="subtle">
                    <BsFillArrowRightCircleFill />
                  </ActionIcon>
                </Group>
              </Group>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
              w={"100%"}
            >
              <Text ta={"center"} fz={13} fw={700}>
                ON PROCESS
              </Text>
              <Text ta={"center"} fz={25} fw={700}>
                10
              </Text>
            </Box>
            <Box pt={20}>
              <Box
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                w={"100%"}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  DELIVERED
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
}

