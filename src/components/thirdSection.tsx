import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/section3-1.png";
import image2 from "../../public/distributor.png";
import logowarna from "../../public/Damdex Warna Logo-01.png";

export const ThirdSection = () => {
  return (
    <Box sx={{ width: "100vw", height: { xs: "80vh", sm: "72vh", md: "152vh", lg: "171.5vh" }, position: "relative", pt: 2 }}>
      <Stack alignItems={"center"} justifyContent={"center"} direction="row" mb="2vh" data-aos="fade-up" data-aos-easing="ease-in-out">
        <Image src={logowarna} alt="logo" height={100} />
        <Typography variant="h5" sx={{ fontSize: { xs: "20px", sm: "24px", lg: "30px" } }}>
          Pioneer of Waterproofing Innovation
        </Typography>
      </Stack>
      <Stack sx={{ alignItems: { md: "center" } }}>
        <Box sx={{ width: { xs: "100vw", md: "90vw" }, height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "79vh" }, position: "relative" }}>
          <Image alt="image1" src={image1} fill data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200" />
        </Box>
        <Box sx={{ width: { xs: "100vw", md: "90vw" }, height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "79vh" }, position: "relative" }}>
          <Image alt="image2" src={image2} fill />
        </Box>
      </Stack>
      <div>
        <Box sx={{ height: "11vh", width: "58vw", mx: "auto", position: "absolute", top: { xs: "47vh", sm: "39vh", md: "72vh", lg: "84vh" }, left: "23vw", zIndex: 5 }} data-aos="fade-up" data-aos-easing="ease-in-out">
          <Stack alignItems={"center"}>
            <Typography variant="h3" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"} sx={{ fontSize: { xs: "15px", md: "44px", lg: "48px" } }}>
              CONFIDENCE IN EVERY DROP
            </Typography>
            <Typography variant="h1" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"} sx={{ fontSize: { xs: "20px", sm: "45px", md: "60px", lg: "84px" } }}>
              WATERPROOF
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{ height: { xs: "3vh", sm: "6vh", lg: "8vh" }, width: "45vw", backgroundColor: "#37B878", alignSelf: "center", position: "absolute", top: { xs: "48.5vh", sm: "40vh", md: "76vh", lg: "87vh" }, left: "29.3vw" }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        />
      </div>
    </Box>
  );
};
