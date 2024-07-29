import { Engineering } from "@mui/icons-material";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import MaintenanceSVG from "@/assets/icons/general/maintenance.svg";

const UnderMaintenance = () => {
  const theme = useTheme();

  const isPhoneDevice = useMediaQuery("(max-width:800px)");
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
        style={{ width: isPhoneDevice ? "45vw" : "30vw", height: "auto" }}
      />
      <Typography
        fontWeight={700}
        fontSize={isPhoneDevice ? "1.4rem" : "2rem"}
        marginTop={2}
      >
        Website Under Maintenance...
      </Typography>
      <Typography
        fontSize={isPhoneDevice ? "0.8rem" : "1rem"}
        color={theme.palette.CtColorScheme.grey400}
        marginTop={2}
      >
        Our website is currently undergoing maintenance process.
      </Typography>
      <Typography
        fontSize={isPhoneDevice ? "0.8rem" : "1rem"}
        color={theme.palette.CtColorScheme.grey400}
      >
        We should be back shortly. Thank you for your patience
      </Typography>
    </Box>
  );
};

export default UnderMaintenance;