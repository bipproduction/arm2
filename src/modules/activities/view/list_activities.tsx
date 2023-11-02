"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { ActionIcon, Box, Button, Center, Grid, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdNavigateNext } from 'react-icons/md';
import { DraftProjects } from '../components/draft_project';
import { ProjectsStatus } from '../components/project_status';
import { DeliveryStatus } from '../components/delivery_status';

/**
 * Fungsi untuk menampilkan list Activities.
 * @returns {component} menampilakn List Activities.
 */
export default function ListActivities() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>ACTIVITIES</Text>
        </Box>
        <Grid>
          <Grid.Col span={{ md: 8, lg: 8 }}>
            <DraftProjects />
          </Grid.Col>
          <Grid.Col span={{ md: 4, lg: 4 }}>
            <Box style={{
              backgroundColor: Warna.biruTua,
              padding: 20,
              borderRadius: 10
            }}>
              <Box>
                <Button fullWidth bg={"white"} c={"dark"} radius={"md"} onClick={() => router.push("/dashboard/list-client")}>CREATE PROJECT</Button>
              </Box>
              <Box pt={12} >
                <Button fullWidth bg={"white"} c={"dark"} radius={"md"} onClick={() => router.push("/dashboard/archive")}>ARCHIVE</Button>
              </Box>
              <Box pt={12}>
                <Button fullWidth bg={"white"} c={"dark"} radius={"md"}  onClick={() => router.push(`/dashboard/quotation`)}>QUOTATION</Button>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
        <ProjectsStatus />
        <DeliveryStatus />

      </Stack >
    </>
  );
}

