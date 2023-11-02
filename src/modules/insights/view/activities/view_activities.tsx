'use client'

import { Warna } from "@/modules/_global/fun/warna"
import { ButtonBack } from "@/modules/_global/layout/components/button_back"
import { Box, Grid, Text } from "@mantine/core"
import { EchartActivities } from "../../components/echart_activities"
import { SummaryActivitiesProject } from "../../components/summary_activities_project"
import { SummaryActivitiesCo } from "../../components/summary_activities_co"


/**
 * Fungsi untuk menampilkan view activityes.
 * @returns {component} menampilakn view activityes.
 */
export default function ViewActivities() {
  return (
    <>
      <ButtonBack link="/dashboard/insights" />
      <Box>
        <Text fz={24} fw={"bold"} c={Warna.biruTua}>
          ACTIVITIES ANALYTICS
        </Text>
      </Box >
      <Box my={20}>
        <Grid>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Box p={10}>
                <Text fw={700} pl={20} pt={20}>
                  TOTAL ACTIVITY
                </Text>
              </Box>
              <EchartActivities />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Box p={10}>
                <Text fw={700} pl={20} pt={20}>
                  TOTAL SPENDING
                </Text>
              </Box>
              <EchartActivities />
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <Box
        style={{
          backgroundColor: Warna.biruTua,
          padding: 5,
          borderRadius: 10,
        }}
        px={20}
        my={20}>
        <SummaryActivitiesProject />
      </Box>
      <Box
        style={{
          backgroundColor: Warna.biruTua,
          padding: 5,
          borderRadius: 10,
        }}
        px={20}
        my={20}>
        <SummaryActivitiesCo />
      </Box>
    </>
  )
}

