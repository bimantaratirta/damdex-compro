import { Box, Button, Stack, Typography } from "@mui/material";
import bg from "../../public/bg2.png";
import img from "../../public/toko.jpg";

export const SixthSection = () => {
  return (
    <Box sx={{ width: "100vw", background: `url(${bg.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "95vh", pt: "15vh" }}>
      <Box
        sx={{
          width: "75.694vw",
          height: "57.031vh",
          background: `linear-gradient(77.88deg, rgba(185, 75, 188, 0.8) -3.14%, rgba(53, 87, 196, 0.8) 27%, rgba(156, 217, 66, 0.8) 94.16%), url(${img.src})`,
          backgroundSize: "cover",
          borderRadius: "25px",
          mx: "auto",
        }}
      >
        <Stack alignItems={"center"} justifyItems={"center"} direction={"column"} pt={"15vh"} spacing={4}>
          <Typography variant="h2" fontWeight={800} color="rgba(255, 255, 255, 1)" textAlign={"center"} width={"65vw"}>
            Toko / Traditional Market / Toko Material
          </Typography>
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#FFF",
                width: "14.097vw",
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: 24,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              },
            }}
          >
            Find
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
