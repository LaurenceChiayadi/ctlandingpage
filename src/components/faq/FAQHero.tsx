import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const textContent = ["Your Doubt, We Answer", "Frequently Asked Question"];

const FAQHero = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? <DesktopView /> : <HandheldView />;
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "65vh",
      }}
    >
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <div
          style={{
            display: "inline-block",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            display="inline"
            bgcolor={theme.palette.primary.main}
            padding="5px"
          >
            {textContent[1]} <b>{textContent[2]}</b>
          </Typography>
        </div>
        <Typography variant={"h2"} color={"black"}>
          {textContent[0]}
        </Typography>
      </Stack>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "50vh",
      }}
    >
      <div
        style={{
          display: "inline-block",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          display="inline"
          bgcolor={theme.palette.primary.main}
          padding="5px"
        >
          {textContent[1]}
        </Typography>
      </div>
      <Typography variant={"h2"} color={"black"}>
        {textContent[0]}
      </Typography>
    </Box>
  );
};

export default FAQHero;
