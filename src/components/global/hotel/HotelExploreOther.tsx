import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ContentWrapper from "../ContentWrapper";
import { useRouter } from "next/navigation";

import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import LocationIcon from "@/assets/icons/general/icon-location-grey.svg";

export interface IOtherHotels {
  title: string;
  location: string;
  backgroundUrl: StaticImageData;
  url: string;
}

const title = "Explore other stay";

const HotelExploreOther = (props: { otherHotels: IOtherHotels[] }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <ContentWrapper>
      <Typography width={"100%"} variant="h5" textAlign={"center"}>
        {title}
      </Typography>
      <Grid
        container
        direction={"row"}
        columnSpacing={3}
        marginTop={"100px"}
        marginBottom={6}
      >
        {props.otherHotels.map((data, index) => (
          <Grid item key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box width={"100%"} height={"700px"}>
              <Image
                src={data.backgroundUrl}
                alt={data.title}
                // width={30}
                // height={20}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>

            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"start"}
              marginTop={3}
            >
              <Typography variant="h4" width={"50%"}>
                {data.title}
              </Typography>
              <IconButton
                onClick={() => router.push(data.url)}
                sx={{ transform: "scaleX(-1)" }}
              >
                <Image
                  src={IconArrowLeft}
                  alt="arrow-left"
                  style={{ transform: "scaleX(-1)" }}
                />
              </IconButton>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              marginTop={1}
            >
              <Image src={LocationIcon} alt="location-grey" />
              <Typography color={theme.palette.CtColorScheme.grey300}>
                {data.location}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default HotelExploreOther;
