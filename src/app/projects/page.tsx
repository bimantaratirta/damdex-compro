"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography } from "@mui/material";
import img from "@/../public/project.png";
import Image from "next/image";

const Page = () => {
  const data = [
    { img: img, name: "Maintenance Nobu Building" },
    { img: img, name: "Giantara City Serpong" },
    { img: img, name: "Water Treatment Plant" },
    { img: img, name: "SPPBE" },
    { img: img, name: "Cluster Da Silva" },
    { img: img, name: "Cluster Gramercy" },
    { img: img, name: "Cluster Da Silva" },
    { img: img, name: "Bukit Golf Riverside Lagoon" },
  ];
  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "40vh",
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0) 22.87%, rgba(255, 230, 86, 0) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack alignItems={"center"} justifyItems={"center"} direction={"column"} spacing={4} sx={{ pt: { xs: "10vh", sm: "20vh" } }}>
          <Typography variant="h2" fontWeight={800} color="rgba(0, 0, 0, 1)" textAlign={"center"} width={"65vw"} sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}>
            Projects
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ p: 15 }}>
        <Typography variant="h5" fontWeight={800} mb={4}>
          Here are some projects we have worked on
        </Typography>
        <Grid2 container spacing={4}>
          {data.map((d, idx) => (
            <div onClick={() => alert("clicked")} key={idx}>
              <Stack spacing={2} sx={{ "&:hover": { cursor: "pointer" } }}>
                <Image src={d.img} alt="abc" width={800} height={400} style={{ borderRadius: "25px" }} />
                <Typography variant="h6" fontWeight={800}>
                  {d.name}
                </Typography>
              </Stack>
            </div>
          ))}
        </Grid2>
        <Pagination count={10} shape="rounded" size="large" sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }} />
      </Box>
    </AppLayout>
  );
};

export default Page;
