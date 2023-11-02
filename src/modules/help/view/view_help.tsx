import { Warna } from '@/modules/_global/fun/warna';
import { Box, Stack, Text } from '@mantine/core';
import React from 'react';
import { ListFaq } from '../components/list_faq';
import { ListContact } from '../components/list_contact';


/**
 * Fungsi untuk menampilkan view help.
 * @returns {component} menampilakn view help.
 */
export default function ViewHelp() {
  return (
    <>
      <Stack>
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            HELP & SUPPORT
          </Text>
        </Box>
        <Box style={{
          backgroundColor: Warna.biruTua,
          padding: 20,
          borderRadius: 10
        }}>
          <Box>
            <Text fz={24} fw={"bold"} c={"white"}>
              FAQ
            </Text>
          </Box>
          <ListFaq />
        </Box>
        <Box style={{
          backgroundColor: Warna.biruTua,
          padding: 20,
          borderRadius: 10
        }}>
          <ListContact />
        </Box>
      </Stack>
    </>
  );
}
