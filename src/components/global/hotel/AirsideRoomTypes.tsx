import { Grid, Stack, Typography, duration } from "@mui/material";
import ContentWrapper from "../ContentWrapper";
import HeaderBottom from "../HeaderBottom";
import { featuresEnum } from "@/constant/Enums";
import { DurationIcons } from "@/constant/Icons";
import Image from "next/image";

const header = ["02", "Room Type: ", "2"];

const headerRight = [];

const title = "Room Type";

const timeIcons = [
  featuresEnum.OneHourStay,
  featuresEnum.ThreeHourStay,
  featuresEnum.SixHourStay,
  featuresEnum.TwelveHourStay,
];

const AirsideRoomTypes = () => {
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Typography>{header[0]}</Typography>}
        middleComponent={<Typography>{header[1]}</Typography>}
        rightComponent={
          <Stack direction={"row"} justifyContent={"end"} marginBottom={1}>
            {timeIcons.map((duration, index) => {
              return (
                DurationIcons.duration(duration) !== "" && (
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography marginRight={"3px"}>{duration}</Typography>
                    <Image
                      src={DurationIcons.duration(duration)}
                      alt="feature"
                      width={20}
                      height={20}
                    />
                    {index !== timeIcons.length - 1 && (
                      <Typography marginX={1}>/</Typography>
                    )}
                  </Stack>
                )
              );
            })}
          </Stack>
        }
      />
      <Grid container direction={"row"} marginTop={8}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography variant="h3" width={"70%"}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};
export default AirsideRoomTypes;
