import { Stack, Typography, useMediaQuery } from "@mui/material";

const HeaderTop = (props: { title: string; children: React.ReactNode }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? (
    <DesktopView title={props.title}>{props.children}</DesktopView>
  ) : (
    <HandheldView title={props.title}>{props.children}</HandheldView>
  );
};

const DesktopView = (props: { title: string; children: React.ReactNode }) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"end"}
      borderBottom={1}
      marginBottom={10}
    >
      <Typography variant="h3" width={"25%"}>
        {props.title}
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        marginBottom={1}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

const HandheldView = (props: { title: string; children: React.ReactNode }) => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      justifyContent={"space-between"}
      borderBottom={1}
      marginBottom={6}
      paddingBottom={2}
      spacing={4}
    >
      <Typography variant="h3" maxWidth={"300px"}>
        {props.title}
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        marginBottom={1}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

export default HeaderTop;
