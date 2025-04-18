"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { AppLayout } from "@/components/appLayout";
import product1 from "@/../public/product1.png";
import product2 from "@/../public/product2.png";

import { Box, Stack } from "@mui/material";

const Page = () => {
  return (
    <AppLayout>
      <Box sx={{ width: "100vw" }} pt={4}>
        <Stack sx={{ alignItems: { md: "center" } }}>
          <Box sx={{ width: { xs: "100vw" }, height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "100vh" }, position: "relative" }}>
            <Image alt="image1" src={product1} fill objectFit="cover" />
          </Box>
          <Box sx={{ width: { xs: "100vw" }, height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "120vh" }, position: "relative" }}>
            <Image alt="image2" src={product2} fill objectFit="cover" />
          </Box>
          <Box sx={{ width: { xs: "100vw" }, height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "100vh" }, position: "relative" }}>
            <video autoPlay loop muted preload="none">
              <source src="product3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
