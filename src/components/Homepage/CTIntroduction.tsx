import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import CTButton from "../global/CTButton";
import Image from "next/image";

import IllustrationCloudMan from "./images/illus-travel-guy.svg";

const textContents = [
  { text: "Welcome to" },
  { text: "Capsule Transit Hotel" },
  {
    text: "Located at Kuala Lumpur International Airport, a place with all you need for",
  },
  { text: "a long layover." },
  { text: "STAY AT KLIA TERMINAL 1" },
  { text: "STAY AT KLIA TERMINAL 2" },
];

const gridContents = [
  { title: "Best Locations", description: "Lorem Ipsum" },
  { title: "Flexible Check-in Time", description: "Lorem Ipsum" },
  { title: "Book by the Hours", description: "Lorem Ipsum" },
  { title: "Luggage Storage Service", description: "Lorem Ipsum" },
];

const CTIntroduction = () => {
  const theme = useTheme();

  const handleKLIA1ButtonPress = () => {};
  const handleKLIA2ButtonPress = () => {};
  const handleHighlightButtonPress = () => {};
  return (
    <ContentWrapper>
      <Stack
        direction={"row"}
        padding={1}
        bgcolor={theme.palette.CtColorScheme.neon200}
        spacing={1}
        marginY={2}
      >
        <Typography variant="h5" fontWeight={500}>
          {textContents[0].text}
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {textContents[1].text}
        </Typography>
      </Stack>
      <Box display={"flex"} flexDirection={"column"} marginY={4}>
        <Typography variant="body2" width={"48vw"}>
          {textContents[2].text}
        </Typography>
        <Typography variant="body2" color={theme.palette.CtColorScheme.neon300}>
          {textContents[3].text}
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        marginTop={10}
        marginBottom={"200px"}
      >
        <CTButton
          onClick={handleKLIA1ButtonPress}
          text={textContents[4].text}
          variant="secondary"
        />
        <CTButton
          onClick={handleKLIA2ButtonPress}
          text={textContents[5].text}
          variant="secondary"
        />
      </Stack>
      <Box
        display={"flex"}
        alignItems={"end"}
        // position={"absolute"}
      >
        <Image
          src={IllustrationCloudMan}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
            // transform: "scale(1)",
            // marginRight: 30,
          }}
        />
      </Box>
      <Grid container borderTop={1} direction={"row"}>
        {gridContents.map((content, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              paddingY={4}
              borderBottom={1}
              marginRight={index % 2 === 0 ? 5 : 0}
            >
              <Typography variant="h4">{content.title}</Typography>
              <Typography variant="h6">{content.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box marginY={10}>
        <CTButton
          onClick={handleHighlightButtonPress}
          text="SEE HIGHLIGHT DETAIL"
          variant="secondary"
        />
      </Box>
    </ContentWrapper>
  );
};

export default CTIntroduction;
