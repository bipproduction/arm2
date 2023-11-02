import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { PageHeader } from '@/modules/_global/layout/components/page_header';
import { Box, Button, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { MdDownload } from 'react-icons/md';


/**
 * Fungsi untuk menampilkan detail project report.
 * @returns {component} menampilakn detail project report.
 */
export default function DetailProjectReport({ id }: { id: string }) {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/project-report" />
        <PageHeader title="PROJECT REPORT" date="23 February 2023" number={id} />
      </Stack>
      <Box mt={20}>
        <Group justify="flex-end">
          <Button color={Warna.biruTua} radius={"lg"} w={150} leftSection={<MdDownload size="1rem" />}>
            Download
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
  );
}

