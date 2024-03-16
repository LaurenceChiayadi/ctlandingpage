import { Box } from "@mui/material";
import Image from "next/image";

import ImageFoot from "./images/img-footer-home@2x.jpg";

const ImageFooter = () => {
  return (
    <Box display={"flex"} marginTop={"170px"}>
      <Image
        src={ImageFoot}
        alt="image-footer"
        style={{ height: "650px", objectFit: "cover" }}
      />
    </Box>
  );
};
export default ImageFooter;
