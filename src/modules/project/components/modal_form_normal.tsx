"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalFormal } from "../val/isModalForm";


/**
 * Fungsi untuk menampilkan modal form normal.
 * @returns {component} menampilakn modal form normal.
 */
export default function ModalFormFormal() {
    const router = useRouter();
    const [openFormal, setOpenFormal] = useAtom(isModalFormal);
    function createFormal() {
        toast("Success", { theme: "dark" });
        router.push(`/dashboard/recent-activity`);
        setOpenFormal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO CREATE THIS PROJECT?
                    </Text>
                    <Textarea mb={20} placeholder="NOTE" />
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={"lg"}
                                color="rgba(222, 11, 11, 1)"
                                variant="filled"
                                fullWidth
                                onClick={() => setOpenFormal(false)}
                            >
                                NO
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={"lg"}
                                variant="filled"
                                color="rgba(11, 140, 76, 1)"
                                fullWidth
                                onClick={createFormal}
                            >
                                YES
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    );
}
