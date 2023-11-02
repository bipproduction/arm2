'use client'

import { Warna } from "@/modules/_global/fun/warna"
import { ActionIcon, Box, Grid, Group, Text } from "@mantine/core"
import { BsFillArrowRightCircleFill } from "react-icons/bs"


/**
 * Fungsi untuk menampilkan summary spanding.
 * @returns {component} menampilakn summary spanding.
 */
export function SummarySpending() {
  return (
    <>
      <Box mt={20}>
        <Box>
          <Grid>
            <Grid.Col span={{ md: 6, lg: 6 }}>
              <Box
                style={{
                  backgroundColor: Warna.biruTua,
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} c={"white"} fz={15} fw={700}>
                  CAMPAIGNS
                </Text>
                <Text ta={"center"} c={"white"} fz={40} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                style={{
                  backgroundColor: Warna.biruTua,
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} c={"white"} fz={15} fw={700}>
                  OUTLETS
                </Text>
                <Text ta={"center"} c={"white"} fz={40} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ md: 6, lg: 6 }}>
              <Box
                style={{
                  backgroundColor: Warna.biruTua,
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} c={"white"} fz={15} fw={700}>
                  PROJECTS
                </Text>
                <Text ta={"center"} c={"white"} fz={40} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                style={{
                  backgroundColor: Warna.biruTua,
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} c={"white"} fz={15} fw={700}>
                  AUDIENCE
                </Text>
                <Text ta={"center"} c={"white"} fz={40} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
