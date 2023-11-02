"use client"
import { Warna } from "@/modules/_global/fun/warna";
import { ActionIcon, Box, Group, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

/**
 * Fungsi untuk menampilkan draft project.
 * @returns {component} menampilakn draft project.
 */
export function DraftProjects() {
  const router = useRouter();
  return (
    <>
      <Box
        style={{
          backgroundColor: Warna.biruTua,
          borderRadius: 10,
        }}
        pl={20}
        pt={20}
        pr={20}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Group justify="space-between">
            <Box pl={30}>
              <Text fw={700} fz={25}>
                DRAFT PROJECTS
              </Text>
            </Box>
            <Box pr={30} pl={{ base: 100 }}>
              <Text fz={40} fw={700}>
                5456
              </Text>
            </Box>
          </Group>
        </Box>
        <Group justify="flex-end">
          <Group
            justify="flex-end"
            pt={10}
            pb={10}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/dashboard/project/draft")}
          >
            <Text fz={10} color="white">
              Detail Draft Project
            </Text>
            <ActionIcon color="gray.0" variant="subtle">
              <BsFillArrowRightCircleFill />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </>
  );
}
