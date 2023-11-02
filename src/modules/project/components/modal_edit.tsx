"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalEditDraft } from "../val/isModalForm";


/**
 * Fungsi untuk menampilkan modal edit.
 * @returns {component} menampilakn modal edit.
 */
export default function ModalEdit() {
  const router = useRouter();
  const [openProjectEdit, setOpenProjectEdit] = useAtom(isModalEditDraft);
  function editProjectAssets() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/recent-activity`);
    setOpenProjectEdit(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS PROJECT?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenProjectEdit(false)}
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
                onClick={editProjectAssets}
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

