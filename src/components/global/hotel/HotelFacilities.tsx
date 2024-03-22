import { Grid, Typography } from "@mui/material";
import ContentWrapper from "../ContentWrapper";
import HeaderBottom from "../HeaderBottom";

const HotelFacilities = (props: {
  header: string[];
  title: string;
  facilities: string[];
}) => {
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Typography>{props.header[0]}</Typography>}
        middleComponent={<Typography>{props.header[1]}</Typography>}
        rightComponent={<Typography>{props.header[2]}</Typography>}
      />
      <Grid container direction={"row"} marginTop={8}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography variant="h3" width={"70%"}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container columnSpacing={3}>
            {props.facilities.map((facility, index) => (
              <Grid key={index} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography paddingY={3} borderTop={1}>
                  {facility}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default HotelFacilities;
