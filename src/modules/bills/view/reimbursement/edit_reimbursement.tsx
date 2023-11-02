'use client'

import { Box, Button, Divider, Grid, Modal, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { isModalReimbursement } from "../../val/isModalBills";
import { ModalKonfirmasiReimbursement } from "../../components/modal_konfirmasi_reimbursement";


/**
 * Fungsi untuk menampilkan edit Reimbursement.
 * @returns {component} menampilakn edit Reimbursement.
 */
export function EditReimbursement() {
  const [valOpenModal, setOpenModal] = useAtom(isModalReimbursement);
  const focusTrapRef = useFocusTrap();
  function validasiReimbursement() {
    // validasi input dulu 
    setOpenModal(true);
  }
  return (
    <>
      <ButtonBack />
      <Box>
        <Text fz={24} fw={"bold"} c={Warna.biruTua}>
          EDIT REIMBURSEMENT
        </Text>
      </Box>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box ref={focusTrapRef}>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} c={Warna.biruTua}>
                  FORM REIMBURSEMENT
                </Text>
              }
              labelPosition="left"
              size="md"
              color={Warna.biruTua}
            />
            <Stack pt={10}>
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
            </Stack>
          </Box>
        </Box>

      </Box>
      <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
          <Button
            fullWidth
            radius={"lg"}
            color={Warna.biruTua}
            onClick={validasiReimbursement}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiReimbursement />
      </Modal>
    </>
  )
}
