import { Warna } from '@/modules/_global/fun/warna';
import { Box, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

/**
 * Fungsi untuk menampilkan data earning.
 * @returns {component} menampilakn data earning.
 */
export default function DataEarning() {
  return (
    <>
      <Box pt={30}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box>
            <Box style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}>
              <Text ta={'center'}>DAILY EARNING</Text>
              <Text pt={10} ta={'center'} fz={20} fw={'bold'} c={Warna.biruTua}>$ 123.891</Text>
            </Box>
          </Box>
          <Box>
            <Box style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}>
              <Text ta={'center'}>WEEKLY EARNING</Text>
              <Text pt={10} ta={'center'} fz={20} fw={'bold'} c={Warna.biruTua}>$ 123.891</Text>
            </Box>
          </Box>
          <Box>
            <Box style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}>
              <Text ta={'center'}>SUMMARY EARNING</Text>
              <Text pt={10} ta={'center'} fz={20} fw={'bold'} c={Warna.biruTua}>$ 123.891</Text>
            </Box>
          </Box>
          <Box>
            <Box style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}>
              <Text ta={'center'}>TOTAL EARNING</Text>
              <Text pt={10} ta={'center'} fz={20} fw={'bold'} c={Warna.biruTua}>$ 123.891</Text>
            </Box>
          </Box>
        </SimpleGrid>

      </Box>
    </>
  );
}

