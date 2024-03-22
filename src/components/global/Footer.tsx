import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

//To Change to New Image
import CTIcon from "@/assets/icons/general/LogoWhite.svg";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import ArrowTopRight from "@/assets/icons/general/icon-arrow-top-right-primary.svg";

const textContent = [
  {
    title: "Stay at KLIA Terminal 1",
    options: [{ name: "Sleep Lounge", link: "" }],
  },
  {
    title: "Stay at KLIA Terminal 2",
    options: [
      { name: "Airside", link: "" },
      { name: "Landside", link: "" },
      { name: "MAX", link: "" },
      { name: "Divider", link: "" },
      { name: "Overview", link: "" },
    ],
  },
  {
    title: "DISCOVER",
    options: [
      { name: "About Us", link: "" },
      { name: "Capsule Highlight", link: "" },
      { name: "Out Commitment", link: "" },
      { name: "Newsroom", link: "" },
    ],
  },
  {
    title: "REACH US",
    options: [
      { name: "Contact", link: "" },
      { name: "Career", link: "" },
      { name: "Our Instagram", link: "" },
    ],
  },
  {
    title: "Book Now",
    options: [],
  },
  {
    title:
      "© 2024 40FT Container Sdn Bhd & Capsule Transit Sdn Bhd. All rights reserved. / Terms & Privacy",
    options: [
      { name: "FAQ", link: "" },
      { name: "Divider", link: "" },
      { name: "Stay Protocol", link: "" },
      { name: "Divider", link: "" },
      { name: "Best Rate Guarantee", link: "" },
    ],
  },
];

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      bgcolor={theme.palette.CtColorScheme.blue800}
      paddingX={7}
      paddingY={8}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ShortcutSection />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <CTNewsSection />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack
            direction={"column"}
            height={"100%"}
            justifyContent={"space-between"}
          >
            <Button
              sx={{
                padding: 0,
                justifyContent: "flex-start",
                color: "white",
              }}
            >
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h1" color={"primary"}>
                  {textContent[4].title}
                </Typography>
                <Image src={ArrowTopRight} alt="CT-Right-Up" />
              </Stack>
            </Button>
            <Stack direction={"column"} spacing={4}>
              <Typography
                variant="button"
                color={theme.palette.CtColorScheme.grey100}
                width={"85%"}
                fontWeight={400}
              >
                {textContent[5].title}
              </Typography>
              <Stack direction={"row"} width={"100%"} height={"40px"}>
                {textContent[5].options.map((option, index) => {
                  return option.name !== "Divider" ? (
                    <Button
                      key={index}
                      sx={{ color: "white", paddingX: 0, marginRight: 2 }}
                    >
                      {option.name}
                    </Button>
                  ) : (
                    <Divider
                      key={index}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        backgroundColor: theme.palette.CtColorScheme.neon200,
                        marginRight: 2,
                      }}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

const ShortcutSection = () => {
  const theme = useTheme();
  return (
    <Stack direction={"column"} spacing={15}>
      <Stack
        direction={"column"}
        width={"100%"}
        spacing={6}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h4" color={theme.palette.CtColorScheme.neon200}>
            {textContent[0].title}
          </Typography>
          <Stack direction={"row"} width={"100%"}>
            {textContent[0].options.map((option, index) => {
              return option.name !== "Divider" ? (
                <Button key={index} sx={{ color: "white", paddingX: 0 }}>
                  {option.name}
                </Button>
              ) : (
                <Divider key={index} />
              );
            })}
          </Stack>
        </Stack>
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h4" color={theme.palette.CtColorScheme.neon200}>
            {textContent[1].title}
          </Typography>
          <Stack direction={"row"} width={"100%"}>
            {textContent[1].options.map((option, index) => {
              return option.name !== "Divider" ? (
                <Button key={index} sx={{ color: "white", paddingX: 0 }}>
                  {option.name}
                </Button>
              ) : (
                <Divider
                  key={index}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    backgroundColor: theme.palette.CtColorScheme.neon200,
                    marginRight: 2,
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
      <Image src={CTIcon} alt={"ct-icon"} />
    </Stack>
  );
};

const CTNewsSection = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} width={"100%"} height={"100%"} spacing={5}>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          backgroundColor: theme.palette.CtColorScheme.neon200,
        }}
      />
      <Stack direction={"column"} justifyContent={"space-between"}>
        <Stack direction={"column"} spacing={1.5}>
          <Typography variant="button" color={"primary"}>
            {textContent[2].title}
          </Typography>
          {textContent[2].options.map((option, index) => (
            <Button
              key={index}
              sx={{
                padding: 0,
                justifyContent: "flex-start",
                color: "white",
              }}
            >
              {option.name}
            </Button>
          ))}
        </Stack>
        <Stack direction={"column"} spacing={1.5}>
          <Typography variant="button" color={"primary"}>
            {textContent[3].title}
          </Typography>
          {textContent[3].options.map((option, index) => (
            <Button
              key={index}
              sx={{
                padding: 0,
                justifyContent: "flex-start",
                color: "white",
              }}
            >
              {option.name}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
