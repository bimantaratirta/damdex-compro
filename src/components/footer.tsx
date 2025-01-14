import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import tiktok from "../../public/ytb 1.png";
import linkedin from "../../public/twttr 1.png";
import fb from "../../public/fb 1.png";
import ig from "../../public/fb 2.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box sx={{ width: "100vw", backgroundColor: "rgba(36,36,36,1)", height: "95vh" }} id="trigger-f">
      <Typography
        color="#FFF"
        fontWeight={800}
        variant="h2"
        pt={"8vh"}
        pb={"8vh"}
        textAlign={"center"}
        width={"39vw"}
        mx={"auto"}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor="#trigger-f"
        data-aos-anchor-placement="top-center"
      >
        Paint your vision, shape your home.
      </Typography>
      <Stack spacing={5} pt={"10.5vh"}>
        <Stack direction={"row"} justifyContent={"space-between"} px={"3.5vw"}>
          <Stack direction={"row"} spacing={3} pr={"5vw"} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-anchor="#trigger-f" data-aos-anchor-placement="top-center">
            <Link underline="hover" color="#FFF">
              Home
            </Link>
            <Link underline="hover" color="#FFF">
              Products
            </Link>
            <Link underline="hover" color="#FFF">
              User & Applications
            </Link>
            <Link underline="hover" color="#FFF">
              Projects
            </Link>
            <Link underline="hover" color="#FFF">
              Contact Us
            </Link>
          </Stack>
          <Stack direction={"row"} justifyContent={"center"} spacing={4} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-anchor="#trigger-f" data-aos-anchor-placement="top-center">
            <IconButton sx={{ p: 0 }}>
              <Image src={linkedin} width={25} height={25} alt="linkedin" />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Image src={fb} width={25} height={25} alt="fb" />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Image src={ig} width={25} height={25} alt="ig" />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Image src={tiktok} width={25} height={25} alt="tiktok" />
            </IconButton>
          </Stack>
        </Stack>
        <Typography color="#FFF" fontWeight={800} fontSize={"19.931vw"} lineHeight={"18.652vh"} pl={"2vw"} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-anchor="#trigger-f" data-aos-anchor-placement="top-center">
          DAMDEX
        </Typography>
      </Stack>
      <Typography textAlign={"center"} color="#FFF" pt={"16vh"}>
        © PT Prima Graha Bangun Tunggal. All rights reserved 2024
      </Typography>
    </Box>
  );
};
