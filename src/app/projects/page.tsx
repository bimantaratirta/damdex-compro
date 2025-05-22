"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography } from "@mui/material";
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
  const router = useRouter();
  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { md: "40vh", xs: "30vh" },
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0) 22.87%, rgba(255, 230, 86, 0) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "15vh", lg: "20vh" } }}
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
      <Box sx={{ p: { xs: 5 }, display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Typography
          fontWeight={800}
          mb={4}
          fontSize={{ lg: "30px", md: "20px" }}
        >
          Here are some projects we have worked on
        </Typography>
        <Grid2
          container
          spacing={2}
          justifyContent={"space-evenly"}
        >
          {data &&
            data.map((d, idx) => (
              <div
                onClick={() => router.push(`/projects/detail/${idx}`)}
                key={idx}
              >
                <Grid2 size={8}>
                  <Stack
                    spacing={2}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: { xl: "45vw", lg: "40vw", md: "40vw", xs: "80vw" },
                        height: { xl: "45vh", lg: "30vh", md: "25vh", xs: "30vh" },
                      }}
                    >
                      <Image
                        src={d.img}
                        alt="project"
                        fill
                        style={{ borderRadius: "25px" }}
                      />
                    </Box>
                    <Typography
                      fontSize={{ lg: "20px", md: "16px" }}
                      fontWeight={800}
                      width={{ xl: "45vw", md: "42vw", xs: "80vw" }}
                      textOverflow={"clip"}
                    >
                      {d.name}
                    </Typography>
                  </Stack>
                </Grid2>
              </div>
            ))}
        </Grid2>

        <Pagination
          count={5}
          shape="rounded"
          size={"medium"}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
