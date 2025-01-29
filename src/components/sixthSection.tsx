import { Box, Button, Stack, Typography } from "@mui/material";
import bg from "../../public/bg2.png";
import img from "../../public/toko.jpg";

export const SixthSection = () => {
  return (
    <Box sx={{ width: "100vw", background: `url(${bg.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "80vh", pt: { xs: "15vh", sm: "10vh", lg: "5vh" } }}>
      <Box
        sx={{
          width: { xs: "95vw", sm: "75vw" },
          height: "57vh",
          background: `linear-gradient(77.88deg, rgba(185, 75, 188, 0.8) -3.14%, rgba(53, 87, 196, 0.8) 27%, rgba(156, 217, 66, 0.8) 94.16%), url(${img.src})`,
          backgroundSize: "cover",
          borderRadius: "25px",
          mx: "auto",
        }}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
      >
        <Stack alignItems={"center"} justifyItems={"center"} direction={"column"} spacing={4} sx={{ pt: { xs: "10vh", sm: "15vh" } }}>
          <Typography variant="h2" fontWeight={800} color="rgba(255, 255, 255, 1)" textAlign={"center"} width={"65vw"} sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}>
            Toko / Traditional Market / Toko Material
          </Typography>
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#FFF",
                width: { xs: "50vw", sm: "14.097vw" },
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: { xs: 16, sm: 20, lg: 24 },
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
