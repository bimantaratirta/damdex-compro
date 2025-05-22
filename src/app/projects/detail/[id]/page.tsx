"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { use } from "react";
import img1 from "@/../public/deskripsiprojek1.png";
import img2 from "@/../public/deskripsiprojek2.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  return (
    <AppLayout>
      <Box sx={{ p: 10 }}>
        <Typography
          fontWeight={800}
          textAlign={"center"}
          mb={10}
          variant="h3"
          mt={5}
        >
          Bukit Golf Riverside Lagoon
        </Typography>
        <Box sx={{ height: { xs: "50vh" }, position: "relative", m: "auto" }}>
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
          width={{ md: "80vw", xs: "auto" }}
          spacing={5}
        >
          <Box sx={{ width: { md: "50vw", xs: "auto" }, height: { xs: "50vh" }, position: "relative" }}>
            <Image
              alt="image1"
              src={img2}
              fill
              objectFit="cover"
              style={{ borderRadius: "25px" }}
            />
          </Box>
          <List sx={{ listStyle: "disc", fontSize: "20px", width: "40vw" }}>
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
                      fontSize={"25px"}
                    >
                      Dak Utama
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      alignContent={"center"}
                      fontSize={"25px"}
                    >
                      Dak Rooftop 4
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      alignContent={"center"}
                      fontSize={"25px"}
                    >
                      Dak Lift
                    </Typography>
                  </ListItem>
                </List>
              </Stack>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
