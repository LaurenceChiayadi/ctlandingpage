import { Box, Grid, Typography } from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import CTButton from "../global/CTButton";
import Image from "next/image";

import IllustrationRestingLady from "./images/illus-rest-lady.svg";

import TheStarIcon from "./images/featured_on/logo-featured-thestar-bw@2x.png";
import MoodieDavittIcon from "./images/featured_on/logo-featured-moodiedavitt-bw@2x.png";
import EdgeTVIcon from "./images/featured_on/logo-featured-theedgetv-bw@2x.png";
import ETBIcon from "./images/featured_on/logo-featured-etb-bw@2x.png";
import TV3Icon from "./images/featured_on/logo-featured-tv3-bw@2x.png";
import BernamaIcon from "./images/featured_on/logo-featured-bernama-bw@2x.png";

const contentTexts = [
  {
    text: "We ensure the best experience for our guests with our best rate guarantee, contactless services, flexible cancellation, and dedication to cleanliness.",
  },
];

const featuredOn = [
  TheStarIcon,
  MoodieDavittIcon,
  EdgeTVIcon,
  ETBIcon,
  TV3Icon,
  BernamaIcon,
];

const staticText = ["Featured On"];

const CTDedication = () => {
  const handleCommitmentClick = () => {};
  return (
    <ContentWrapper>
      <Box display={"flex"} flexDirection={"column"} marginY={4} width={"50%"}>
        <Typography variant="h2">{contentTexts[0].text}</Typography>
      </Box>
      <Box marginTop={10} marginBottom={"200px"}>
        <CTButton
          onClick={handleCommitmentClick}
          text="Our Commitment"
          variant="secondary"
        />
      </Box>
      <Box display={"flex"} alignItems={"end"}>
        <Image
          src={IllustrationRestingLady}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
          }}
        />
      </Box>
      <Grid
        container
        borderTop={1}
        borderBottom={1}
        paddingY={5}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Typography>{staticText[0]}</Typography>
        </Grid>
        {featuredOn.map((icon, index) => (
          <Grid item key={index} xs={6} sm={6} md={1.5} lg={1.5} xl={1.5}>
            <Image
              src={icon}
              alt={"featured-on"}
              style={{
                height: "50px",
                width: "80px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default CTDedication;
