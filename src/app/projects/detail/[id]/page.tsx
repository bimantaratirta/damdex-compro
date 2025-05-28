/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, List, ListItem, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { use } from "react";
import img1 from "@/../public/deskripsiprojek1.png";
import img2 from "@/../public/deskripsiprojek2.png";
import { useLanguage } from "@/components/localStorageProvider";
import { useProjectDetail } from "@/swr-hooks/project/useProjectDetail";
import { OtherListSection } from "@/components/otherListSection";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { language } = useLanguage();
  const { data, loading } = useProjectDetail(Number(id));
  const isTall = useMediaQuery("(min-height: 1200px)");

  const dummy = [
    { img: img1, title: "Bukit Golf Riverside Lagoon" },
    { img: img2, title: "Cluster Da Silva 1" },
    { img: img2, title: "Cluster Da Silva 2" },
  ];

  return (
    <AppLayout>
      <Box sx={{ p: { lg: 10, xs: 5 } }}>
        <Typography
          fontWeight={800}
          textAlign={"center"}
          mb={5}
          variant="h3"
          mt={{ xs: 5, md: 8, lg: 5 }}
        >
          Bukit Golf Riverside Lagoon
        </Typography>
        <Box sx={{ height: { xs: "200px", sm: "300px", md: "50vh" }, position: "relative", m: "auto" }}>
          <Image
            alt="image1"
            src={img1}
            fill
            objectFit="cover"
            style={{ borderRadius: "25px" }}
          />
        </Box>
        <Typography
          textAlign={"justify"}
          mx="auto"
          variant="h5"
          justifyContent={"start"}
          mt={5}
        >
          Project maintenance waterproofing full system by Damdex. Adapun pekerjaan nya meliputi pembongkaran
          waterproofing lama (existing menggunakan membrane). Waterproofing lama juga menggunakan Styrofoam dibawah
          membrane dengan tujuan memperkuat membrane dan melindungi beton asli bangunan tersebut serta meredam getaran
          dari atas dak utama Gedung tersebut. Untuk project ini dikerjakan oleh aplikator dari kami PT Lintas Jaya
          Nusantara dengan garansi pekerjaan selama 5 tahun. Pengawasan dan supervise dilakukan selama proyek tersebut
          berlangsung.
        </Typography>
        <Stack
          mx={"auto"}
          mt={10}
          direction={{ md: "row", xs: "column" }}
          width={{ md: "90vw", xs: "auto" }}
          spacing={5}
        >
          <Box
            sx={{
              width: { lg: "50vw", md: "75vw", xs: "auto" },
              height: { xs: "40vh", sm: "50vh" },
              position: "relative",
            }}
          >
            <Image
              alt="image1"
              src={img2}
              fill
              objectFit="cover"
              style={{ borderRadius: "25px" }}
            />
          </Box>
          <List sx={{ listStyle: "disc", fontSize: "20px", width: { md: "40vw", xs: "80vw" } }}>
            <ListItem sx={{ display: "list-item" }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent={"start"}
              >
                <Typography
                  alignContent={"center"}
                  fontSize={"20px"}
                  fontWeight={800}
                >
                  Lokasi Pekerjaan
                </Typography>
                <Typography
                  alignContent={"center"}
                  fontSize={"20px"}
                >
                  : Karawaci, Tangerang
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
              >
                <Typography
                  alignContent={"center"}
                  fontSize={"20px"}
                  fontWeight={800}
                >
                  Volume Pekerjaan
                </Typography>
                <Typography
                  alignContent={"center"}
                  fontSize={"20px"}
                >
                  : 1.038,2 m
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Stack direction={"column"}>
                <Typography
                  alignContent={"center"}
                  fontSize={"20px"}
                  fontWeight={800}
                >
                  Area Pekerjaan Waterproofing
                </Typography>
                <List sx={{ listStyle: "' - '" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      alignContent={"center"}
                      fontSize={"20px"}
                    >
                      Dak Utama
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      alignContent={"center"}
                      fontSize={"20px"}
                    >
                      Dak Rooftop 4
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      alignContent={"center"}
                      fontSize={"20px"}
                    >
                      Dak Lift
                    </Typography>
                  </ListItem>
                </List>
              </Stack>
            </ListItem>
          </List>
        </Stack>
        <OtherListSection
          data={dummy}
          variant="Projects"
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
