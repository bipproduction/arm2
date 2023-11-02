"use client"
import { Warna } from '@/modules/_global/fun/warna'
import { Box, Button, Group, Text } from '@mantine/core'
import React from 'react'
import { EchartsDashboard } from '../components/echart'
import DataEarning from '../components/data_earning'
import { useRouter } from 'next/navigation'


/**
 * Fungsi untuk menampilkan view dashboard.
 * @returns {component} menampilakn view dashboard.
 */
export default function ViewDashboard() {
    const router = useRouter()
    return (
        <>
            <Text fw={"bold"} fz={20} c={Warna.biruTua}>DASHBOARD</Text>
            <Box>
                <Box>
                    <Group justify='flex-end'>
                        <Button bg={Warna.biruTua} radius={"lg"} onClick={() => router.push("/dashboard/list-client")} >CREATE PROJECTS</Button>
                        <Button bg={Warna.biruTua} radius={"lg"} onClick={() => router.push("/dashboard/recent-activity")}>RECENT ACTIVITY</Button>
                    </Group>
                </Box>
                <Box pt={10}>
                        <EchartsDashboard/>
                </Box>
                <Box>
                    <DataEarning/>
                </Box>
            </Box>
        </>
    )
}