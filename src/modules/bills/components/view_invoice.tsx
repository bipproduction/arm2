'use client'

import { Warna } from "@/modules/_global/fun/warna";
import { ActionIcon, Box, Flex, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { BsFillArrowRightCircleFill } from "react-icons/bs"


/**
 * Fungsi untuk menampilkan invoicet.
 * @returns {component} menampilakn invoicet.
 */
export function ViewInvoice() {
  const router = useRouter();
  return (
    <>
      <Box
        style={{
          backgroundColor: Warna.biruTua,
          borderRadius: 10,
        }}
        pl={20}
        pt={20}
        pr={20}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Group justify="space-between">
            <Box pl={30}>
              <Text fw={700} fz={25}>
                INVOICE
              </Text>
            </Box>
            <Box pr={30} pl={{ base: 100 }}>
              <Text fz={40} fw={700}>
                50
              </Text>
            </Box>
          </Group>
        </Box>
        <Box>
          <Group justify="flex-end" pt={10} pb={10}>
            <Flex style={{ cursor: "pointer" }} onClick={() => router.push('/dashboard/invoice')}>
              <Text fz={10} c="white" pt={5}>
                Detail Invoice
              </Text>
              <ActionIcon color="gray.0" variant="subtle">
                <BsFillArrowRightCircleFill />
              </ActionIcon>
            </Flex>
          </Group>
        </Box>
      </Box>
    </>
  )
}


