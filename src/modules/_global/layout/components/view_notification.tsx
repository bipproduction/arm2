"use client"
import { Menu, Button, Text, rem, ActionIcon, Box, Group, Avatar, Stack } from '@mantine/core';
import { IoMdNotifications } from 'react-icons/io';
import { Warna } from '../../fun/warna';

const dataNotification = [
    {
        id: 1,
        user: "User 1",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.",
    },
    {
        id: 2,
        user: "User 2",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.",
    },
    {
        id: 3,
        user: "User 3",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.",
    },
    {
        id: 4,
        user: "User 4",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.",
    },
]

/**
 * Fungsi untuk menampilkan varification.
 * @returns {component} menampilakn varification.
 */
export default function ViewNotification() {
    return (
        <Menu shadow="md" width={400}>
            <Menu.Target>
                <ActionIcon variant="subtle" aria-label="Settings" c={Warna.biruTua}>
                    <IoMdNotifications style={{ width: '80%', height: '80%' }} stroke={1.5} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown >
                <Menu.Label>NOTIFICATION</Menu.Label>
                {dataNotification.map((v, i) => (
                    <Menu.Item bg={Warna.biruTua} key={i} mb={10}>
                        <Group >
                            <Box>
                                <Avatar src="#" radius="xl" bg={"white"} />
                            </Box>
                            <Box>

                                <Group>
                                    <Text size="sm" c={"white"} fw={'bold'}>
                                        {v.user}
                                    </Text>
                                </Group>
                                <Group>
                                    <Text c={"white"}>{v.message}</Text>
                                </Group>
                            </Box>
                        </Group>
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}

