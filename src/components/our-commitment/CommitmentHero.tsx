import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import IllustrationCommitment from "./images/illus-commitment.svg";

const textContent = [
  "Our",
  "Commitment",
  "Our Commitment to Guest Satisfaction",
];

const CommitmentHero = () => {
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
          src={IllustrationCommitment}
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

export default CommitmentHero;
