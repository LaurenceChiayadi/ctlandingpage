import { Box } from "@mui/material";
import Image from "next/image";

import CareerPhoto from "./images/img-CT-team.jpg";
const CareerImage = () => {
  return (
    <Box width={"100%"} height={"80vh"} marginY={"100px"}>
      <Image
        src={CareerPhoto}
        alt="capsule-career"
        style={{
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default CareerImage;
