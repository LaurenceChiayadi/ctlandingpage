import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

//To Change to New Image
import CTIcon from "@/assets/icons/general/LogoWhite.svg";
import CTIconPrimary from "@/assets/icons/general/LogoPrimary.svg";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import ArrowTopRight from "@/assets/icons/general/icon-arrow-top-right-primary.svg";
import { useRouter } from "next/navigation";

const textContent = [
  {
    title: "Stay at KLIA Terminal 1",
    options: [{ name: "Sleep Lounge", link: "/klia-1/sleep-lounge" }],
  },
  {
    title: "Stay at KLIA Terminal 2",
    options: [
      { name: "Airside", link: "/klia-2/airside" },
      { name: "Landside", link: "/klia-2/landside" },
      { name: "MAX", link: "" },
      { name: "Divider", link: "" },
      { name: "Overview", link: "/klia-2" },
    ],
  },
  {
    title: "DISCOVER",
    options: [
      { name: "About Us", link: "/about-us" },
      { name: "Capsule Highlight", link: "/highlight" },
      { name: "Out Commitment", link: "/our-commitment" },
      { name: "Newsroom", link: "/news" },
      { name: "FAQ", link: "/faq" },
      { name: "CSR", link: "/csr" },
    ],
  },
  {
    title: "REACH US",
    options: [
      { name: "Contact", link: "/contact-us" },
      { name: "Career", link: "/career" },
      {
        name: "Our Instagram",
        link: "https://www.instagram.com/capsule.transit/",
      },
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
      { name: "FAQ", link: "/faq" },
      { name: "Divider", link: "" },
      { name: "CSR", link: "/csr" },
      { name: "Divider", link: "" },
      { name: "Best Rate Guarantee", link: "" },
    ],
  },
  {
    title: "Best Rate Guarantee",
    options: [
      { name: "FAQ", link: "/faq" },
      { name: "CSR", link: "/csr" },
      // { name: "Best Rate Guarantee", link: "" },
    ],
  },
];

const Footer = () => {
  const theme = useTheme();
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  if (!isHandheldDevice) {
    return (
      <Box
        display={"flex"}
        flexDirection={"row-reverse"}
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
                onClick={() => router.push("/booking")}
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
                  <Typography variant="h3" color={"primary"}>
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
                {/* <Stack direction={"row"} width={"100%"} height={"40px"}>
                  {textContent[5].options.map((option, index) => {
                    return option.name !== "Divider" ? (
                      <Button
                        key={index}
                        onClick={() => router.push(option.link)}
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
                </Stack> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        display={"flex"}
        flexDirection={"row-reverse"}
        bgcolor={theme.palette.CtColorScheme.blue800}
        paddingX={3}
        paddingY={8}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Stack
              direction={"column"}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Button
                onClick={() => router.push("/booking")}
                sx={{
                  padding: 0,
                  justifyContent: "flex-start",
                  color: "white",
                }}
              >
                <Stack direction={"row"} width={"100%"} alignItems={"center"}>
                  <Typography variant="h1" color={"primary"}>
                    {textContent[4].title}
                  </Typography>
                  <Image src={ArrowTopRight} alt="CT-Right-Up" />
                </Stack>
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <ShortcutSection />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <CTNewsSection />
          </Grid>
        </Grid>
      </Box>
    );
  }
};

const ShortcutSection = () => {
  const theme = useTheme();
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      direction={"column"}
      spacing={6}
      justifyContent={"space-between"}
      height={"100%"}
    >
      <Stack>
        <Stack
          direction={"column"}
          width={"100%"}
          spacing={6}
          justifyContent={"space-between"}
        >
          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="h4"
              color={theme.palette.CtColorScheme.neon200}
            >
              {textContent[0].title}
            </Typography>
            <Stack direction={"row"} width={"100%"}>
              {textContent[0].options.map((option, index) => {
                return option.name !== "Divider" ? (
                  <Button
                    key={index}
                    onClick={() => router.push(option.link)}
                    sx={{ color: "white", paddingX: 0 }}
                  >
                    {option.name}
                  </Button>
                ) : (
                  <Divider key={index} />
                );
              })}
            </Stack>
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="h4"
              color={theme.palette.CtColorScheme.neon200}
            >
              {textContent[1].title}
            </Typography>
            <Stack direction={"row"} width={"100%"} spacing={2}>
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
      </Stack>
      <Stack
        direction={"row"}
        paddingRight={isHandheldDevice ? 0 : "50px"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Image src={CTIconPrimary} alt={"ct-icon"} />
        <Typography fontWeight={600} color={"primary"}>
          Release: {process.env.NEXT_PUBLIC_VERSION}
        </Typography>
      </Stack>
    </Stack>
  );
};

const CTNewsSection = () => {
  const theme = useTheme();
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  if (!isHandheldDevice) {
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
        <Stack direction={"column"} spacing={5}>
          <Stack direction={"column"} spacing={1.5}>
            <Typography variant="button" color={"primary"}>
              {textContent[2].title}
            </Typography>
            {textContent[2].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => router.push(option.link)}
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
                onClick={() => router.push(option.link)}
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
  } else {
    return (
      <Stack direction={"column"} width={"100%"} height={"100%"} spacing={5}>
        <Divider
          variant="middle"
          flexItem
          sx={{
            backgroundColor: theme.palette.CtColorScheme.neon200,
          }}
        />
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          spacing={3}
        >
          <Stack direction={"column"} spacing={1.5}>
            <Typography variant="button" color={"primary"}>
              {textContent[2].title}
            </Typography>
            {textContent[2].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => router.push(option.link)}
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
        <Stack direction={"column"} spacing={4}>
          <Typography
            variant="button"
            color={theme.palette.CtColorScheme.grey100}
            width={"85%"}
            fontWeight={400}
          >
            {textContent[5].title}
          </Typography>
          <Stack
            direction={"row"}
            width={"100%"}
            height={"40px"}
            justifyContent={"space-between"}
          >
            {textContent[5].options.map((option, index) => {
              return option.name !== "Divider" ? (
                <Button
                  key={index}
                  onClick={() => router.push(option.link)}
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
    );
  }
};

export default Footer;
