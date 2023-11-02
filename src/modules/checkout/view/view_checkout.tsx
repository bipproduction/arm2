import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Stack, Text } from '@mantine/core';
import React from 'react';
import ItemCheckout from '../components/item_checkout';


/**
 * Fungsi untuk menampilkan view checkout.
 * @returns {component} menampilakn view checkout.
 */
export default function ViewCheckout() {
  return (
    <>
    <Stack>
      <ButtonBack/>
      <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            CHECKOUT
          </Text>
        </Box>
        <ItemCheckout/>
    </Stack>
    </>
  );
}

