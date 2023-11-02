"use client";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import {
    ActionIcon,
    Box,
    Button,
    Card,
    Collapse,
    Container,
    Grid,
    Group,
    Image,
    Stack,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {
    MdOutlineDriveFileRenameOutline,
    MdOutlinePrint,
} from "react-icons/md";


/**
 * Fungsi untuk menampilkan view history assets.
 * @returns {component} menampilakn view history assets.
 */
export default function ViewHistoryScan() {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <>
            <Stack>
                <ButtonBack />
                <Box>
                    <Text fz={24} fw={"bold"} c={Warna.biruTua}>SCAN & HISTORY
                    </Text>
                </Box>
            </Stack>
            <Box
                style={{
                    backgroundColor: Warna.biruTua,
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                <Box pt={30} pb={30}>
                    <Container>
                        <Group justify="center">
                            <Card
                                withBorder
                                padding="lg"
                                radius="md"
                                w={400}
                            >
                                <Card.Section mb="sm" pt={20}>
                                    <Image
                                        src="/img/meja.jpeg"
                                        alt="Meja portable"
                                        maw={200}
                                        mx="auto"
                                    />
                                </Card.Section>
                                <Card.Section p={20} >
                                    <Group >
                                        <Text fw={"bold"}>ITEM</Text>
                                    </Group>
                                    <Box pt={20}>
                                        <Button
                                            fullWidth
                                            radius={10}
                                            color="gray.7"
                                            onClick={toggle}
                                        >
                                            HISTORY
                                        </Button>

                                        <Box pt={10}>
                                            <Collapse in={opened}>
                                                <Box
                                                    style={{
                                                        backgroundColor: Warna.biruTua,
                                                        borderRadius: 10,
                                                        padding: 20,
                                                    }}
                                                >
                                                    <Text>Event : We The Fest</Text>
                                                    <Text>Location : Jakarta Selatan</Text>
                                                    <Text>Date : 23 May 2023</Text>
                                                    <Text>Name : PT. Mekar Jaya</Text>
                                                    <Text>
                                                        .......... : ........... ......... ...........
                                                        ...........
                                                    </Text>
                                                    <Text>
                                                        .......... : ........... ......... ...........
                                                        ...........
                                                    </Text>
                                                    <Text>
                                                        .......... : ........... ......... ...........
                                                        ...........
                                                    </Text>
                                                    <Text>
                                                        .......... : ........... ......... ...........
                                                        ...........
                                                    </Text>
                                                    <Text>
                                                        .......... : ........... ......... ...........
                                                        ...........
                                                    </Text>
                                                </Box>
                                            </Collapse>
                                        </Box>
                                    </Box>
                                </Card.Section>
                            </Card>
                        </Group>
                    </Container>
                </Box>
            </Box>
        </>
    );
}


