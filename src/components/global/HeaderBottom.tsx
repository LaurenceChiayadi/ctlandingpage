import { Box, Grid } from "@mui/material";

const HeaderBottom = (props: {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}) => {
  return (
    <Grid container borderTop={1} height={"20px"} paddingY={1}>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={"20px"}>
        {props.leftComponent}
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={"20px"}>
        {props.middleComponent}
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        height={"20px"}
        justifyContent={"end"}
      >
        {props.rightComponent}
      </Grid>
    </Grid>
  );
};

export default HeaderBottom;
