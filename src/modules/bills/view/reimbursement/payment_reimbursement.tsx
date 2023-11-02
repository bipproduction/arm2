'use client'
import { Box, Button, Divider, Grid, Modal, SimpleGrid, Stack, Text, TextInput, Textarea } from "@mantine/core"
import { useAtom } from "jotai";
import { useFocusTrap } from "@mantine/hooks";
import { isModalReimbursement } from "../../val/isModalBills";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Warna } from "@/modules/_global/fun/warna";
import { ModalKonfirmasiReimbursement } from "../../components/modal_konfirmasi_reimbursement";


/**
 * Fungsi untuk menampilkan payment Reimbursement.
 * @returns {component} menampilakn payment Reimbursement.
 */
export function PaymentReimbursement() {
  const [valOpenModal, setOpenModal] = useAtom(isModalReimbursement);
  const focusTrapRef = useFocusTrap();
  function validasiReimbursement() {
    // validasi input dulu 
    setOpenModal(true);
  }
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            PAYMENT REIMBURSEMENT
          </Text>
        </Box>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
          }}
          px={20}
          mb={10}
          py={20}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} c={Warna.biruTua}>
                Detail Reimbursement
              </Text>
            }
            labelPosition="left"
            size="md"
            color={Warna.biruTua}
          />
          <Box pt={10}>
            <Text>Event : We The Fest</Text>
            <Text>Location : Jakarta Selatan</Text>
            <Text>Date : 23 May 2023</Text>
            <Text>Name : PT. Mekar Jaya</Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
          </Box>
        </Box>

        <Box
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 20,
          }}
          mt={20}
        >
          <Box ref={focusTrapRef}>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} c={Warna.biruTua}>
                  FORM PAYMENT
                </Text>
              }
              labelPosition="left"
              size="md"
              color={Warna.biruTua}
            />
            <Stack pt={10}>
              <TextInput placeholder="Upload receipt" />
              <TextInput placeholder="Form input" />
              <Textarea placeholder="Note" />
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
