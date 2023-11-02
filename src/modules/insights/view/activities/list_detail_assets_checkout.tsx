'use client'
import { Warna } from "@/modules/_global/fun/warna"
import { ButtonBack } from "@/modules/_global/layout/components/button_back"
import { PageHeader } from "@/modules/_global/layout/components/page_header"
import { Box, Divider, Group, Image, Stack, Text } from "@mantine/core"


/**
 * Fungsi untuk menampilkan list detail assets checkout.
 * @returns {component} menampilakn list detail assets checkout.
 */
export function ListDetailAssetsCheckout({ id }: { id: string }) {
  let status
  if (id == "123") status = "DELIVERED"
  if (id == "111") status = "DECLINED"
  if (id == "222") status = "CANCELED"
  if (id == "333") status = "REVOKED"

  return (
    <>
      <Stack>
        <ButtonBack />
        <PageHeader title={"ASSETS CHECKOUT"} date="23 February 2023" number={id} status={status} />
      </Stack>
      <Box pt={20}>
        <Box pt={20}>
          <Box
            style={{
              backgroundColor: "white",
              padding: 5,
              borderRadius: 5,
            }}
            px={20}
            mb={10}
            py={20}
          >
            <Divider
              mb={5}
              label={
                <Text fw={700} fz={17} c={Warna.biruTua}>
                  Assets
                </Text>
              }
              labelPosition="left"
              size="md"
              color={Warna.biruTua}
            />
            <Box pt={20}>
              <Box
                style={{
                  backgroundColor: Warna.biruTua,
                  padding: 20,
                  borderRadius: 10,
                }}
                my={5}
              >
                <Group justify="space-between" mb={10}>
                  <Group>
                    <Box>
                      <Image
                        src={"/img/meja.jpeg"}
                        radius={10}
                        maw={{ base: 100, sm: 200 }}
                        mx="auto"
                        alt="img"
                      />
                    </Box>
                    <Box>
                      <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                        Item
                      </Text>
                      <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                        Harmony 2
                      </Text>
                      <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                        Display
                      </Text>
                    </Box>
                  </Group>
                  <Group>
                    <Box>
                      <Text
                        fw={700}
                        fz={{ sm: 40, base: 20 }}
                        pr={40}
                        color="white"
                      >
                        x2
                      </Text>
                    </Box>
                  </Group>
                </Group>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

