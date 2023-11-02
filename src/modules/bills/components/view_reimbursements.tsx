'use client'
import { Warna } from "@/modules/_global/fun/warna";
import { ActionIcon, Box, Flex, Grid, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { BsFillArrowRightCircleFill } from "react-icons/bs"


/**
 * Fungsi untuk menampilkan reimbursement.
 * @returns {component} menampilakn reimbursement.
 */
export function ViewReimbursements() {
  const router = useRouter();
  return (
    <>
      <Box >
        <Box
          style={{
            backgroundColor: Warna.biruTua,
            borderRadius: 10,
          }}
          p={20}
        >
          <Grid>
            <Grid.Col span={{ md: 6, lg: 6 }}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  // height: "100%"
                }}
              >
                <Box pt={50}>
                  <Text ta={"center"} fz={20} fw={700}>
                    REIMBURSEMENTS
                  </Text>
                  <Text ta={"center"} fz={50} fw={700}>
                    80
                  </Text>
                </Box>
                <Box>
                  <Group justify="flex-end" pt={22} pb={10} pr={20}>
                    <Flex style={{ cursor: "pointer" }} onClick={() => router.push('/dashboard/reimbursement')}>
                      <Text fz={10} c="dark" pt={5}>
                        Detail Reimbursements
                      </Text>
                      <ActionIcon color="dark" variant="subtle">
                        <BsFillArrowRightCircleFill />
                      </ActionIcon>
                    </Flex>
                  </Group>
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ md: 3, lg: 3 }}>
              <Box
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  APPROVED
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  APPROVED
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ md: 3, lg: 3 }}>
              <Box
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  DECLINED
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  PAID
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box >
    </>
  )
}

