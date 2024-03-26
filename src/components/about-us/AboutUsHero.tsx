import { Box, Typography, useTheme } from "@mui/material";

const textContent = [
  "About",
  " Us",
  "We deliver convenience for globe-trotters that are travelling near and far.",
];

const AboutUsHero = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"60vh"}
      justifyContent={"end"}
      paddingX={7}
    >
      <div
        style={{
          display: "inline-block",
        }}
      >
        <Typography
          variant="h6"
          display="inline"
          bgcolor={theme.palette.primary.main}
          padding="5px"
        >
          {textContent[0]} <b>{textContent[1]}</b>
        </Typography>
      </div>
      <Typography variant="h1" maxWidth={"1000px"}>
        {textContent[2]}
      </Typography>
    </Box>
  );
};

export default AboutUsHero;
