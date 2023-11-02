"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { Box, Grid, Stack, Text } from '@mantine/core';
import React from 'react';
import { ViewInvoice } from '../components/view_invoice';
import { ViewBilling } from '../components/view_billing';
import { ViewReimbursements } from '../components/view_reimbursements';


/**
 * Fungsi untuk menampilkan view bills.
 * @returns {component} menampilakn view bills.
 */
export default function ViewBills() {
  return (
    <>
      <Stack>
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>BILLS & REIMBURSEMENTS
          </Text>
        </Box>
        <Box>
          <Grid>
            <Grid.Col span={{ md: 6, lg: 6 }}>
              <ViewInvoice />
            </Grid.Col>
            <Grid.Col span={{ md: 6, lg: 6 }}>
              <ViewBilling />
            </Grid.Col>
          </Grid>
        </Box>
        <ViewReimbursements/>
      </Stack>
    </>
  );
}

