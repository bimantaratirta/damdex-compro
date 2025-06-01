/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";
import { Stack, Box, Typography, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import img1 from "@/../public/productheader.png";
import img2 from "@/../public/fungsi4.png";
import sizeImg from "@/../public/productsize.png";
import Image, { StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AdvantageDialog } from "@/components/dialog";
import { FilledButton } from "@/components/button";
import { useRouter } from "next/navigation";
import imgcarousel from "@/../public/section3a.png";
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
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  const { language } = useLanguage();
  const { data } = useProductDetail(2);

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
        sx={{ alignItems: { md: "center" }, pt: { xl: 6, xs: 4 } }}
        direction={"row"}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "30vh", md: "40vh" },
            position: "relative",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Image
            alt="image1"
            src={img1}
            fill
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "30vh", md: "40vh" },
            position: "relative",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Image
            alt="image2"
            src={img2}
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
              top: { xl: "20vh", xs: "18vh" },
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
              height: { xl: "4vh", lg: "2vh", md: "3vh", sm: "1.25vh", xs: "1.5vh" },
              width: "45vw",
              backgroundColor: "#37B878",
              position: "absolute",
              top: { xl: "23.25vh", lg: "20vh", md: "21vh", sm: "19vh", xs: "19.5vh" },
              left: { xs: "29.3vw" },
            }}
          />
        </div>
      </Stack>
      <Stack
        p={5}
        fontSize={{ lg: "48px", md: "32px", sm: "24px", xs: "20px" }}
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
                    minWidth: { xl: "20%", md: "25%", sm: "40%", xs: "50%" },
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
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        width: "90%",
                        color: "white",
                        padding: 2,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                      }}
                    >
                      <Typography
                        alignSelf={"start"}
                        fontSize={{}}
                        sx={{ typography: { xl: "h6", md: "caption" } }}
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
          style={{ objectFit: desktop ? "cover" : "contain" }}
        />
      </Box>
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
            onClick={() => router.push("/product/multifungsi")}
          />
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
