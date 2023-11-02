"use client";
import { Warna } from '@/modules/_global/fun/warna';
import { ButtonBack } from '@/modules/_global/layout/components/button_back';
import { ActionIcon, Box, Card, Checkbox, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import {
    Button,
    Flex,
    Grid,
    Group,
    Image,
    Paper,
} from "@mantine/core";
import { useRouter } from "next/navigation";

const img = [
    {
        id: 1,
        image: "../img/meja.jpeg",
        icon: HiXCircle,
        conditions: "NEED REPARATIONS",
    },
    {
        id: 2,
        image: "../img/meja.jpeg",
        icon: HiXCircle,
        conditions: "NEED REPARATIONS",
    },
    {
        id: 3,
        image: "../img/meja.jpeg",
        icon: HiXCircle,
        conditions: "NEED REPARATIONS",
    },
    {
        id: 4,
        image: "../img/meja.jpeg",
        icon: HiXCircle,
        conditions: "NEED REPARATIONS",
    },
    {
        id: 5,
        image: "../img/meja.jpeg",
        icon: HiXCircle,
        conditions: "NEED REPARATIONS",
    },
    {
        id: 6,
        image: "../img/meja.jpeg",
        icon: HiCheckCircle,
        conditions: "GOOD CONDITION",
    },
    {
        id: 7,
        image: "../img/meja.jpeg",
        icon: HiCheckCircle,
        conditions: "GOOD CONDITION",
    },
    {
        id: 8,
        image: "../img/meja.jpeg",
        icon: HiCheckCircle,
        conditions: "GOOD CONDITION",
    },
];


/**
 * Fungsi untuk menampilkan list detail add assets.
 * @returns {component} menampilakn list detail add assets.
 */
export default function ListDetailAddAssets() {
    const router = useRouter()
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/add-assets" />
                <Box>
                    <Text fz={24} fw={"bold"} c={Warna.biruTua}>ADD ASSETS</Text>
                </Box>
                <Box pt={10}>
                    <Group justify='space-between'>
                        <Box>
                            <Select
                                placeholder="Location"
                                data={['Jakarta', 'Bali', 'Surabaya', 'Malang']}
                                radius={"lg"}
                            />
                        </Box>
                        <Box>
                            <TextInput placeholder='Search' w={300} radius={"lg"} />
                        </Box>
                    </Group>
                </Box>
                <Box pt={20}>
                    <Box pb={10}>
                        <Checkbox label={"All"} />
                    </Box>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}

                    >
                        {img.map((item) => (
                            <Card
                                shadow="sm"
                                key={item.id}
                                bg={Warna.biruTua}

                            >
                                <Card.Section p={10} bg={"white"}>
                                    <Box>
                                        <Checkbox />
                                    </Box>
                                    <Image
                                        style={{
                                            cursor: "pointer"
                                        }}
                                        src={"../img/meja.jpeg"}
                                        maw={"auto"} mx="auto" alt="a"
                                        onClick={() => router.push("/dashboard/detail-add-assets/detail-view-assets")}
                                    />
                                </Card.Section>
                                <Card.Section p={10}>
                                    <Box>
                                        <Text fw={700} fz={25} c={"white"}>
                                            ITEM NAME
                                        </Text>
                                    </Box>
                                    <Group justify="space-between" pt={10}>
                                        <Group>
                                            <ActionIcon variant="subtle" color="rgba(255, 255, 255, 1)" aria-label="icon">
                                                <item.icon size="30" />
                                            </ActionIcon>
                                            <Box>
                                                <Text fz={8} fw={700} c={"white"}>
                                                    CONDITIONS
                                                </Text>
                                                <Text fz={8} fw={700} c={"red.9"}>
                                                    {item.conditions}
                                                </Text>
                                            </Box>
                                        </Group>
                                        <Button c={Warna.biruTua} bg={"white"} radius={"lg"}>
                                            + Add To Cart
                                        </Button>
                                    </Group>
                                </Card.Section>
                            </Card>

                        ))}
                    </SimpleGrid>
                    {/* </Flex> */}
                </Box>
            </Stack>
        </>
    );
}

