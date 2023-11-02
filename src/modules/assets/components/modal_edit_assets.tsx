"use client";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalAssetsEdit } from "../val/isModalAssets";


/**
 * Fungsi untuk menampilkan modal edit assets.
 * @returns {component} menampilakn modal edit assets.
 */
export default function ModalEditAssets() {
  const router = useRouter();
  const [openEditAssets, setOpenEditAssets] = useAtom(isModalAssetsEdit);
  function editAssets() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/assets`);
    setOpenEditAssets(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT ASSETS?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenEditAssets(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button radius={10}
                variant="filled"
                color="rgba(11, 140, 76, 1)"
                fullWidth onClick={editAssets}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}

