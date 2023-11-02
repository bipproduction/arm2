import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Stack, Text } from '@mantine/core';
import React from 'react';
import TabCreateProject from '../components/tab_create_project';


/**
 * Fungsi untuk menampilkan list create project.
 * @returns {component} menampilakn list create project.
 */
export default function ListCreateProject() {
  return (
    <>
      <Stack>
        <ButtonBack link='/dashboard/list-client' />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>CREATE PROJECT</Text>
        </Box>
        <Box>
        <TabCreateProject/>
        </Box>
      </Stack>

    </>
  );
}

