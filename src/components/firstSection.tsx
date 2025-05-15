"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import masdamdex from "../../public/masdamdex.gif";
import background from "../../public/bg4.png";

export const FirstSection = () => {
  return (
    <Box sx={{ width: "100vw", background: `url(${background.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: { xs: "90vh", md: "135vh", lg: "100vh" } }}>
      <Stack alignItems={"center"} width={"100vw"} data-aos="fade-up" data-aos-easing="ease-in-out" spacing={3}>
        <Typography fontSize={"6vw"} pb="3vh" pt="12vh" fontWeight={800}>
          Better Faster Stronger
        </Typography>
        <Stack>
          <Typography variant="h4" fontWeight={400} align="center" sx={{ fontSize: { xs: "16px", sm: "20px", md: "34px" } }}>
            Produk solusi beton bermutu tinggi, waterproof,
          </Typography>
          <Typography variant="h4" fontWeight={400} sx={{ pb: { md: "5vh" }, fontSize: { xs: "16px", sm: "20px", md: "34px" } }} align="center">
            dan fungsi istimewa lainnya.
          </Typography>
        </Stack>
        <Box sx={{ position: "relative", width: { xs: "335px", sm: "500px", md: "630px" }, height: { xs: "284px", sm: "300px", md: "434px" } }}>
          <Image src={masdamdex} alt="maskot" fill unoptimized />
        </Box>
      </Stack>
    </Box>
  );
};
