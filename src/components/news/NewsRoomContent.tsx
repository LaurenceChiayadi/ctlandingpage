import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
import { DateRange } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import NewsImage1 from "./images/news-1.jpg";
import NewsImage2 from "./images/news-2.jpg";
import NewsImage3 from "./images/news-3.jpg";
import NewsImage4 from "./images/news-4.jpg";
import NewsImage5 from "./images/news-5.jpg";
import NewsImage6 from "./images/news-6.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";

const contents = [
  {
    title: "Penginapan Transit Kapsul di KLIA",
    url: "/",
    date: "26 Jun 2023",
    image: NewsImage6,
  },
  {
    title: "Capsule hotels in Malaysia",
    url: "/",
    date: "4 Mar 2020",
    image: NewsImage5,
  },
  {
    title:
      "CapsuleTransit unveils new 70-pod airside hotel at Kuala Lumpur International",
    url: "/",
    date: "10 Feb 2020",
    image: NewsImage4,
  },
  {
    title: "Could Capsule Hotels In Airports Reinvent Long Layovers?",
    url: "/",
    date: "5 Nov 2019",
    image: NewsImage3,
  },
  {
    title: "More choices to take a nap at klia2",
    url: "/",
    date: "12 Oct 2019",
    image: NewsImage2,
  },
  {
    title:
      "'Pod-hotel' group CHG unveils modular room design for airport travellers",
    url: "/",
    date: "10 Jan 2019",
    image: NewsImage1,
  },
];

const NewsRoomContent = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginTop={10}
      marginBottom={6}
    >
      {contents.map((content, index) => (
        <ContentWrapper key={index} noMarginTop>
          <Grid container borderTop={1} paddingTop={3} paddingBottom={10}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Image src={content.image} alt={content.title} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <Stack justifyContent={"space-between"} height={"100%"}>
                <Typography variant="h4" maxWidth={"660px"}>
                  {content.title}
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={1}
                  color={theme.palette.CtColorScheme.grey400}
                >
                  <DateRange />
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {content.date}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
              <IconButton
                onClick={() => router.push(content.url)}
                sx={{ transform: "scaleX(-1)" }}
              >
                <Image
                  src={IconArrowLeft}
                  alt="arrow-left"
                  style={{ transform: "scaleX(-1)" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </ContentWrapper>
      ))}
    </Box>
  );
};

export default NewsRoomContent;
