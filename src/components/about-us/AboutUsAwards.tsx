import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";

import AgodaAwards from "./images/awards/logo-award-agoda.png";
import LeedAwards from "./images/awards/logo-award-leed.png";
import TravelokaAwards from "./images/awards/logo-award-traveloka.png";
import Recognition from "./images/awards/logo-recog-nqa.png";
import Image from "next/image";

const content = {
  title: "Awards and Recognition",
  awards: [
    { image: TravelokaAwards, title: "Traveloka Hotel Awards 2019" },
    { image: AgodaAwards, title: "2016 Agoda's Gold Circle Awards" },
    { image: LeedAwards, title: "LEED Silver Certification in Green Building" },
    { image: Recognition, title: "NQA Certified Quality Management" },
  ],
};

const AboutUsAwards = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <ContentWrapper>
      <Grid
        container
        borderTop={1}
        paddingY={4}
        marginBottom={4}
        rowSpacing={4}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display={"flex"}
            height={"100%"}
            justifyContent={isHandheldDevice ? "center" : "start"}
            alignItems={"center"}
          >
            <Typography fontSize={"20px"}>{content.title}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container justifyContent={"space-between"} spacing={3}>
            {content.awards.map((award, index) => (
              <Grid key={index} item xs={6} sm={6} md={6} lg={3} xl={3}>
                <Stack
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={3}
                  height={"100%"}
                >
                  <Image src={award.image} alt={award.title} />
                  <Typography
                    variant="caption"
                    color={theme.palette.CtColorScheme.grey400}
                    textAlign={"center"}
                    width={"200px"}
                  >
                    {award.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default AboutUsAwards;
