"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography } from "@mui/material";
import img from "@/../public/eventdeskripsi.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = React.use(params);
  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "40vh",
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0) 22.87%, rgba(255, 230, 86, 0) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
        }}
      />
      <Box sx={{ p: 5 }}>
        <Typography
          textAlign={"center"}
          mb={5}
          fontWeight={800}
          fontSize={{ lg: "60px", md: "50px", xs: "40px" }}
        >
          ACE JABAR
        </Typography>
        <Box sx={{ mb: 3, px: { xl: 20, md: 10, xs: 5 } }}>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"25vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Tempat
            </Typography>
            <Typography fontSize={{ xs: "10px", md: "16px", lg: "20px" }}>:</Typography>
            <Typography
              width={"30vw"}
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
              width={"25vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Hari
            </Typography>
            <Typography fontSize={{ xs: "10px", md: "16px", lg: "20px" }}>:</Typography>
            <Typography
              width={"30vw"}
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
              width={"25vw"}
              fontSize={{ xs: "10px", md: "16px", lg: "20px" }}
            >
              Tema Acara
            </Typography>
            <Typography fontSize={{ xs: "10px", md: "16px", lg: "20px" }}>:</Typography>
            <Typography
              width={"30vw"}
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
      </Box>
    </AppLayout>
  );
};

export default Page;
