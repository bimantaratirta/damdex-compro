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
      setKey((prev) => prev + 1);
      currentIndex = nextIndex;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "90vh", md: "105vh", lg: "100vh" },
      }}
    >
      <Stack
        alignItems={"center"}
        width={"100vw"}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        spacing={3}
      >
        <Box sx={{ pt: { lg: "3vh", md: "7vh" } }}>
          <Box sx={{ position: "relative", height: { lg: "200px", md: "120px" }, overflow: "hidden" }}>
            <Typography
              key={key}
              fontSize={{ lg: "150px", md: "100px" }}
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
            width: { xs: "335px", sm: "500px", md: "40vw", lg: "40vw" },
            height: { xs: "284px", sm: "100vh", md: "45vh", lg: "45vh" },
          }}
        >
          <Image
            src={masdamdex}
            alt="maskot"
            fill
            unoptimized
          />
        </Box>
        <Stack>
          <Typography
            variant="h4"
            fontWeight={400}
            align="center"
            sx={{ fontSize: { xs: "16px", sm: "20px", md: "22px", lg: "32px" } }}
            width={{ lg: "70vw", md: "80vw" }}
          >
            PRODUK PENCAMPUR SEMEN BERMUTU TINGGI, WATERPROOF DAN FUNGSI ISTIMEWA LAINNYA.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
