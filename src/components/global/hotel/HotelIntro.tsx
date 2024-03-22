import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Image from "next/image";
import CTButton from "../CTButton";
import { useRouter } from "next/navigation";

export interface IBreadCrumbs {
  name: string;
  url: string;
}

const HotelIntro = (props: {
  breadCrumbsContent: IBreadCrumbs[];
  textContent: string;
  images: any[];
  buttonUrl: string;
  subtitle?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingY={3}
      position={"relative"}
    >
      <Breadcrumbs
        separator={<KeyboardArrowRightIcon fontSize="small" />}
        sx={{ paddingX: 7 }}
      >
        {props.breadCrumbsContent.map((content, index) => {
          return index !== props.breadCrumbsContent.length - 1 ? (
            <Link underline="hover" color="inherit" href={content.url}>
              {content.name}
            </Link>
          ) : (
            <Typography>{content.name}</Typography>
          );
        })}
      </Breadcrumbs>
      <Box
        display={"flex"}
        width={"900px"}
        flexDirection={"column"}
        marginTop={10}
        paddingX={7}
        position={"absolute"}
      >
        <Typography variant="h3">{props.textContent}</Typography>
        {props.subtitle && props.subtitle}
        <Box display={"flex"} marginTop={10}>
          <CTButton
            onClick={() => router.push(props.buttonUrl)}
            text="BOOK NOW"
            variant="secondary"
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"end"}
        justifyContent={"space-between"}
      >
        <Box height={"1000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 20,
            }}
          >
            <Image
              src={props.images[0]}
              alt="airside-display-1"
              style={{ height: "800px", width: "100%" }}
            />
          </div>
        </Box>
        <Box height={"2000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 20,
            }}
          >
            <Image
              src={props.images[1]}
              alt="airside-display-1"
              style={{ height: "800px", width: "100%" }}
            />
          </div>
        </Box>
        <Box height={"3000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 20,
            }}
          >
            <Image
              src={props.images[2]}
              alt="airside-display-1"
              style={{ height: "800px", width: "100%" }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelIntro;
