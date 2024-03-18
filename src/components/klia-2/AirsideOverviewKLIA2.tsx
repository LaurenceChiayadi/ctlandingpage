import { Box, Grid, IconButton, Typography } from "@mui/material";
import HeaderBottom from "../global/HeaderBottom";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";

import AirsideImage from "./images/klia2-airside@2x.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";

const headerContent = ["01", "/03", "Restricted Area"];

const textContent = [
  "Airside",
  "Located in the boarding area, closest to the flights, CapsuleTransit Airside outlet offers single pod rooms available to book for a minimum of 1 hour. Each room includes public bathrooms and locker services",
  "/",
];

const AirsideOverviewKLIA2 = () => {
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Typography>{headerContent[0]}</Typography>}
        middleComponent={<Typography>{headerContent[1]}</Typography>}
        rightComponent={<Typography>{headerContent[2]}</Typography>}
      />
      <Grid
        container
        direction={"row-reverse"}
        alignItems={"center"}
        marginTop={5}
      >
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Image
            src={AirsideImage}
            alt={"airside-image"}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            width={"100%"}
            paddingRight={5}
          >
            <Typography variant="body2">{textContent[0]}</Typography>
            <Typography width={"70%"}>{textContent[1]}</Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"start"}
              marginTop={4}
            >
              <IconButton sx={{ transform: "scaleX(-1)" }}>
                <Image
                  src={IconArrowLeft}
                  alt="arrow-left"
                  style={{ transform: "scaleX(-1)" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default AirsideOverviewKLIA2;
