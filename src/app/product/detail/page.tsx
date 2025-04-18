"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";
import { Stack, Box, Typography, Button } from "@mui/material";
import img1 from "@/../public/productheader.png";
import img2 from "@/../public/fungsi4.png";
import sizeImg from "@/../public/productsize.png";
import Image from "next/image";

const Page = () => {
  return (
    <AppLayout>
      <Stack sx={{ alignItems: { md: "center" } }} direction={"row"} pt={8}>
        <Box sx={{ width: { xs: "100vw", md: "90vw" }, height: { xs: "40vh" }, position: "relative", backgroundColor: "rgba(0,0,0,1)" }}>
          <Image alt="image1" src={img1} fill />
        </Box>
        <Box sx={{ width: { xs: "100vw", md: "90vw" }, height: { xs: "40vh" }, position: "relative", backgroundColor: "rgba(0,0,0,1)" }}>
          <Image alt="image2" src={img2} fill />
        </Box>
        <div>
          <Box sx={{ height: "11vh", width: "58vw", position: "absolute", left: "23vw", zIndex: 5, top: "20vh" }}>
            <Stack alignItems={"center"}>
              <Typography variant="h2" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
                ONE PRODUCT
              </Typography>
              <Typography variant="h2" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
                ALL SOLUTIONS
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ height: { xs: "4vh" }, width: "45vw", backgroundColor: "#37B878", position: "absolute", top: "23.25vh", left: "29.3vw" }} />
        </div>
      </Stack>
      <Stack p={20} spacing={5}>
        <Typography variant="h3">Damdex Multifungsi is a cement additive that basically can be mixed three different ways depending on the job to be done; Thin, Medium, Thick.</Typography>
        <Typography variant="h3">The thin mix has a low viscosity (watery) so it can be applied with a brush as a coating to penetrate deep into concrete pores.</Typography>
        <Typography variant="h3">
          A medium mix can be used to improve concrete quality by 15 - 35% and accelerate hardening time by 50%. It can also be used as an additive for plaster mixes, ceramic grout applications, ceramic installation in concrete and tile on
          tile.
        </Typography>
        <Typography variant="h3">The third way to mix is just Damdex and cement powder to make a thick putty - like mix. This is ideal to plug holes spouting water and fixing tiles under water.</Typography>
        <Typography variant="h3">Damdex Multifungsi is efficient, effective and easy to use, all important properties when building protecting your building.</Typography>
      </Stack>
      <Box p={20}>
        <Typography variant="h1">Placeholder carousel</Typography>
      </Box>
      <Box sx={{ width: { xs: "100vw" }, height: { xs: "65vh" }, position: "relative", mb: 10 }}>
        <Image alt="image1" src={sizeImg} fill />
      </Box>
      <SixthSection noBackground />
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "30vh",
          background: "linear-gradient(89.7deg, #B94BBC -18.1%, #137C3B 115.45%)",
          backgroundSize: "cover",
        }}
      >
        <Stack alignItems={"center"} justifyItems={"center"} direction={"row"} spacing={4} sx={{ pt: { xs: "12vh" } }}>
          <Typography variant="h2" fontWeight={800} color="rgba(255, 255, 255, 1)" textAlign={"center"} width={"65vw"} sx={{ fontSize: { xs: "45px" } }}>
            Vibrant hues endless possibilities
          </Typography>
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#000",
                backgroundColor: "rgba(0,0,0,1)",
                width: { xs: "50vw", sm: "14.097vw" },
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: { xs: 16, sm: 20 },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.75)",
                },
              },
            }}
          >
            View Product
          </Button>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
