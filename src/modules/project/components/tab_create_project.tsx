"use client";
import { Box, Tabs } from "@mantine/core";
import React from "react";
import FormFormal from "./form_formal";
import FormNonFormal from "./form_non_formal";
import { Warna } from "@/modules/_global/fun/warna";

/**
 * Fungsi untuk menampilkan tab create project.
 * @returns {component} menampilakn tab create project.
 */
export default function TabCreateProject() {
  return (
    <>
      <Box pt={10}>
        <Tabs defaultValue={"formal"} variant="pills" radius="xl" color={Warna.biruTua} >
          <Tabs.List>
            <Tabs.Tab value="formal" fw={700}>
              FORM FORMAL
            </Tabs.Tab>
            <Tabs.Tab value="no_formal" fw={700}>
              NON FORM FORMAL
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="formal">
            <Box pt={10}>
              <FormFormal />
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="no_formal">
            <Box pt={10}>
              <FormNonFormal />
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  );
}

