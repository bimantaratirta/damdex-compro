import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import tiktok from "../../public/ytb 1.png";
import fb from "../../public/fb 1.png";
import ig from "../../public/fb 2.png";
import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <Box sx={{ width: "100vw", backgroundColor: "rgba(36,36,36,1)", height: "95vh" }}>
      <Typography color="#FFF" fontWeight={800} variant="h3" pt={"8vh"} pb={"8vh"} textAlign={"center"} width={"39vw"} mx={"auto"} data-aos="fade-up" data-aos-easing="ease-in-out">
        Paint your vision, shape your home.
      </Typography>
      <Stack spacing={5} pt={"12vh"}>
        <Stack direction={"row"} justifyContent={"space-between"} px={"3.5vw"} zIndex={10}>
          <Stack direction={"row"} spacing={3} pr={"5vw"} data-aos="fade-right" data-aos-easing="ease-in-out">
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
          <Stack direction={"row"} justifyContent={"center"} spacing={2} data-aos="fade-left" data-aos-easing="ease-in-out">
            <IconButton href="https://www.youtube.com/user/DamdexIndonesia" target="_blank">
              <YouTubeIcon sx={{ color: "#FFF" }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/Damdex" target="_blank">
              <Image src={fb} alt="fb" width={25} height={25} />
            </IconButton>
            <IconButton href="https://www.instagram.com/damdexindonesia/?hl=en" target="_blank">
              <Image src={ig} alt="ig" width={25} height={25} />
            </IconButton>
            <IconButton href="https://www.tiktok.com/@damdexindonesia" target="_blank">
              <Image src={tiktok} alt="tiktok" width={25} height={25} />
            </IconButton>
          </Stack>
        </Stack>
        <Typography color="#FFF" fontWeight={800} fontSize={"19.931vw"} lineHeight={"18.652vh"} pl={"2vw"} data-aos="fade-up" data-aos-easing="ease-in-out">
          DAMDEX
        </Typography>
      </Stack>
      <Typography textAlign={"center"} color="#FFF" mt={"16vh"}>
        © PT Prima Graha Bangun Tunggal. All rights reserved 2024
      </Typography>
    </Box>
  );
};
