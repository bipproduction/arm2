'use client'

import { Box, Group, Text } from "@mantine/core"
import { Warna } from "../../fun/warna"

/**
 * Fungsi untuk menampilkan page header.
 * @param {string}  - Judul button.
 * @returns {title, number, date, status} tampilan sesuai dengan parameter.
 */
export const PageHeader = ({ title, number, date, status }: { title?: string, number?: string, date?: string, status?: string }) => {
    return (
        <>
            <Box
                style={{
                    backgroundColor: "white",
                    padding: 5,
                    borderRadius: 20,
                }}
                pl={20}
                mb={10}
                py={10}
            >
                <Text fw={700} fz={20} mb={10} mt={5} c={Warna.biruTua}>
                    {title}
                </Text>
                <Text mb={5}>
                    No. {number}
                </Text>
                <Text mb={5}>
                    {date}
                </Text>
                <Group justify="flex-end" pt={10}>
                <Text mb={5} pr={20} fw={700}>
                    {status}
                </Text>
                </Group>
            </Box>
        </>
    )
}
