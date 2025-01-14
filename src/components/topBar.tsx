"use client";

import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../public/damdexlogo.png";

export const TopBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.9)",
        borderImage: "linear-gradient(90.03deg, #B94BBC -0.47%, #3557C4 31.38%, #9CD942 63.74%, #F4CB37 100.64%)",
        borderImageSlice: 1,
        borderBottom: "7px solid transparent",
        width: "100vw",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} width={"100vw"} height={"6.5vh"} justifyContent={"space-between"} sx={{ px: "2.5vw" }}>
        <Image alt="logo" src={logo} height={23} />
        <Stack direction={"row"} spacing={3} pr={"5vw"}>
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
        <Typography color="#FFF">ID/EN</Typography>
      </Stack>
    </Box>
  );
};
