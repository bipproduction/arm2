"use client";
import { Warna } from "@/modules/_global/fun/warna";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  Group,
  Image,
  NumberInput,
  NumberInputHandlers,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";


/**
 * Fungsi untuk menampilkan list cart.
 * @returns {component} menampilakn list cart.
 */
function ListCart() {
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState<number | "">(0);
  const handlers = useRef<NumberInputHandlers>();
  const router = useRouter()
  return (
    <>
      <Box >
        <Box pb={10}>
          <Checkbox label="All" />
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Box>
            <Checkbox />
            <Grid>
              <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Group justify="center">
                  <Image
                    style={{
                      cursor: "pointer"
                    }}
                    src={"/img/meja.jpeg"}
                    maw={"50%"} mx="lg" alt="a"
                  />

                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                <Group justify="space-between" p={20}>
                <Box>
                  <Text fw={"bold"}>
                    ITEM
                  </Text>
                  <Text fz={13}>
                    Harmony 2
                  </Text>
                  <Text fz={13}>
                    Display
                  </Text>
                  <Box pt={10}>
                    <Group style={{ cursor: "pointer" }} onClick={toggle}>
                      <Text fw={"bold"}>
                        NOTE
                      </Text>
                      <MdOutlineNoteAlt />
                    </Group>
                  </Box>
                  <Collapse in={opened}>
                    <Textarea />
                  </Collapse>
                </Box>
                <Box>
                  <Group justify="center">
                    <ActionIcon
                      size={35}
                      variant="default"
                      onClick={() => handlers.current?.decrement()}
                    >
                      –
                    </ActionIcon>
                    <NumberInput
                      hideControls
                      handlersRef={handlers}
                      max={100}
                      min={1}
                      step={1}
                      defaultValue={1}
                      styles={{ input: { width: rem(54), textAlign: "center" } }}
                    />

                    <ActionIcon
                      size={35}
                      variant="default"
                      onClick={() => handlers.current?.increment()}
                    >
                      +
                    </ActionIcon>
                  </Group>
                </Box>
                </Group>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box >
    </>
  );
}

export default ListCart;

