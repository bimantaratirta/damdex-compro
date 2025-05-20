"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { AppLayout } from "@/components/appLayout";
import product1 from "@/../public/product1.png";
import product2 from "@/../public/product2.png";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const PopupPoint = ({ top, right, children }: { top: string; right: string; children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        height: "8vh",
        width: "15vw",
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
              height: { xs: "30vh", sm: "30vh", md: "100vh", lg: "100vh" },
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
              height: { xs: "30vh", sm: "30vh", md: "110vh", lg: "120vh" },
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
                right="18.5%"
              >
                <Stack
                  spacing={0.5}
                  pt={1.5}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    // height={"8vh"}
                    fontSize={"30px"}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    UNDERWATER
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    // height={"8vh"}
                    fontSize={"18px"}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Ceramics Problem
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top="44.5%"
                right="17%"
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={2.5}
                  fontSize="36px"
                >
                  CRACKING
                </Typography>
              </PopupPoint>
              <PopupPoint
                top="33.75%"
                right="19%"
              >
                <Stack
                  spacing={0.5}
                  pt={1}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={"22px"}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    High Pressure
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontSize={"30px"}
                    fontWeight={800}
                    lineHeight={1}
                  >
                    LEAKS
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top="33.75%"
                right="64.6%"
              >
                <Stack
                  spacing={0.5}
                  pt={1.2}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={"32px"}
                  >
                    CORROSIVE
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={"20px"}
                  >
                    Nat Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top="55%"
                right="66.8%"
              >
                <Stack
                  spacing={0.5}
                  pt={1}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={"30px"}
                  >
                    POPPING
                  </Typography>
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={"20px"}
                  >
                    Ceramics
                  </Typography>
                </Stack>
              </PopupPoint>
              <PopupPoint
                top="44.2%"
                right="68.5%"
              >
                <Typography
                  color="#FFF"
                  textAlign={"center"}
                  justifyContent={"center"}
                  height={"8vh"}
                  fontWeight={800}
                  lineHeight={1}
                  pt={2.5}
                  fontSize="36px"
                >
                  POROUS
                </Typography>
              </PopupPoint>
            </div>
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: { xs: "30vh", sm: "30vh", md: "100vh", lg: "100vh" },
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
