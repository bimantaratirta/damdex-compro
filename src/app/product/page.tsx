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
  return (
    <Box
      sx={{
        height: { xl: "8vh", md: "10vh" },
        width: { xl: "15vw", md: "16vw" },
        zIndex: 2,
        borderRadius: "15px",
        backgroundColor: "#ff0101",
        position: "absolute",
        top: top,
        right: right,
        border: "3px solid black",
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
  const tab = useMediaQuery(theme.breakpoints.down("xl"));
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
              height: { xs: "30vh", sm: "30vh", md: "100vh", xl: "100vh" },
              position: "relative",
            }}
          >
            <Image
              alt="image1"
              src={product1}
              fill
              objectFit="cover"
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: { xs: "30vh", sm: "30vh", md: "110vh", xl: "120vh" },
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
                objectFit="cover"
                style={{ zIndex: 1 }}
              />
              <PopupPoint
                top="55%"
                right={"18.5%"}
              >
                <Stack
                  spacing={0.5}
                  pt={{ lg: 1.5, md: 1 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "30px", md: "18px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    UNDERWATER
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "18px", md: "10px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Ceramics Problem
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={tab ? "43.5%" : "44.5%"}
                right={"17%"}
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={{ xl: 2.5, md: 1.2 }}
                  fontSize={{ xl: "36px", md: "24px" }}
                >
                  CRACKING
                </Typography>
              </PopupPoint>
              <PopupPoint
                top={tab ? "32%" : "33.75%"}
                right={tab ? "18%" : "19%"}
              >
                <Stack
                  spacing={0.5}
                  pt={{ lg: 1, md: 0.5 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "22px", md: "12px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    High Pressure
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={{ xl: "30px", md: "18px" }}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    LEAKS
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={tab ? "32%" : "33.75%"}
                right="64.6%"
              >
                <Stack
                  spacing={0.5}
                  pt={{ lg: 1.2, md: 0.8 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "32px", md: "18px" }}
                  >
                    CORROSIVE
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "20px", md: "12px" }}
                  >
                    Nat Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={tab ? "54%" : "55%"}
                right={tab ? "66%" : "66.8%"}
              >
                <Stack
                  spacing={0.5}
                  pt={{ lg: 1, md: 0.5 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "30px", md: "18px" }}
                  >
                    POPPING
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "20px", md: "12px" }}
                  >
                    Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top={tab ? "43%" : "44.2%"}
                right={tab ? "67.5%" : "68.5%"}
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={{ xl: 2.5, md: 1.2 }}
                  fontSize={{ xl: "36px", md: "24px" }}
                >
                  POROUS
                </Typography>
              </PopupPoint>
            </div>
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: { xs: "30vh", sm: "30vh", md: "100vh", xl: "100vh" },
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
                style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
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
