"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import masdamdex from "../../public/masdamdex.gif";
import background from "../../public/bg4.png";
import { useEffect, useState } from "react";

export const FirstSection = () => {
  const [text, setText] = useState("BETTER");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const words = ["BETTER", "FASTER", "STRONGER"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % words.length;
      setText(words[nextIndex]);
      setKey((prev) => prev + 1); // Memaksa render ulang untuk animasi
      currentIndex = nextIndex;
    }, 3000); // Ganti setiap 2 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: "50px",
        // height: { xs: "90vh", md: "135vh", lg: "100vh" },
      }}
    >
      <Stack alignItems={"center"} width={"100vw"} data-aos="fade-up" data-aos-easing="ease-in-out" spacing={3}>
        {/* <Typography
          fontSize={"6vw"}
          pb="3vh"
          pt="12vh"
          fontWeight={800}
          color="#FFF"
        >
          Better Faster Stronger
        </Typography> */}
        <Box sx={{ pt: "3vh" }}>
          <Box sx={{ position: "relative", height: "330px", overflow: "hidden" }}>
            <Typography
              key={key}
              fontSize={"250px"}
              fontWeight={800}
              sx={{
                position: "relative",
                color: "white",
                margin: 0,
                animation: "slideDown 3s linear infinite",
              }}
            >
              {text}
            </Typography>
            <style>
              {`
          @keyframes slideDown {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            10% {
              transform: translateY(0);
              opacity: 1;
            }
            90% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }
        `}
            </style>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "335px", sm: "500px", md: "630px", lg: "40vw" },
            height: { xs: "284px", sm: "300px", md: "434px", lg: "45vh" },
          }}
        >
          <Image src={masdamdex} alt="maskot" fill unoptimized />
        </Box>
        <Stack>
          <Typography
            variant="h4"
            fontWeight={400}
            align="center"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "34px", lg: "40px" },
            }}
            width={"60vw"}
          >
            PRODUK PENCAMPUR SEMEN BERMUTU TINGGI, WATERPROOF DAN FUNGSI ISTIMEWA LAINNYA.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
