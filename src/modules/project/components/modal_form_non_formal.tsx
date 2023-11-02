"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { isModalNonFormal } from "../val/isModalForm";
import { Warna } from "@/modules/_global/fun/warna";


/**
 * Fungsi untuk menampilkan modal non form normal.
 * @returns {component} menampilakn modal non form normal.
 */
function ModalFormNonFormal() {
  const router = useRouter();
  const [openNonFormal, setOpenNonFormal] = useAtom(isModalNonFormal);
  function createNonFOrmal() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/recent-activity`);
    setOpenNonFormal(false);
  }
  return (
    <>
      <Box>
        <Alert variant="filled" color={Warna.biruTua} >
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO CREATE THIS PROJECT?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={"lg"}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenNonFormal(false)}

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
                onClick={createNonFOrmal}
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

export default ModalFormNonFormal;
