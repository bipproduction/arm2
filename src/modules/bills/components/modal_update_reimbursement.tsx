'use client'

import { Alert, Box, Button, Center, Grid, Group, Select, Text, Textarea } from "@mantine/core"
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css"
import { isModalReimbursement } from "../val/isModalBills";


/**
 * Fungsi untuk menampilkan modal update reimbursement.
 * @returns {component} menampilakn modal update reimbursement.
 */
export function ModalUpdateReimbursement() {
  const [openModal, setOpenModal] = useAtom(isModalReimbursement)
  const router = useRouter();
  function updateReimbursement() {
    toast("Success", { theme: "dark" });
    router.push('/dashboard/reimbursement');
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Box>
            <Text ta="center" fw={700} size={"lg"}>Confirm Reimbursement</Text>
          </Box>
          <Box mb={10}>
            <Text ta="center"  size={"sm"}>Select status and add notes</Text>
          </Box>
          <Select
            placeholder="Status"
            data={[
              { value: '1', label: 'Approved' },
              { value: '2', label: 'Declined' },
            ]}
          />
          <Textarea mb={20} mt={10} placeholder="NOTE" />
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
                onClick={updateReimbursement}
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