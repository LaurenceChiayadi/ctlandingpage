import { Stack, Typography } from "@mui/material";

const HeaderTop = (props: { title: string; children: React.ReactNode }) => {
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

export default HeaderTop;
