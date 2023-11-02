"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalOutlet } from "../val/isModalOutlet";



/**
 * Fungsi untuk menampilkan modal konfirmasi outlet.
 * @returns {component} menampilakn modal konfirmasi outlet.
 */
export default function ModalKonfirmasiOutlet() {
  const router = useRouter();
  const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
  function createOutlet() {
    toast("Success", { theme: "dark" });
    router.push('/dashboard/outlet');
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO ADD OUTLET?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={"lg"}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenModal(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={"lg"}
                variant="filled"
                color="rgba(11, 140, 76, 1)"
                fullWidth
                onClick={createOutlet}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}


