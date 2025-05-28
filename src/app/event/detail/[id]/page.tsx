/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import img from "@/../public/eventdeskripsi.png";
import { useLanguage } from "@/components/localStorageProvider";
import { useEventDetail } from "@/swr-hooks/eventGallery/useEventDetail";
import Image from "next/image";
import { OtherListSection } from "@/components/otherListSection";
import imgdummy from "@/../public/event2.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { language } = useLanguage();
  const { data, loading } = useEventDetail(Number(id));
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  const dummy = [
    { img: imgdummy, title: "Event 1" },
    { img: imgdummy, title: "Event 2" },
    { img: imgdummy, title: "Event 3" },
  ];

  return (
    <AppLayout>
      <Box
        sx={{
          width: { lg: "100vw" },
          height: { lg: "40vh", md: "30vh", sm: "250px", xs: "190px" },
          position: "relative",
        }}
      >
        <Image
          alt="image1"
          src={img.src}
          fill
          style={{ objectFit: desktop ? "cover" : "contain" }}
        />
      </Box>
      <Box sx={{ p: { xs: "0px 24px 24px", md: "0px 40px 40px", lg: 5 } }}>
        <Typography
          textAlign={"center"}
          mb={3}
          fontWeight={800}
          fontSize={{ lg: "60px", md: "50px", xs: "40px" }}
        >
          ACE JABAR
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontWeight={800}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Tempat
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Bandung Convention Centre
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
              fontWeight={800}
            >
              Hari
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Sabtu 1 Juni 2024
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
              fontWeight={800}
            >
              Tema Acara
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Seminar & Gathering 2024 Asosiasi Chief Engineering Jawa Barat (ACE JABAR)
            </Typography>
          </Stack>
        </Box>
        <Typography
          fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
          textAlign={"justify"}
        >
          Di dalam rangka memperluas jaringan networking, Damdex Indonesia juga menjalin Kerjasama dengan Asosiasi
          Chieft Engineering (ACE). ACE sendiri adalah satu wadah bagi para Chief Engineering, Building Management yang
          berprofesi sebagai ahli Teknik di seluruh Indonesia, yang mewadahi para Chief Engineering serta para Engineer
          Manufactur, Hotel, Mall, Apartment, Building Office dan institusi lainnya Pada kesempatan ini kami juga turut
          serta hadir dan memeriahkan serta mendukung berlangsungnya acara “Seminar & Gathering 2024 ACE Jabar”. Acara
          tersebut berlangsung di Bandung pada 1 Juni 2024
        </Typography>
        <OtherListSection
          data={dummy}
          variant="Events"
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
