import theme from "@/assets/theme/theme";
import { CssBaseline, Drawer, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const ProviderContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ProviderContext;
