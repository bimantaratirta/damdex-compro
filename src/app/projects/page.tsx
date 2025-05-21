"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import img from "@/../public/project.png";
import img1 from "@/../public/golf.png";
import img2 from "@/../public/dasilva.png";
import img3 from "@/../public/gramercysa.png";
import img4 from "@/../public/SPPBE.png";
import img5 from "@/../public/WTPPAM.png";
import img6 from "@/../public/gramercy.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const data = [
    { img: img1, name: "Bukit Golf Riverside Lagoon" },
    { img: img2, name: "Cluster Da Silva – Delta Mas Cikarang" },
    { img: img3, name: "Cluster Gramercy – Alam Sutera" },
    { img: img4, name: "SPPBE  (Stasiun Pengisian dan Pengangkutan Bulk Elpiji)" },
    { img: img5, name: "Water Treatment Plant (WTP) PAM Jaya" },
    { img: img6, name: "Cluster Gramercy – Alam Sutera" },
  ];
  const theme = useTheme();
  const router = useRouter();
  const tab = useMediaQuery(theme.breakpoints.down("lg"));
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
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "20vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(0, 0, 0, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}
          >
            Projects
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ p: 15 }} justifyItems={"center"}>
        <Typography variant="h5" fontWeight={800} mb={4}>
          Here are some projects we have worked on
        </Typography>
        {!tab && (
          <Grid2 container spacing={4} gridColumn={2} gridAutoColumns={2} justifyContent={"center"}>
            {data.map((d, idx) => (
              <div onClick={() => router.push(`/projects/detail/${idx}`)} key={idx}>
                <Grid2>
                  <Stack spacing={2} sx={{ "&:hover": { cursor: "pointer" } }}>
                    <Image src={d.img} alt="project" width={700} height={400} style={{ borderRadius: "25px" }} />
                    <Typography variant="h6" fontWeight={800} width={700}>
                      {d.name}
                    </Typography>
                  </Stack>
                </Grid2>
              </div>
            ))}
          </Grid2>
        )}
        {tab && (
          <Grid2 container spacing={4} gridColumn={2} gridAutoColumns={2} justifyContent={"center"}>
            {data.map((d, idx) => (
              <div onClick={() => router.push(`/projects/detail/${idx}`)} key={idx}>
                <Grid2>
                  <Stack spacing={2} sx={{ "&:hover": { cursor: "pointer" } }}>
                    <Image src={d.img} alt="project" width={390} height={200} style={{ borderRadius: "25px" }} />
                    <Typography variant="h6" fontWeight={800} width={390}>
                      {d.name}
                    </Typography>
                  </Stack>
                </Grid2>
              </div>
            ))}
          </Grid2>
        )}
        <Pagination
          count={10}
          shape="rounded"
          size="large"
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
