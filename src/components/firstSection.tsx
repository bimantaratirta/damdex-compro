"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useHome } from "@/swr-hooks/home/useHome";
import { useLanguage } from "./localStorageProvider";

export const FirstSection = () => {
  const [text, setText] = useState("BETTER");
  const [key, setKey] = useState(0);
  const { language } = useLanguage();
  const { data } = useHome({ lang: language, section: 1 });

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
        background: `url(${data?.data.find((data) => data.key === "section-1-background")?.fileUrl})`,
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
          <Box sx={{ pt: { xs: "5vh", sm: "1vh", md: "3vh" } }}>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: "60px", sm: "100px", md: "100px", lg: "70px" },
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <Typography
                key={key}
                sx={{
                  fontSize: {
                    xs: "60px",
                    sm: "80px",
                    md: "120px",
                    lg: "150px",
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
          {data && (
            <Box
              sx={{
                position: "relative",
                width: { xs: "90%", sm: "100%", md: "50%", lg: "100%" },
                aspectRatio: "1 / 1", // Menjaga proporsi gambar
                maxWidth: "100vw",
                maxHeight: "40vh",
              }}
            >
              <Image
                src={data?.data.find((data) => data.key === "section-1-gif-image")?.fileUrl ?? ""}
                alt="maskot"
                fill
                // sizes="(max-width: 576px) 90vw, (max-width: 768px) 70vw, (max-width: 992px) 50vw, 50vw"
                style={{ objectFit: "contain" }}
                loading="lazy"
                unoptimized
              />
            </Box>
          )}
          <Stack sx={{ width: { xs: "90%", sm: "80%", md: "70%" }, pb: { lg: 2 } }}>
            <Typography
              variant="h4"
              fontWeight={400}
              align="center"
              sx={{
                fontSize: {
                  xs: "clamp(14px, 4vw, 16px)",
                  sm: "clamp(16px, 4vw, 18px)",
                  md: "24px",
                  lg: "28px",
                },
                color: "#000",
              }}
            >
              {data?.data.find((data) => data.key === "section-1-description")?.content}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
