"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
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
        width: "100%",
        minHeight: { xs: "80vh", sm: "85vh", md: "100vh" },
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 3 }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Box sx={{ pt: { xs: "5vh", sm: "7vh", md: "8vh" } }}>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: "60px", sm: "100px", md: "100px", lg: "110px" },
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <Typography
                key={key}
                sx={{
                  fontSize: {
                    xs: "clamp(40px, 8vw, 40px)",
                    sm: "clamp(44px, 8vw, 48px)",
                    md: "clamp(48px, 8vw, 64px)",
                    lg: "clamp(64px, 8vw, 96px)",
                  },
                  fontWeight: 800,
                  color: "white",
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
              width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
              aspectRatio: "1 / 1", // Menjaga proporsi gambar
              maxWidth: "90vw",
              maxHeight: "40vh",
            }}
          >
            <Image
              src={masdamdex}
              alt="maskot"
              fill
              sizes="(max-width: 576px) 90vw, (max-width: 768px) 70vw, (max-width: 992px) 50vw, 50vw"
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </Box>
          <Stack sx={{ width: { xs: "90%", sm: "80%", md: "70%" } }}>
            <Typography
              variant="h4"
              fontWeight={400}
              align="center"
              sx={{
                fontSize: {
                  xs: "clamp(14px, 4vw, 16px)",
                  sm: "clamp(16px, 4vw, 18px)",
                  md: "clamp(18px, 4vw, 22px)",
                  lg: "clamp(18px, 4vw, 32px)",
                },
                color: "#000",
              }}
            >
              PRODUK PENCAMPUR SEMEN BERMUTU TINGGI, WATERPROOF DAN FUNGSI ISTIMEWA LAINNYA.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
