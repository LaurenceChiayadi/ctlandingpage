import { Box, Grid, IconButton, Typography } from "@mui/material";
import HeaderBottom from "../global/HeaderBottom";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";

import LandsideImage from "./images/klia2-landside@2x.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";

const headerContent = ["02", "/03", "Public Area"];

const textContent = [
  "Landside",
  "Situated at the Gateway@klia2 Mall, linked to KLIA Terminal 2's Arrival Hall, CapsuleTransit Landside outlet offers rooms for 1 to 3 guests, available to book for a minimum of 3 hours. Each room includes public bathrooms and locker services.",
  "/",
];

const LandsideOverviewKLIA2 = () => {
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
            src={LandsideImage}
            alt={"landside  -image"}
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

export default LandsideOverviewKLIA2;
