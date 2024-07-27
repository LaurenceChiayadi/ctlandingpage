import { Box, Typography, useTheme } from "@mui/material";

export default function Custom404() {
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant="h1" marginTop={2}>
        404
      </Typography>
      <Typography variant="h5" color={"#87888B"} marginTop={1}>
        Page Not Found.
      </Typography>
      <Typography color={"#87888B"} marginTop={2}>
        Oops, the page you&apos;re looking for isn&apos;t here.
      </Typography>
    </Box>
  );
}
