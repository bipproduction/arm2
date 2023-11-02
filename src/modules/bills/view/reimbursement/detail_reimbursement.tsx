'use client'
import { Box, Button, Divider, Group, Modal, Stack, Text, Title } from "@mantine/core"
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { MdDownload, MdModeEditOutline, MdOutlineContentPasteGo, MdOutlinePayments } from "react-icons/md"
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { PageHeader } from "@/modules/_global/layout/components/page_header";
import { Warna } from "@/modules/_global/fun/warna";
import { isModalReimbursement } from "../../val/isModalBills";
import { ModalUpdateReimbursement } from "../../components/modal_update_reimbursement";


/**
 * Fungsi untuk menampilkan detail Reimbursement.
 * @returns {component} menampilakn detail Reimbursement.
 */
export function DetailReimbursement({ id }: { id: string }) {
  let title = "APPROVAL REIMBURSEMENT";
  if (id == "111") title = "DECLINED REIMBURSEMENT";
  if (id == "222") title = "APPROVED REIMBURSEMENT";
  if (id == "333") title = "PAID REIMBURSEMENT";

  const router = useRouter();
  const [valOpenModal, setOpenModal] = useAtom(isModalReimbursement);

  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/reimbursement" />
        <PageHeader title={title} date="23 February 2023" number={id} />
      </Stack>
      <Box mt={20}>
        <Group justify="flex-end">
          {id == "111" &&
            <Button color={Warna.biruTua} radius={"lg"} leftSection={<MdModeEditOutline size="1rem" />} onClick={() => router.push(`${id}/edit`)}>
              Edit
            </Button>
          }
          {id == "222" &&
            <Button color={Warna.biruTua} radius={"lg"} leftSection={<MdOutlinePayments size="1rem" />} onClick={() => router.push(`${id}/payment`)}>
              Payment
            </Button>
          }
          {id == "333" && <Button color={Warna.biruTua} radius={"lg"} leftSection={<MdDownload size="1rem" />}>
            Download
          </Button>}

          {id != "333" && id != "222" && id != "111" &&
            <Button color={Warna.biruTua} radius={"lg"} leftSection={<MdOutlineContentPasteGo size="1rem" />}
              onClick={() => setOpenModal(true)}
            >
              Update
            </Button>
          }
        </Group>
      </Box>
      <Box
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20,
        }}
        px={20}
        my={10}
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
        <Box>
          <Text>Event : We The Fest</Text>
          <Text>Location : Jakarta Selatan</Text>
          <Text>Date : 23 May 2023</Text>
          <Text>Name : PT. Mekar Jaya</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>
          <Text>.......... : ........... ......... ........... ...........</Text>

        </Box>
      </Box>

      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalUpdateReimbursement />
      </Modal>
    </>
  )
}
