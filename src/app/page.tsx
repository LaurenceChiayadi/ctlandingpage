"use client";

import Image from "next/image";
import {
  Box,
  Button,
  ButtonBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <Box
        display={"flex"}
        width={"100%"}
        height={"80px"}
        justifyContent={"center"}
        alignContent={"center"}
        padding={2}
      >
        <ButtonBase
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack flexDirection={"row"} height={"100%"}>
            <Box
              width={"20px"}
              bgcolor={theme.palette.primary.main}
              sx={{
                clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
              }}
            />
            <Box
              display={"flex"}
              width={"100%"}
              height={"100%"}
              bgcolor={theme.palette.primary.main}
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={1}
            >
              <Typography variant="button">Book Your Stay</Typography>
            </Box>
            <Box
              width={"20px"}
              bgcolor={theme.palette.primary.main}
              sx={{
                clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)",
              }}
            />
          </Stack>
        </ButtonBase>
      </Box>
    </main>
  );
}
