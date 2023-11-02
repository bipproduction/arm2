"use client"
import { Warna } from '@/modules/_global/fun/warna';
import { Box, Button, Flex, Group, Text, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

/**
 * Fungsi untuk menampilkan view login.
 * @returns {component} menampilakn view login.
 */
export default function ViewLogin() {
  const focusTrapRef = useFocusTrap();
  const router = useRouter()
  return (
    <>
      <Box ref={focusTrapRef}>
        <Flex
          justify={"center"}
          align={"center"}
          direction={"column"}
          h={"100vh"}
        >
          <Box
            style={{
              backgroundColor: "#5985AD",
              padding: 30,
              borderRadius: 10,
            }}
            w={{ base: 300, sm: 400 }}
          >
            <Group justify="center">
              <Text fw={700} fz={28} color="white">
                LOGIN
              </Text>
            </Group>
            <TextInput placeholder="62" mt={30} radius={"lg"}
            // onChange={(val) => setInpTlp(val.target.value)} 
            />
            <Button
              mt={30}
              radius={"lg"}
              c={Warna.biruTua}
              bg={"white"}
              fullWidth
              // onClick={() => {
              //   sendOTP()
              // }}
              onClick={()=> router.push("/varification")}
            >
              Login
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

