"use client";
import { Warna } from "@/modules/_global/fun/warna";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  Text,
  Textarea,
  // createStyles,
  rem,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalNonFormal } from "../val/isModalForm";
import ModalFormNonFormal from "./modal_form_non_formal";


/**
 * Fungsi untuk menampilkan non form normal.
 * @returns {component} menampilakn non form normal.
 */
export default function FormNonFormal() {
  const router = useRouter();
  const [valOpenNonFormal, setOpenNonFormal] = useAtom(isModalNonFormal);
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
          <Box>
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
            <div>
              <Textarea variant="filled" size="xl" />
            </div>
          </Box>
        </Box>
      </Box>

      <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
          <Button
            fullWidth
            radius={"lg"}
            color={Warna.biruTua}
          onClick={() => setOpenNonFormal(true)}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenNonFormal}
        onClose={() => setOpenNonFormal(false)}
        withCloseButton={false}
        closeOnClickOutside={false}
        centered
      >
        <ModalFormNonFormal />
      </Modal>
    </>
  );
}



