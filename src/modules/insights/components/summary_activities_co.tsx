'use client'
import { Warna } from "@/modules/_global/fun/warna"
import { ActionIcon, Box, Grid, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { HiOutlineChevronRight } from "react-icons/hi"


/**
 * Fungsi untuk menampilkan summary activities checkout.
 * @returns {component} menampilakn summary activities checkout.
 */
export function SummaryActivitiesCo() {
    const router = useRouter()
    return (
        <>
            <Box
                style={{
                    backgroundColor: "white",
                    padding: 5,
                    borderRadius: 5,
                }}
                px={20}
                my={10}
            >
                <Group justify="space-between">
                    <Text c={Warna.biruTua} fw={700} fz={15}>
                        ASSETS CHECKOUT
                    </Text>
                    <ActionIcon onClick={() => router.push("/dashboard/activities-analytic/assets-checkout")} color={Warna.biruTua} variant="subtle">
                        <HiOutlineChevronRight size="25" />
                    </ActionIcon>
                </Group>
            </Box>
            <Box pb={10}>
                <Grid>
                    <Grid.Col span={{md: 3, lg: 3 }}>
                        <Box
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} c={Warna.biruTua}>
                                CANCELED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} c={Warna.biruTua}>
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{md: 3, lg: 3 }}>
                        <Box
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} c={Warna.biruTua}>
                                DECLINED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} c={Warna.biruTua}>
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{md: 3, lg: 3 }}>
                        <Box
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} c={Warna.biruTua}>
                                REVOKED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} c={Warna.biruTua}>
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{md: 3, lg: 3 }}>
                        <Box
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} c={Warna.biruTua}>
                                DELIVERED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} c={Warna.biruTua}>
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

