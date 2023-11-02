'use client'

import { Alert, Box, Button, Center, Grid, Group, Modal, Text, Textarea } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { isModalReimbursement } from "../val/isModalBills"


/**
 * Fungsi untuk menampilkan modal konfirmasi reimbursement.
 * @returns {component} menampilakn modal konfirmasi reimbursement.
 */
export function ModalKonfirmasiReimbursement() {
  const [openModal, setOpenModal] = useAtom(isModalReimbursement)
  const router = useRouter();
  function createReimbursement() {
    toast("Success", { theme: "dark" });
    router.push('/dashboard/reimbursement');
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
          ARE YOU SURE TO SUBMIT THIS REIMBURSEMENT?
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
                onClick={createReimbursement}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  )
}