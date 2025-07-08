"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { AppLayout } from "@/components/appLayout";
import product1 from "@/../public/product1.png";
// import product2 from "@/../public/product2.png";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const PopupPoint = ({ top, right, children }: { top: string; right: string; children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        height: { xl: "75px", lg: "44px", md: "35px", sm: "25px", xs: "23px" },
        width: { xl: "15vw", md: "15vw", sm: "15vw", xs: "18vw" },
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
  // const desktopxl = useMediaQuery(theme.breakpoints.up("xl"));
  const desktop = useMediaQuery(theme.breakpoints.down("xl"));
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
              height: { xs: "250px", sm: "400px", md: "500px", lg: "100vh" },
              position: "relative",
            }}
          >
            <Image
              alt="image1"
              priority
              src={product1}
              fill
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100vw" },
              height: { xs: "300px", sm: "400px", md: "500px", lg: "676px", xl: "1082px" },
              position: "relative",
            }}
          >
            <div
              onClick={() => router.push("/product/multifungsi")}
              style={{ cursor: "pointer" }}
            >
              {/* <Image
                alt="image2"
                priority
                src={product2}
                fill
              /> */}
              <video
                autoPlay
                loop
                muted
                preload="none"
                playsInline
                style={{
                  width: "100vw",
                  height: phonexs ? "300px" : phonesm ? "400px" : tab ? "500px" : desktop ? "676px" : "1082px",
                  objectFit: "cover",
                }}
              >
                <source
                  src="multifungsi.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <PopupPoint
                top={phonexs ? "168px" : phonesm ? "223px" : tab ? "280px" : desktop ? "380px" : "590px"}
                right={phonexs ? "16vw" : phonesm ? "19.5vw" : desktop ? "19.5%" : "18.5%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ xl: 1.2, lg: 0.8, sm: 0.5, xs: 0.3 }}
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
                top={phonexs ? "138px" : phonesm ? "190px" : tab ? "235px" : desktop ? "318px" : "500px"}
                right={phonexs ? "15vw" : desktop ? "18%" : "16.8%"}
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
                top={phonexs ? "110px" : phonesm ? "150px" : tab ? "185px" : desktop ? "250px" : "400px"}
                right={phonexs ? "19vw" : desktop ? "19.8%" : "19%"}
              >
                <Stack
                  spacing={{ xs: 0.2, md: 0.4 }}
                  pt={{ xl: 2, md: 0.5, sm: 0.4, xs: 0.3 }}
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
                top={phonexs ? "110px" : phonesm ? "150px" : tab ? "37%" : desktop ? "248px" : "398px"}
                right={phonexs ? "64vw" : phonesm ? "64vw" : tab ? "63.5vw" : desktop ? "64vw" : "64.6%"}
              >
                <Stack
                  spacing={{ xs: 0.2 }}
                  pt={{ xl: 1.5, lg: 0.8, md: 0.5, sm: 0.5, xs: 0.35 }}
                >
                  <Typography
                    color="#FFF"
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={800}
                    lineHeight={1}
                    fontSize={{ xl: "28px", lg: "16px", md: "12px", sm: "8px", xs: "6px" }}
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
                top={phonexs ? "165px" : phonesm ? "222px" : tab ? "56%" : desktop ? "378px" : "590px"}
                right={phonexs ? "66.5vw" : phonesm ? "65.5vw" : tab ? "65.5vw" : desktop ? "66vw" : "67%"}
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
                top={phonexs ? "136px" : phonesm ? "188px" : tab ? "45.5%" : desktop ? "315px" : "493px"}
                right={phonexs ? "68vw" : phonesm ? "67.5vw" : tab ? "67%" : desktop ? "67.5vw" : "68.8%"}
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
              height: { xs: "300px", sm: "400px", md: "500px", lg: "676px", xl: "1082px" },
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
                playsInline
                style={{
                  width: "100vw",
                  height: phonexs ? "300px" : phonesm ? "400px" : tab ? "500px" : desktop ? "676px" : "1082px",
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
