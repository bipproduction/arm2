'use client'
import { Box, Button, Grid, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdOutlineAreaChart, MdOutlineAutoGraph, MdOutlineFolderCopy, MdOutlineHomeWork, MdOutlineInventory2 } from "react-icons/md";
import classes from "../components/StatsCard.module.css"
import { Warna } from "@/modules/_global/fun/warna";


/**
 * Fungsi untuk menampilkan view insights.
 * @returns {component} menampilakn view insights.
 */
export function ViewInsights() {
  const router = useRouter();
  return (
    <>
    <Stack>

      <Box>
        <Text fz={24} fw={"bold"} c={Warna.biruTua}>INSIGHTS</Text>
      </Box>
      <Grid grow>
        <Grid.Col span={4}>
          <Paper radius="md" withBorder className={classes.card} mt={20}>
            <ThemeIcon className={classes.icon} size={60} radius={60} color={Warna.biruTua}>
              <MdOutlineHomeWork size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={"bold"} className={classes.title}>
              OUTLET DATABASE
            </Text>


            <Button fullWidth variant="filled" radius={"lg"} bg={Warna.biruTua} mt={30} onClick={() => router.push("/dashboard/outlet")}>VIEW DETAIL</Button>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper radius="md" withBorder className={classes.card} mt={20}>
            <ThemeIcon className={classes.icon} size={60} radius={60} color={Warna.biruTua}>
              <MdOutlineInventory2 size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={"bold"} className={classes.title}>
              LOGISTIC REPORTS
            </Text>


            <Button fullWidth variant="filled" radius={"lg"} bg={Warna.biruTua} mt={30} onClick={() => router.push("/dashboard/logistic-report")}>VIEW DETAIL</Button>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper radius="md" withBorder className={classes.card} mt={20}>
            <ThemeIcon className={classes.icon} size={60} radius={60} color={Warna.biruTua}>
              <MdOutlineFolderCopy size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={"bold"} className={classes.title}>
              PROJECT REPORTS
            </Text>


            <Button fullWidth variant="filled" radius={"lg"} bg={Warna.biruTua} mt={30} onClick={() => router.push("/dashboard/project-report")}>VIEW DETAIL</Button>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper radius="md" withBorder className={classes.card} mt={20}>
            <ThemeIcon className={classes.icon} size={60} radius={60} color={Warna.biruTua}>
              <MdOutlineAreaChart size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={"bold"} className={classes.title}>
              SPENDING ANALYTICS
            </Text>


            <Button fullWidth variant="filled" radius={"lg"} bg={Warna.biruTua} mt={30} onClick={() => router.push("/dashboard/spending-analytic")}>VIEW DETAIL</Button>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper radius="md" withBorder className={classes.card} mt={20}>
            <ThemeIcon className={classes.icon} size={60} radius={60} color={Warna.biruTua}>
              <MdOutlineAutoGraph size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={"bold"} className={classes.title}>
              ACTIVITIES ANALYTICS
            </Text>


            <Button fullWidth variant="filled" radius={"lg"} bg={Warna.biruTua} mt={30} onClick={() => router.push("/dashboard/activities-analytic")}>VIEW DETAIL</Button>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
    </>
  )
}


