import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Stack, Text } from '@mantine/core';
import React from 'react';
import TableDraftProject from '../components/table_draft_project';
import TableProjectStatus from '../components/table_project_status';
import TableDeliveryStatus from '../components/table_delivery_status';


/**
 * Fungsi untuk menampilkan list recent activity.
 * @returns {component} menampilakn list recent activity.
 */
export default function ListRecentActivity() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>RECENT ACTIVITY</Text>
        </Box>
        <Box>
          <TableDraftProject />
        </Box>
        <Box>
          <TableProjectStatus />
        </Box>
        <Box>
          <TableDeliveryStatus />
        </Box>
      </Stack>
    </>
  );
}

