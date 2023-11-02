import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalAssetsView } from "../val/isModalAssets";


/**
 * Fungsi untuk menampilkan lmodal create add.
 * @returns {component} menampilakn Lmodal create add.
 */
function ModalCreateAdd() {
  const [openCreateAdd, setOpenCreateAdd] = useAtom(isModalAssetsView);
  const router = useRouter();
  function createAdd() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/assets`);
    setOpenCreateAdd(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO ADD ASSETS?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenCreateAdd(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button radius={10}
                variant="filled"
                color="rgba(11, 140, 76, 1)"
                fullWidth
                onClick={createAdd}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}

export default ModalCreateAdd;

