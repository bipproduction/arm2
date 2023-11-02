'use client'
import { Warna } from "@/modules/_global/fun/warna"
import { ButtonBack } from "@/modules/_global/layout/components/button_back"
import { PageHeader } from "@/modules/_global/layout/components/page_header"
import { Box, Divider, Flex, Group, Stack, Table, Text } from "@mantine/core"


/**
 * Fungsi untuk menampilkan detail invoice.
 * @returns {component} menampilakn detail invoice.
 */
export default function DetailInvoice({ id }: { id: string }) {
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageHeader title="INVOICE" date="23 February 2023" number={id} />
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
                Detail Invoice
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
      </Stack>
    </>
  )
}