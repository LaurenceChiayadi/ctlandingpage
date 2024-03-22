import { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import HeaderTop from "../HeaderTop";
import Image, { StaticImageData } from "next/image";
import ContentWrapper from "../ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";

const HotelGallery = (props: {
  textContents: string[];
  images: StaticImageData[];
}) => {
  const [imageDisplay, setImageDisplay] = useState<string>(
    props.textContents[2]
  );
  return (
    <ContentWrapper>
      <HeaderTop title={props.textContents[0]}>
        <Button
          onClick={() => setImageDisplay(props.textContents[1])}
          sx={{ color: imageDisplay === props.textContents[2] ? "black" : "" }}
        >
          {props.textContents[1]}
          {imageDisplay === props.textContents[2] && (
            <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
          )}
        </Button>
        <Typography variant="h6" color={"grey"}>
          /
        </Typography>
        <Button
          onClick={() => setImageDisplay(props.textContents[2])}
          sx={{ color: imageDisplay === props.textContents[1] ? "black" : "" }}
        >
          {props.textContents[2]}
          {imageDisplay === props.textContents[1] && (
            <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
          )}
        </Button>
      </HeaderTop>
      {imageDisplay === props.textContents[1] ? (
        <Grid container spacing={4}>
          {props.images.map((image, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              height={"400px"}
            >
              <Box
                display={"flex"}
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                overflow={"hidden"}
              >
                <Image
                  src={image}
                  alt={`airside-${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack
          direction={"row"}
          maxWidth={"100%"}
          spacing={1}
          sx={{ overflowX: "auto", overflowY: "hidden" }}
        >
          {props.images.map((image, index) => (
            <Box key={index} width={"100%"} height={"80vh"}>
              <Image
                src={image}
                alt={`airside-${index}`}
                style={{
                  objectFit: "cover",
                  width: "30vw",
                  height: "100%",
                }}
              />
            </Box>
          ))}
        </Stack>
      )}
    </ContentWrapper>
  );
};

export default HotelGallery;
