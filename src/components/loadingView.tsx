import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useLanguage } from "./localStorageProvider";

export const LoadingView = () => {
  const { language } = useLanguage();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "20vh", mt: "35vh" }}>
      <Stack direction="column">
        <CircularProgress sx={{ margin: "auto" }} />
        <Typography>{language === "id" ? "Memuat data, mohon tunggu." : "Loading data, please wait."}</Typography>
      </Stack>
    </Box>
  );
};
