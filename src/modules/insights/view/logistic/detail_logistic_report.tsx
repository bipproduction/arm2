'use client'
import { Warna } from "@/modules/_global/fun/warna"
import { ButtonBack } from "@/modules/_global/layout/components/button_back"
import { PageHeader } from "@/modules/_global/layout/components/page_header"
import { Box, Button, Divider, Group, Text } from "@mantine/core"
import { MdDownload } from "react-icons/md"


/**
 * Fungsi untuk menampilkan detail logistic report.
 * @returns {component} menampilakn detail logistic report.
 */
export default function DetailLogisticReport({ id }: { id: string }) {
  return (
    <>
      <ButtonBack link="/dashboard/logistic-report" />
      <PageHeader title="LOGISTIC REPORT" date="23 February 2023" number={id} />
      <Box mt={20}>
        <Group justify="flex-end">
          <Button color={Warna.biruTua} radius={"lg"} leftSection={<MdDownload size="1rem" />}>
            Download
          </Button>
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
              Detail Project
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
    </>
  )
}
