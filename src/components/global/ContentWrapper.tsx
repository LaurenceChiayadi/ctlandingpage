import theme from "@/assets/theme/theme";
import { Box, Typography } from "@mui/material";

const ContentWrapper = ({
  children,
  noMarginTop,
}: {
  children: React.ReactNode;
  noMarginTop?: boolean;
}) => {
  return (
    <Box width={"100%"} paddingX={7} marginTop={noMarginTop ? 0 : "170px"}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
