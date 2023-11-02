"use client";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import {
    Box,
    Button,
    FileButton,
    Grid,
    Group,
    List,
    Modal,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalAssetsView } from "../val/isModalAssets";
import ModalCreateAdd from "../components/modal_create_add";



/**
 * Fungsi untuk menampilkan view add asstes.
 * @returns {component} menampilakn view add asstes.
 */
export default function ViewListAddAssets() {
    const [files, setFiles] = useState<File[]>([]);
    const [valOpenEditAssets, setOpenEditAssets] = useAtom(isModalAssetsView);
    return (
        <>
            <Stack>
                <ButtonBack />
                <Box>
                    <Text fz={24} fw={"bold"} c={Warna.biruTua}>ADD ASSETS</Text>
                </Box>
            </Stack>
            <Box pt={20}>
                <Box
                    style={{
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <Stack>
                        <TextInput placeholder="NAME ASSETS" />
                        <TextInput placeholder="QUANTITY" />
                        <TextInput placeholder="TYPE ASSETS" />
                        <TextInput placeholder="LLOCATION" />
                        <TextInput placeholder="CONDITION" />
                        <SimpleGrid
                            cols={{ base: 1, sm: 2, lg: 2 }}
                            spacing={{ base: 10, sm: 'xl' }}
                            verticalSpacing={{ base: 'md', sm: 'xl' }}
                        >
                            <Box>
                                <DateInput placeholder="DATE OF ENTRY" />
                            </Box>
                            <Box>
                                <Group justify="center">
                                    <FileButton
                                        onChange={setFiles}
                                        accept="image/png,image/jpeg"
                                        multiple
                                    >
                                        {(props) => (
                                            <Button {...props} fullWidth color={Warna.biruTua}>
                                                UPLOAD IMAGE
                                            </Button>
                                        )}
                                    </FileButton>
                                </Group>

                                {files.length > 0 && (
                                    <Text size="sm" mt="sm">
                                        Picked files:
                                    </Text>
                                )}

                                <List size="sm" mt={5} withPadding>
                                    {files.map((file, index) => (
                                        <List.Item key={index}>{file.name}</List.Item>
                                    ))}
                                </List>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                    <Grid pt={20}>
                        <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
                            <Button
                                fullWidth
                                radius={"lg"}
                                color={Warna.biruTua}
                                onClick={() => setOpenEditAssets(true)}
                            >
                                SUBMIT
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Box >
            </Box >
            <Modal
                size={"md"}
                opened={valOpenEditAssets}
                onClose={() => setOpenEditAssets(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalCreateAdd />
            </Modal>
        </>
    );
}


