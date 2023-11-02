"use client";
import { Warna } from "@/modules/_global/fun/warna";
import { ButtonBack } from "@/modules/_global/layout/components/button_back";
import { Box, Button, Container, Image, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";


/**
 * Fungsi untuk menampilkan view scan barcode.
 * @returns {component} menampilakn view scan barcode.
 */
export default function ViewScanBarcode() {
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <Box>
          <Text fz={24} fw={"bold"} c={Warna.biruTua}>SCAN BARCODE
          </Text>
        </Box>
      </Stack>
      <Box pt={30}>
        <Box
          style={{
            backgroundColor: Warna.biruTua,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Container size="xs" px="xs">
            <Box>
              <Box
                style={{

                  border: "1px solid #FFFFFF",
                  padding: 20,
                  borderRadius: 20,
                }}
              >
                <Image
                  src="/img/scan.png"
                  alt="barcode"
                  maw={200}
                  mx="auto"
                />
              </Box>
              <Box pt={10}>
                <Button
                  radius={10}
                  fullWidth
                  bg={"white"}
                  c={"dark"}
                  onClick={() =>
                    router.push("/dashboard/assets/scan/history-scan")
                  }
                >
                  SCAN
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}


