"use client"
import React, { useState } from 'react';
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import { ActionIcon, AppShell, Box, Burger, Group, Image, NavLink, Skeleton, Text } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { BsFillCartFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import { Warna } from '../../fun/warna';
import ViewNotification from '../components/view_notification';
import ProfileHeader from '../components/profile';

/**
 * Fungsi untuk menampilkan layout dahsboard.
 * @returns {component} menampilakn layout dashboard.
 */
export default function ViewLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [opened, { toggle }] = useDisclosure();
  const dataDashboard = [
    {
      key: "md1",
      link: "/dashboard",
      label: "DASHBOARD",
    },
    {
      key: "md2",
      link: "/dashboard/activities",
      label: "ACTIVITIES",
    },
    {
      key: "md3",
      link: "/dashboard/assets",
      label: "ASSETS",
    },
    {
      key: "md4",
      link: "/dashboard/bills",
      label: "BILLS",
    },
    {
      key: "md5",
      link: "/dashboard/insights",
      label: "INSIGHTS",
    },
    {
      key: "md6",
      link: "/dashboard/help",
      label: "HELP & SUPPORT",
    },
  ];

  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });


  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          {/* <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image alt='logo' src={"/img/logo.png"} w={100} />
          </Group> */}
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Image alt='logo' src={"/img/logo.png"} w={100} />
              <Group>
                <ActionIcon variant="subtle" aria-label="Settings" c={Warna.biruTua} onClick={() => router.push("/dashboard/cart")}>
                  <BsFillCartFill style={{ width: '80%', height: '80%' }} stroke={1.5} />
                </ActionIcon>
                <ViewNotification/>
                {/* <ActionIcon variant="subtle" aria-label="Settings" c={Warna.biruTua}>
                  <FaCircleUser style={{ width: '80%', height: '80%' }} stroke={1.5} />
                </ActionIcon> */}
                <ProfileHeader/>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          {dataDashboard.map((item) => {
            return (
              <NavLink
                key={item.key}
                active={item.link === active}
                fw={item.label ? "bolder" : "normal"}
                label={item.label}
                onClick={() => {
                  router.push(item.link);
                }}
                color="#5985AD"
                variant="filled"
              />
            );
          })}
        </AppShell.Navbar>
        <AppShell.Main bg={"#EAEAEA"}>
          <Box p={10}>
            {children}
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
