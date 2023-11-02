"use client";
import {
  Alert,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Text,
  Textarea,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-simple-toasts";
import { isModalRevoked } from "../val/isModalRevoked";
import { Warna } from "@/modules/_global/fun/warna";


/**
 * Fungsi untuk menampilkan modal revoked.
 * @returns {component} menampilakn modal revoked.
 */
export default function ModalRevoked() {
  const router = useRouter();
  const [openRevoked, setOpenRevoked] = useAtom(isModalRevoked)
  function revoked() {
    toast("Success", {theme: "dark"})
    setOpenRevoked(false)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO UPDATE STATUS THIS DRAFT?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenRevoked(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                variant="filled"
                color="rgba(11, 140, 76, 1)"
                fullWidth
                onClick={revoked}
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

