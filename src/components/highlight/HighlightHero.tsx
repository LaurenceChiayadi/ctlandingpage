import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import IllustrationHighlight from "./images/illus-highlight.svg";

const textContent = [
  "Capsule",
  " Highlight",
  "Where Convenience Meets Flexibility",
];

const HighlightHero = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"70vh"}
        justifyContent={"center"}
        paddingX={7}
        position={"relative"}
      >
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
            {textContent[0]} <b>{textContent[1]}</b>
          </Typography>
        </div>
        <Typography variant="h1" maxWidth={"1000px"}>
          {textContent[2]}
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"end"}>
        <Image
          src={IllustrationHighlight}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
          }}
        />
      </Box>
    </>
  );
};

export default HighlightHero;
