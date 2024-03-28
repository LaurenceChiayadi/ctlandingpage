import theme from "@/assets/theme/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ContentWrapper = ({
  children,
  noMarginTop,
}: {
  children?: React.ReactNode;
  noMarginTop?: boolean;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      width={"100%"}
      paddingX={isHandheldDevice ? 3 : 7}
      marginTop={noMarginTop ? 0 : "170px"}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
