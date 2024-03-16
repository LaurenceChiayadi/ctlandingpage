import theme from "@/assets/theme/theme";
import { Box, Typography } from "@mui/material";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width={"100%"} paddingX={7} marginTop={"170px"}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
