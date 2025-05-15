"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography } from "@mui/material";
import img from "@/../public/project.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
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
        <Typography variant="h1" textAlign={"center"} mb={10} fontWeight={800}>
          Event {id}
        </Typography>
        <Box sx={{ width: "60vw", mx: "auto", mb: 10 }}>
          <Stack direction={"row"} spacing={5}>
            <Typography variant="h4">Tempat</Typography>
            <Typography variant="h4" pl={10.9}>
              :
            </Typography>
            <Typography variant="h4">Bandung Convention Centre</Typography>
          </Stack>
          <Stack direction={"row"} spacing={5}>
            <Typography variant="h4">Hari</Typography>
            <Typography variant="h4" pl={17.6}>
              :
            </Typography>
            <Typography variant="h4">Sabtu 1 Juni 2024</Typography>
          </Stack>
          <Stack direction={"row"} spacing={5}>
            <Typography variant="h4" width={"15vw"}>
              Tema Acara
            </Typography>
            <Typography variant="h4">:</Typography>
            <Typography variant="h4">Seminar & Gathering 2024 Asosiasi Chief Engineering Jawa Barat (ACE JABAR)</Typography>
          </Stack>
        </Box>
        <Typography width={"80vw"} mx={"auto"} variant="h4">
          Di dalam rangka memperluas jaringan networking, Damdex Indonesia juga menjalin Kerjasama dengan Asosiasi Chieft Engineering (ACE). ACE sendiri adalah satu wadah bagi para Chief Engineering, Building Management yang berprofesi
          sebagai ahli Teknik di seluruh Indonesia, yang mewadahi para Chief Engineering serta para Engineer Manufactur, Hotel, Mall, Apartment, Building Office dan institusi lainnya Pada kesempatan ini kami juga turut serta hadir dan
          memeriahkan serta mendukung berlangsungnya acara “Seminar & Gathering 2024 ACE Jabar”. Acara tersebut berlangsung di Bandung pada 1 Juni 2024
        </Typography>
      </Box>
    </AppLayout>
  );
};

export default Page;
