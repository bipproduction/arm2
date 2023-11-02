'use client'

import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Box, Button, Divider, Group, Stack, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { MdModeEditOutline } from "react-icons/md"


/**
 * Fungsi untuk menampilkan detail outlet view.
 * @returns {component} menampilakn detail outlet view.
 */
export function DetailOutlet({ id }: { id: string }) {
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            DETAIL OUTLET
          </Text>
        </Box >
      </Stack>
      <Box mt={20}>
        <Group justify="flex-end">
          <Button color={Warna.biruTua} radius={"lg"} w={150} leftSection={<MdModeEditOutline size="1rem" />} onClick={() => router.push(`${id}/edit`)}>
            Edit
          </Button>
        </Group>
      </Box>
      <Box
        style={{
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
        }}
        px={20}
        my={10}
        py={20}
      >
        <Divider
          mb={5}
          label={
            <Text fw={700} fz={17} c={Warna.biruTua}>
              Outlet
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
