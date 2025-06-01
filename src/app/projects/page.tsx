"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import img from "@/../public/project.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePaginationData } from "@/lib/usePaginationData";
import { useLanguage } from "@/components/localStorageProvider";
import { useProject } from "@/swr-hooks/project/useProject";
import eng from "../../locale/eng.json";
import id from "../../locale/id.json";

const Page = () => {
  const router = useRouter();
  const { pagination, handlePaginationModelChange } = usePaginationData({ pageIndex: 1, pageSize: 9 });
  const { language } = useLanguage();
  const { data: projects } = useProject({ page: pagination.pageIndex, limit: pagination.pageSize });

  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("md"));
  const isTall = useMediaQuery("(min-height: 1200px)");

  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: isTall ? { md: "30vh", xs: "30vh" } : { lg: "40vh", md: "30vh", sm: "250px", xs: "180px" },
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0) 22.87%, rgba(255, 230, 86, 0) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: isTall ? { xs: "15vh", lg: "5vh", xl: "5vh" } : { xs: "8vh", md: "10vh", xl: "5vh" } }}
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
          {language === "eng" ? eng.projectCaption : id.projectCaption}
        </Typography>
        <Grid2
          container
          spacing={2}
          justifyContent={"space-evenly"}
        >
          {projects &&
            projects.data.payload.map((d, idx) => (
              <div
                onClick={() => router.push(`/projects/detail/${d.id}`)}
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
                        height: isTall
                          ? { xl: "45vh", lg: "30vh", md: "25vh", xs: "30vh" }
                          : { xl: "45vh", lg: "45vh", md: "25vh", sm: "270px", xs: "200px" },
                      }}
                    >
                      <Image
                        src={d.heroImageUrl}
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
                      {language === "id" ? d.titleIDN : d.titleENG}
                    </Typography>
                  </Stack>
                </Grid2>
              </div>
            ))}
        </Grid2>

        <Pagination
          siblingCount={1}
          count={projects?.data.totalPage}
          shape="rounded"
          size={phone ? "small" : "large"}
          page={pagination.pageIndex}
          onChange={(_, val) => handlePaginationModelChange({ pageIndex: val, pageSize: pagination.pageSize })}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
