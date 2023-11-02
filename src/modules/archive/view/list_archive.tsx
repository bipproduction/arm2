"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { Box, Stack, Tabs, Text } from '@mantine/core';
import React from 'react';
import TableProject from '../components/table_project';
import TableTimeline from '../components/table_timeline';
import TableBudget from '../components/table_budget';


/**
 * Fungsi untuk menampilkan list archive.
 * @returns {component} menampilakn List archive.
 */
export default function ListArchive() {
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>ARCHIVE</Text>
        </Box>
        <Tabs defaultValue="project" color={Warna.biruTua} >
          <Tabs.List grow>
            <Tabs.Tab value="project" fw={"bold"} c={Warna.biruTua}>PROJECT BRIEF</Tabs.Tab>
            <Tabs.Tab value="timeline" fw={"bold"} c={Warna.biruTua}>TIMELINE</Tabs.Tab>
            <Tabs.Tab value="budget" fw={"bold"} c={Warna.biruTua}>BUDGET</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="project" pt="xs">
            <TableProject/>
          </Tabs.Panel>

          <Tabs.Panel value="timeline" pt="xs">
            <TableTimeline/>
          </Tabs.Panel>

          <Tabs.Panel value="budget" pt="xs">
            <TableBudget/>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  );
}
