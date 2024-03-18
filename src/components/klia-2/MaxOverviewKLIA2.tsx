import { Box, Grid, IconButton, Typography } from "@mui/material";
import HeaderBottom from "../global/HeaderBottom";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";

import MaxImage from "./images/klia2-MAX@2x.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import IllusSVG from "./images/icon-standalone-book.svg";

const headerContent = ["02", "/03", "Public Area"];

const textContent = [
  "MAX",
  "Experience a premium stay at the airport with CapsuleTransit MAX. Available for a minimum of 6 hours for a complete stay or 3 hours for a short hangout at the lounge.",
  "/",
];

const MaxOverviewKLIA2 = () => {
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
            src={MaxImage}
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
              width={"100%"}
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
              <Image src={IllusSVG} alt="capsult-transit-newly-launched" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default MaxOverviewKLIA2;
