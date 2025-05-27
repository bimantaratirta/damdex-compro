"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { AppLayout } from "@/components/appLayout";
import product1 from "@/../public/product1.png";
import product2 from "@/../public/product2.png";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const PopupPoint = ({ top, right, children }: { top: string; right: string; children: React.ReactNode }) => {
  const isTall = useMediaQuery("(min-height: 1200px)");
  return (
    <Box
      sx={{
        height: isTall ? "3vh" : { xl: "8vh", lg: "8vh", md: "3.5vh", sm: "3vh", xs: "3.2vh" },
        width: { xl: "15vw", md: "15vw", sm: "15vw", xs: "15.5vw" },
        zIndex: 2,
        borderRadius: { md: "5px", xs: "5px" },
        backgroundColor: "#ff0101",
        position: "absolute",
        top: top,
        right: right,
        border: { xs: "1px solid black" },
      }}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-bottom"
    >
      {children}
    </Box>
  );
};

const Page = () => {
  const theme = useTheme();
  const tab = useMediaQuery(theme.breakpoints.down("lg"));
  const phonexs = useMediaQuery(theme.breakpoints.down("sm"));
  const phonesm = useMediaQuery(theme.breakpoints.down("md"));
  const desktopxl = useMediaQuery(theme.breakpoints.up("xl"));
  const desktop = useMediaQuery(theme.breakpoints.down("xl"));
  const isTall = useMediaQuery("(min-height: 1200px)");
  const router = useRouter();
  return (
    <AppLayout>
      <Box
        sx={{ width: "100vw" }}
        pt={4}
      >
        <Stack sx={{ alignItems: { md: "center" } }}>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: isTall ? "50vh" : { xs: "40vh", sm: "50vh", lg: "100vh" },
              position: "relative",
            }}
          >
            <Image
              alt="image1"
              src={product1}
              fill
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: isTall ? "50vh" : { xs: "50vh", lg: "100vh", xl: "120vh" },
              position: "relative",
            }}
          >
            <div
              onClick={() => router.push("/product/multifungsi")}
              style={{ cursor: "pointer" }}
            >
              <Image
                alt="image2"
                src={product2}
                fill
              />
              <PopupPoint
                top={desktopxl ? "65vh" : tab ? "27vh" : phonesm || phonexs ? "27.2vh" : "54.8%"}
                right={phonesm ? "18.5vw" : phonexs ? "18.4vw" : "18.5%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ xl: 1.2, lg: 0.8, xs: 0.5 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "28px", lg: "18px", md: "12px", sm: "8px", xs: "7px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    UNDERWATER
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "16px", md: "8px", xs: "5px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Ceramics Problem
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={desktopxl ? "54vh" : tab ? "22.5vh" : phonesm ? "22.5vh" : phonexs ? "44.5%" : "45%"}
                right={phonexs ? "17vw" : "17%"}
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={{ xl: 2.5, sm: 1, xs: 0.5 }}
                  fontSize={{ xl: "36px", lg: "24px", md: "16px", xs: "clamp(6px, 8vh, 10px)" }}
                >
                  CRACKING
                </Typography>
              </PopupPoint>
              <PopupPoint
                top={isTall && desktop ? "18vh" : desktopxl ? "43vh" : tab ? "35.5%" : phonexs ? "18vh" : "33.75%"}
                right={phonexs ? "19vw" : "19%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ xl: 2, md: 0.5, sm: 0.6, xs: 0.3 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "16px", lg: "10px", md: "8px", sm: "7px", xs: "clamp(5px, 8vh, 6px)" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    High Pressure
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "28px", lg: "20px", md: "12px", sm: "8px", xs: "clamp(6px, 8vh, 7px)" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    LEAKS
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={isTall && desktop ? "36%" : desktopxl ? "42vh" : tab ? "35%" : phonexs ? "17.8vh" : "35.75%"}
                right={phonexs ? "64.5vw" : "64.6%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ xl: 1.5, md: 0.5, sm: 0.8, xs: 0.5 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "28px", lg: "20px", md: "12px", sm: "8px", xs: "6px" }}
                  >
                    CORROSIVE
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "16px", lg: "10px", md: "8px", xs: "clamp(5px, 8vw, 6px)" }}
                  >
                    Nat Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={desktopxl ? "65vh" : tab ? "54%" : phonexs ? "27vh" : "54%"}
                right={phonesm ? "67vw" : tab ? "67%" : phonexs ? "66.5vw" : "66.8%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ md: 0.5, xl: 1.5, sm: 0.5, xs: 0.5 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "28px", lg: "20px", md: "12px", sm: "8px", xs: "6px" }}
                  >
                    POPPING
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "16px", lg: "10px", md: "8px", xs: "5px" }}
                  >
                    Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={desktopxl ? "54vh" : phonexs ? "22.3vh" : tab ? "44.5%" : "44.5%"}
                right={phonesm ? "68.5vw" : phonexs ? "68vw" : tab ? "68.5%" : "68.5%"}
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={{ xl: 2.5, lg: 1, xs: 0.5, sm: 1 }}
                  fontSize={{ xl: "36px", lg: "24px", md: "16px", xs: "clamp(6px, 8vh, 10px)" }}
                >
                  POROUS
                </Typography>
              </PopupPoint>
            </div>
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: isTall ? "50vh" : tab ? "50vh" : phonexs ? "40vh" : "100vh",
            }}
          >
            <div
              onClick={() => router.push("/product/warna")}
              style={{ cursor: "pointer" }}
            >
              <video
                autoPlay
                loop
                muted
                preload="none"
                style={{
                  width: "100vw",
                  height: isTall ? "50vh" : tab ? "50vh" : phonexs ? "40vh" : "100vh",
                  objectFit: "cover",
                }}
              >
                <source
                  src="product3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Box>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
