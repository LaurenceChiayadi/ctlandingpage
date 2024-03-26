import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import NewsRoomHeroImage from "./images/hero-bg-newswroom.jpg";

const textContent = ["Newsroom", "Stay", "Updated"];

const NewsRoomHero = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "relative",
        height: "65vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={NewsRoomHeroImage}
        alt="NewsRoomHero"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      />
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Typography variant={"h2"} color={theme.palette.CtColorScheme.white}>
          {textContent[0]}
        </Typography>
        <div
          style={{
            display: "inline-block",
          }}
        >
          <Typography
            variant="h6"
            display="inline"
            bgcolor={theme.palette.primary.main}
            padding="5px"
          >
            {textContent[1]} <b>{textContent[2]}</b>
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default NewsRoomHero;
