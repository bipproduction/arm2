'use client'

import { ActionIcon, Box, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { IoCaretBack } from "react-icons/io5"
import { Warna } from "../../fun/warna"
import { BiArrowBack } from "react-icons/bi"

/**
 * Fungsi untuk menampilkan button back.
 * @param {string} link - Judul button.
 * @returns {component} button sesuai dengan parameter.
 */
export const ButtonBack = ({ link }: { link?: string }) => {
    const router = useRouter()
    return (
        <>
            <Group >
                <Box onClick={router.back} style={{ textDecoration: "none" }}>
                    <Group style={{ cursor: "pointer" }}>
                        <ActionIcon variant="subtle" color={Warna.biruTua} aria-label="icon">
                            <BiArrowBack size="20" />
                        </ActionIcon>
                        <Text fz={15} fw={700} color={Warna.biruTua}>
                            Back
                        </Text>
                    </Group>
                </Box>
            </Group>
        </>
    )
}