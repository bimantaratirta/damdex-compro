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
      <Box sx={{ p: 10 }}>
        <Typography
          variant="h1"
          textAlign={"center"}
          mb={10}
          fontWeight={800}
          sx={{ typography: { lg: "h1", md: "h3" } }}
        >
          ACE JABAR
        </Typography>
        <Box sx={{ width: "60vw", mx: "auto", mb: 10 }}>
          <Stack
            direction={"row"}
            spacing={5}
          >
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>Tempat</Typography>
            <Typography sx={{ typography: { lg: "h4", md: "h5" }, pl: { lg: 10.9, md: 12.9 } }}>:</Typography>
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>Bandung Convention Centre</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
          >
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>Hari</Typography>
            <Typography
              sx={{ typography: { lg: "h4", md: "h5" } }}
              pl={17.6}
            >
              :
            </Typography>
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>Sabtu 1 Juni 2024</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
          >
            <Typography sx={{ width: { xl: "15vw", lg: "41vw", md: "37vw" }, typography: { lg: "h4", md: "h5" } }}>
              Tema Acara
            </Typography>
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>:</Typography>
            <Typography sx={{ typography: { lg: "h4", md: "h5" } }}>
              Seminar & Gathering 2024 Asosiasi Chief Engineering Jawa Barat (ACE JABAR)
            </Typography>
          </Stack>
        </Box>
        <Typography
          width={"80vw"}
          mx={"auto"}
          sx={{ typography: { lg: "h4", md: "h5" } }}
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
