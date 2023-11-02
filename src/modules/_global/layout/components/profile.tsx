"use client"
import {
  Menu,
  Button,
  Text,
  Box,
  Group,
  Avatar,
  Stack,
  Modal,
  ActionIcon,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { useAtom } from "jotai";
import { useState } from "react";
import { PiUserSwitch } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useShallowEffect } from "@mantine/hooks";
import { FaCircleUser } from "react-icons/fa6";
import { Warna } from "../../fun/warna";

/**
 * Fungsi untuk menampilkan profile.
 * @returns {component} menampilakn profile.
 */
export default function ProfileHeader() {
  // const [valOpenLogout, setOpenLogout] = useAtom(isLogout);
  // const [listRole, setListRole] = useState(dataRole)
  const router = useRouter();
  // const [isLoading, setLoading] = useAtom(val_loading)

  // async function changingRole({ user }: { user: string }) {
  //   setLoading(true)
  //   await new Promise((r) => setTimeout(r, 1000));
  //   const c = await funChangeRole({ idUser: user })
  //   if (c.success) return window.location.href = "/dashboard", setLoading(false)
  //   setLoading(false)
  // }

  return (
    <>
      <Menu shadow="md" width={300}>
        <Menu.Target>
          <ActionIcon variant="subtle" aria-label="Settings" c={Warna.biruTua}>
            <FaCircleUser style={{ width: '80%', height: '80%' }} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push("/dashboard/profile")}>
            <Box>
              <Group>
                <HiOutlineUserCircle size="20" />
                <Text>Profile</Text>
              </Group>
            </Box>
          </Menu.Item>
          {/* {
            listRole && listRole.map((item: any, i: any) => ( */}
              <Menu.Item 
              // key={i} 
              // onClick={() => changingRole({ user: item.id })}
              >
                <Box>
                  <Group>
                    <PiUserSwitch size="20" />
                    <Text>
                      Switch to 
                      {/* {item.role} */}
                      </Text>
                  </Group>
                </Box>
              </Menu.Item>
            {/* ))
          } */}

          <Menu.Item 
          // onClick={() => setOpenLogout(true)}
          >
            <Box>
              <Group>
                <Group>
                  <AiOutlineLogout size="20" />
                  <Text color="red" >
                    Logout
                  </Text>
                </Group>
              </Group>
            </Box>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {/* <Modal
        size={"md"}
        opened={valOpenLogout}
        onClose={() => setOpenLogout(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalLogout />
      </Modal> */}
    </>
  );
}
