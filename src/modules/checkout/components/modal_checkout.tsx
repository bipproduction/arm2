"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalCheckout } from "../val/isModalCheckout";


/**
 * Fungsi untuk menampilkan modal checkout.
 * @returns {component} menampilakn modal checkout.
 */
function ModalCheckout() {
  const router = useRouter();
  const [openCheckout, setOpenCheckout] = useAtom(isModalCheckout);
  function createCheckout() {
    toast("Success", { theme: "dark" });
    router.push("/dashboard/project/create");
    setOpenCheckout(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO CHECKOUT?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenCheckout(false)}
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
                onClick={createCheckout}
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

export default ModalCheckout;

