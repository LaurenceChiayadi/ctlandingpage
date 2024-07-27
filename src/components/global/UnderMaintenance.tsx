import { Engineering } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import MaintenanceSVG from "@/assets/icons/general/maintenance.svg";

const UnderMaintenance = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Image
        src={MaintenanceSVG}
        alt="capsule-under-maintenance"
        style={{ width: "30vw", height: "auto" }}
      />
      <Typography variant="h5" marginTop={2}>
        Website Under Maintenance...
      </Typography>
      <Typography color={theme.palette.CtColorScheme.grey400} marginTop={2}>
        Our website is currently undergoing maintenance process.
      </Typography>
      <Typography color={theme.palette.CtColorScheme.grey400}>
        We should be back shortly. Thank you for your patience
      </Typography>
    </Box>
  );
};

export default UnderMaintenance;
