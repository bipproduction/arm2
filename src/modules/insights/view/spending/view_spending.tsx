import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Stack, Text } from '@mantine/core';
import React from 'react';
import { EchartSpending } from '../../components/echart_spanding';
import { SummarySpending } from '../../components/summary_spanding';


/**
 * Fungsi untuk menampilkan view spending.
 * @returns {component} menampilakn view spending.
 */
export default function ViewSpending() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/insights" />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            SPENDING ANALYTICS
          </Text>
        </Box >
        <Box>
          <EchartSpending/>
        </Box>
        <Box>
          <SummarySpending/>
        </Box>
      </Stack>
    </>
  );
}

