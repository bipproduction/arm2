"use client";
import { Warna } from "@/modules/_global/fun/warna";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  rem,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalFormal } from "../val/isModalForm";
import ModalFormFormal from "./modal_form_normal";

/**
 * Fungsi untuk menampilkan form normal.
 * @returns {component} menampilakn form normal.
 */
function FormNormal() {
  const focusTrapRef = useFocusTrap();
  const router = useRouter();
  const [valOpenFormal, setOpenFormal] = useAtom(isModalFormal);
  return (
    <>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box ref={focusTrapRef}>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} c={Warna.biruTua}>
                  PROJECT
                </Text>
              }
              size="md"
              color={Warna.biruTua}
              labelPosition="left"
            />
            <Stack pt={10}>
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <Group justify="flex-end">
                <Button
                  color={Warna.biruTua}
                  radius={"lg"}
                onClick={() => router.push("/dashboard/add-assets")}
                >
                  ADD ASSETS
                </Button>
              </Group>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} c={Warna.biruTua}>
                  ASSETS
                </Text>
              }
              size="md"
              color={Warna.biruTua}
              labelPosition="left"
            />
          </Box>
        </Box>
      </Box>
      <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
          <Button
            fullWidth
            radius={"lg"}
            color={Warna.biruTua}
          onClick={() => setOpenFormal(true)}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenFormal}
        onClose={() => setOpenFormal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalFormFormal />
      </Modal>
    </>
  );
}

export default FormNormal;
