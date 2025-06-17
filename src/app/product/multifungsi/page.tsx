/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";
import { Stack, Box, Typography, IconButton, useTheme } from "@mui/material";
import img1 from "@/../public/productheader.png";
import img2 from "@/../public/fungsi4.png";
import sizeImg from "@/../public/multifungsi.png";
import Image, { StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AdvantageDialog } from "@/components/dialog";
import { FilledButton } from "@/components/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/localStorageProvider";
import { useProductDetail } from "@/swr-hooks/product/useProductDetail";

const Page = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [advantage, setAdvantage] = useState<
    { title: string; description: string; image: string | StaticImageData } | undefined
  >(undefined);
  const theme = useTheme();
  const router = useRouter();

  const { language } = useLanguage();
  const { data } = useProductDetail(1);

  useEffect(() => {
    if (emblaApi) {
      setCount(emblaApi.slideNodes().length);
      emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap() + 1));
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <AppLayout>
      <Stack
        sx={{ alignItems: { md: "center" }, pt: { xl: 6, lg: 4, xs: 6 } }}
        direction={"row"}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw", lg: "90vw" },
            height: { xs: "150px", sm: "190px", md: "220px", lg: "40vh" },
            position: "relative",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Image
            alt="image1"
            priority
            src={img1}
            fill
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw", lg: "90vw" },
            height: { xs: "150px", sm: "190px", md: "220px", lg: "40vh" },
            position: "relative",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Image
            alt="image2"
            src={img2}
            priority
            fill
          />
        </Box>
        <div>
          <Box
            sx={{
              height: "11vh",
              width: "58vw",
              position: "absolute",
              left: "23vw",
              zIndex: 5,
              top: { xl: "20vh", lg: "18vh", md: "120px", sm: "12vh", xs: "100px" },
            }}
          >
            <Stack alignItems={"center"}>
              <Typography
                color="#FFF"
                width={"80vw"}
                textAlign={"center"}
                sx={{ typography: { xl: "h2", md: "h3" } }}
              >
                ONE PRODUCT
              </Typography>
              <Typography
                color="#FFF"
                width={"80vw"}
                textAlign={"center"}
                sx={{ typography: { xl: "h2", md: "h3" } }}
              >
                ALL SOLUTIONS
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              height: { xl: "4vh", lg: "4vh", md: "3.5vh", sm: "1.5vh", xs: "2.5vh" },
              width: "45vw",
              backgroundColor: "#37B878",
              position: "absolute",
              top: { xl: "23.25vh", lg: "22vh", md: "145px", sm: "13vh", xs: "110px" },
              left: { xs: "29.3vw" },
            }}
          />
        </div>
      </Stack>

      <Stack
        p={5}
        fontSize={{ xs: "20px", lg: "26px" }}
      >
        <div
          className="flex flex-col !space-y-10"
          dangerouslySetInnerHTML={{
            __html: language === "id" ? (data?.data.descriptionIDN as string) : (data?.data.descriptionENG as string),
          }}
        />
      </Stack>

      {/*Carousel */}
      {data && data.data.productAdvantage && (
        <Box p={{ xs: 5, lg: 10 }}>
          <Typography
            gutterBottom
            fontWeight={800}
            sx={{ fontWeight: "bold", fontSize: { xl: "34px", md: "24px" } }}
          >
            Additive with Multi Purpose
          </Typography>

          <Box
            sx={{ overflow: "hidden", position: "relative" }}
            ref={emblaRef}
          >
            <Box sx={{ display: "flex" }}>
              {data?.data.productAdvantage.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: { xl: "20%", lg: "25%", md: "30%", sm: "40%", xs: "60%" },
                    padding: 2,
                    borderRadius: "25px",
                    position: "relative",
                    height: { lg: "500px", sm: "400px", xs: "300px" },
                    mx: 2,
                    backgroundColor: "rgba(0,0,0,1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    onClick={() =>
                      setAdvantage({
                        title: language === "eng" ? slide.titleENG : slide.titleIDN,
                        description: language === "eng" ? slide.descriptionENG : slide.descriptionIDN,
                        image: slide.heroImageUrl,
                      })
                    }
                  >
                    <Image
                      src={slide.heroImageUrl}
                      alt={language === "eng" ? slide.titleENG : slide.titleIDN}
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "25px" }}
                      priority
                      unoptimized
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        color: "white",
                        pt: 2,
                        px: 1,
                      }}
                    >
                      <Typography
                        alignSelf={"start"}
                        fontSize={{ xs: "13px", sm: "15px", md: "16px", lg: "16px", xl: "22px" }}
                      >
                        {language === "eng" ? slide.titleENG : slide.titleIDN}
                      </Typography>
                    </Box>
                  </div>
                </Box>
              ))}
            </Box>
          </Box>
          {/*Carousel */}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              onClick={scrollPrev}
              sx={{ mx: 1 }}
            >
              <ArrowBackIosIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton
              onClick={scrollNext}
              sx={{ mx: 1 }}
            >
              <ArrowForwardIosIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
        </Box>
      )}

      <AdvantageDialog
        description={advantage?.description}
        img={advantage?.image}
        open={Boolean(advantage)}
        onClose={() => setAdvantage(undefined)}
        title={advantage?.title}
      />

      <Box sx={{ width: { lg: "100vw" }, height: { lg: "65vh", xs: "30vh" }, position: "relative" }}>
        <Image
          alt="image1"
          src={sizeImg}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        width={"100vw"}
        alignItems={"center"}
      >
        <Typography fontSize={"20px"}>Tersedia dalam ukuran:</Typography>
        <Typography
          fontWeight={800}
          fontSize={"20px"}
        >
          1, 5 & 20 Liter
        </Typography>
      </Stack>
      <SixthSection noBackground />
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "30vh",
          px: 2,
          background: "linear-gradient(89.7deg, #B94BBC -18.1%, #137C3B 115.45%)",
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"row"}
          spacing={4}
          sx={{ pt: { xs: "12vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xl: "45px", md: "30px", xs: "15px" } }}
          >
            Vibrant hues endless possibilities
          </Typography>
          <FilledButton
            label="View Product"
            onClick={() => router.push("/product/warna")}
          />
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
