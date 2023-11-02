"use client";
import React, { useRef, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Center,
    Divider,
    Grid,
    Group,
    Modal,
    Stack,
    Text,
    TextInput,
    rem,
} from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import { warn } from "console";
import { Warna } from "@/modules/_global/fun/warna";
import { isModalProfile } from "../val/isModalProfile";
import ModalProfile from "../components/modal_profile";


/**
 * Fungsi untuk menampilkan edit profile.
 * @returns {component} menampilakn edit profile.
 */
export default function ViewEdit() {
    const router = useRouter();
    //   const [hasilGambar, setHasilGambar] = useState(
    //     `/img/user/${data.idImage}.${data.extension}`
    //   );
    const [valOpenProfile, setOpenProfile] = useAtom(isModalProfile);
    //   const [dataUser, setDataUser] = useState(data);
    //   const [loading, setLoading] = useState(false);
    //   const openRef = useRef<() => void>(null);

    //   function validasiProfile() {
    //     if (Object.values(dataUser).includes(""))
    //       return toast("The form cannot be empty", { theme: "dark" });
    //     setOpenProfile(true);
    //   }
    return (
        <>
            <Box pt={20}>
                <Box
                    style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 30,
                    }}
                    pt={40}
                >
                    <Text fw={700} fz={20} c={Warna.biruTua} pb={30}>
                        Personal Data
                    </Text>
                    <Center>
                        <Avatar
                            size={130}
                            radius={100}
                            //   src={hasilGambar}
                            //   alt={dataUser.name}
                            color={Warna.biruTua}
                            bg={"white"}
                        />
                    </Center>
                    <Center pt={10}>
                        {/* <Dropzone
              openRef={openRef}
              loading={loading}
              onDrop={async (files) => {
                setLoading(true);
                if (!files || _.isEmpty(files))
                  return toast("tidak ada yang dipilih");
                const fd = new FormData();
                fd.append("file", files[0]);

                const apa = await funUploadImg(fd);
                if (apa.success) {
                  setHasilGambar(
                    `/img/user/${apa.data.id}.${apa.data.extension}`
                  );
                  funUpdProfileImg({ id: dataUser.id, img: apa.data.id });
                  await funUserLog({activity: "EDIT", desc: "User Edit Image Profile"})
                  return setLoading(false), toast("Success", { theme: "dark" });
                }
              }}
              onReject={(files) => console.log("rejected files", files)}
              // maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              activateOnClick={false}
              styles={{ inner: { pointerEvents: "all" } }}
              sx={(theme) => ({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: 0,
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],

                "&[data-accept]": {
                  color: theme.white,
                  backgroundColor: theme.colors.blue[6],
                },

                "&[data-reject]": {
                  color: theme.white,
                  backgroundColor: theme.colors.red[6],
                },
              })}
            > */}
                        <Group justify="center" pt={10}>
                            <Button
                                color={Warna.biruTua}
                                radius="xl"
                            //   onClick={() => openRef.current?.()}
                            >
                                Edit Image Profile
                            </Button>
                        </Group>
                        {/* </Dropzone> */}
                    </Center>
                    <Box pt={40}>
                        <Grid>
                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                <Stack pt={20}>
                                    <Box>
                                        <Text fw={700} fz={14}>
                                            NAME
                                        </Text>
                                        <TextInput
                                            placeholder="Name"
                                            //   value={dataUser.name}
                                            radius={20}
                                        //   onChange={(val) => {
                                        //     setDataUser({
                                        //       ...dataUser,
                                        //       name: val.target.value,
                                        //     });
                                        //   }}
                                        />
                                    </Box>
                                    <Box pt={10}>
                                        <Text fw={700} fz={14}>
                                            EMAIL
                                        </Text>
                                        <TextInput
                                            placeholder="Email"
                                            radius={20}
                                        //   value={dataUser.email}
                                        //   onChange={(val) => {
                                        //     setDataUser({
                                        //       ...dataUser,
                                        //       email: val.target.value,
                                        //     });
                                        //   }}
                                        />
                                    </Box>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                <Stack pt={20}>
                                    <Box>
                                        <Text fw={700} fz={14}>
                                            NO. PHONE
                                        </Text>
                                        <TextInput
                                            placeholder="phone number"
                                            radius={20}
                                        //   value={dataUser.phone}
                                        //   onChange={(val) => {
                                        //     setDataUser({
                                        //       ...dataUser,
                                        //       phone: val.target.value,
                                        //     });
                                        //   }}
                                        />
                                    </Box>
                                    <Box pt={10}>
                                        <Text fw={700} fz={14}>
                                            ADDRESS
                                        </Text>
                                        <TextInput
                                            placeholder="Address"
                                            radius={20}
                                        //   value={dataUser.address}
                                        //   onChange={(val) => {
                                        //     setDataUser({
                                        //       ...dataUser,
                                        //       address: val.target.value,
                                        //     });
                                        //   }}
                                        />
                                    </Box>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                        <Grid pt={30}>
                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                <Button
                                    fullWidth
                                    variant="outline"
                                    color={Warna.biruTua}
                                    radius="xl"
                                    onClick={() => router.push("/dashboard/profile")}
                                >
                                    CANCEL
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                <Button
                                    radius={"xl"}
                                    color={Warna.biruTua}
                                    //   onClick={() => {
                                    //     validasiProfile();
                                    //   }}
                                    onClick={() => setOpenProfile(true)}
                                    fullWidth
                                >
                                    SAVE
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Modal
                size={"md"}
                opened={valOpenProfile}
                onClose={() => setOpenProfile(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalProfile />
            </Modal>
        </>
    );
}
