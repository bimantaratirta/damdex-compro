/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";
import { Stack, Box, Typography, IconButton, useTheme, Link } from "@mui/material";
import img1 from "@/../public/headermulti.png";
import logo from "@/../public/Damdex Multifungsi Logo.png";
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
import { LoadingView } from "@/components/loadingView";

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
  const { data, loading } = useProductDetail(1);

  useEffect(() => {
    if (emblaApi) {
      setCount(emblaApi.slideNodes().length);
      emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap() + 1));
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  if (loading || !data) return <LoadingView />;

  return (
    <AppLayout>
      <Box sx={{ pt: { xl: "100px", lg: "80px", md: "80px", sm: "75px", xs: "75px" } }}>
        <Box
          position={"relative"}
          mx={"auto"}
          sx={{
            width: { xs: "50vw", md: "30vw", lg: "25vw" },
            height: { xs: "100px", sm: "125px", md: "125px", xl: "200px" },
          }}
        >
          <Image src={logo} priority alt="logo" fill />
        </Box>
        <Stack sx={{ alignItems: { md: "center" }, pt: { xl: 6, lg: 4, sm: 2, xs: 2 } }} direction={"row"}>
          <Box
            sx={{
              width: "100vw",
              height: { xs: "130px", sm: "170px", md: "200px", lg: "230px", xl: "325px" },
              position: "relative",
              backgroundColor: "rgba(0,0,0,1)",
            }}
          >
            <Image alt="image1" priority src={img1} fill />
          </Box>
          <div>
            <Box
              sx={{
                height: "11vh",
                width: "58vw",
                position: "absolute",
                left: "23vw",
                zIndex: 5,
                top: { xl: "450px", lg: "300px", md: "275px", sm: "255px", xs: "215px" },
              }}
            >
              <Stack alignItems={"center"}>
                <Typography
                  color="#FFF"
                  width={"80vw"}
                  fontWeight={800}
                  textAlign={"center"}
                  sx={{ typography: { xl: "h2", md: "h3", sm: "h4", xs: "h5" } }}
                >
                  ONE PRODUCT
                </Typography>
                <Typography
                  color="#FFF"
                  width={"80vw"}
                  textAlign={"center"}
                  fontWeight={800}
                  sx={{ typography: { xl: "h2", md: "h3", sm: "h4", xs: "h5" } }}
                >
                  ALL SOLUTIONS
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                height: { xl: "70px", md: "50px", sm: "40px", xs: "35px" },
                width: "45vw",
                backgroundColor: "#37B878",
                position: "absolute",
                top: { xl: "485px", lg: "330px", md: "305px", sm: "275px", xs: "230px" },
                left: { xs: "29.3vw" },
              }}
            />
          </div>
        </Stack>

        <Stack p={5} fontSize={{ xs: "20px", lg: "26px" }}>
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
            <Typography gutterBottom fontWeight={800} sx={{ fontWeight: "bold", fontSize: { xl: "34px", md: "24px" } }}>
              Additive with Multi Purpose
            </Typography>

            <Box sx={{ overflow: "hidden", position: "relative" }} ref={emblaRef}>
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
                          pr: 2,
                        }}
                      >
                        <Typography
                          alignSelf={"start"}
                          fontSize={{ xs: "13px", sm: "15px", md: "16px", lg: "16px", xl: "22px" }}
                          sx={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          {language === "eng" ? slide.titleENG : slide.titleIDN}
                        </Typography>
                        <Link
                          sx={{
                            textDecoration: "none",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                            color: "#FFF",
                            backgroundColor: "rgba(0,0,0,0.3)",
                          }}
                          fontSize={{ xs: "13px", sm: "15px", md: "16px" }}
                        >
                          {language === "id" ? "Baca Selengkapnya" : "Read More"}
                        </Link>
                      </Box>
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
            {/*Carousel */}

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <IconButton onClick={scrollPrev} sx={{ mx: 1 }}>
                <ArrowBackIosIcon sx={{ color: "#000" }} />
              </IconButton>
              <IconButton onClick={scrollNext} sx={{ mx: 1 }}>
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
          <Image alt="image1" src={sizeImg} fill style={{ objectFit: "contain" }} priority />
        </Box>
        <Stack direction={"column"} justifyContent={"center"} width={"100vw"} alignItems={"center"}>
          <Typography fontSize={"20px"}>Tersedia dalam ukuran:</Typography>
          <Typography fontWeight={800} fontSize={"20px"}>
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
          <Stack alignItems={"center"} justifyItems={"center"} direction={"row"} spacing={4} sx={{ pt: { xs: "12vh" } }}>
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
            <FilledButton label="Damdex Warna" onClick={() => router.push("/product/warna")} />
          </Stack>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Page;
