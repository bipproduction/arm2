import { Alert, Box, Button, Flex, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { isModalQuotation } from "../val/isModalQuotation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

/**
 * Fungsi untuk menampilkan modal quotation view.
 * @returns {component} menampilakn modal quotation view.
 */
export default function ModalQuotationView({ closeQuotation }: any) {
  const router = useRouter();
  const [openQuotation, setOpenQuotation] = useAtom(isModalQuotation);
  function createQuotation() {
    toast("Success", { theme: "dark" });
    router.push("/dashboard/quotation");
    setOpenQuotation(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO CREATE QUOTATION?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="rgba(222, 11, 11, 1)"
                variant="filled"
                fullWidth
                onClick={() => setOpenQuotation(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                variant="filled"
                color="rgba(11, 140, 76, 1)"
                fullWidth
                onClick={createQuotation}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
