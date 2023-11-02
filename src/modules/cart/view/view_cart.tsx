"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Button, Grid, Stack, Text } from '@mantine/core';
import React from 'react';
import ListCart from '../components/list_cart';
import { useRouter } from 'next/navigation';


/**
 * Fungsi untuk menampilkan view cart.
 * @returns {component} menampilakn view cart.
 */
export default function ViewCart() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>
            CART
          </Text>
        </Box>
        <Box>
          <ListCart />
        </Box>
        <Grid pt={20}>
          <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
            <Button
              fullWidth
              radius={"lg"}
              color={Warna.biruTua}
              onClick={() => router.push("/dashboard/checkout")}
            >
              SUBMIT
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}

