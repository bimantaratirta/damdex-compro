"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { use } from "react";
import img from "@/../public/project.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return (
    <AppLayout>
      <Box sx={{ p: 12 }}>
        <Typography fontWeight={800} textAlign={"center"} mb={10} variant="h3" mt={5}>
          Project {id}
        </Typography>
        <Box sx={{ width: { xs: "80vw" }, height: { xs: "50vh" }, position: "relative", m: "auto" }}>
          <Image alt="image1" src={img} fill objectFit="cover" style={{ borderRadius: "25px" }} />
        </Box>
        <Typography textAlign={"justify"} mx="auto" width={"80vw"} variant="h5" justifyContent={"start"} mt={5}>
          Project maintenance waterproofing full system by Damdex. Adapun pekerjaan nya meliputi pembongkaran waterproofing lama (existing menggunakan membrane). Waterproofing lama juga menggunakan Styrofoam dibawah membrane dengan tujuan
          memperkuat membrane dan melindungi beton asli bangunan tersebut serta meredam getaran dari atas dak utama Gedung tersebut. Untuk project ini dikerjakan oleh aplikator dari kami PT Lintas Jaya Nusantara dengan garansi pekerjaan
          selama 5 tahun. Pengawasan dan supervise dilakukan selama proyek tersebut berlangsung.
        </Typography>
        <Stack mx={"auto"} mt={10} direction={"row"} width={"80vw"} spacing={5}>
          <Box sx={{ width: { xs: "50vw" }, height: { xs: "50vh" }, position: "relative" }}>
            <Image alt="image1" src={img} fill objectFit="cover" style={{ borderRadius: "25px" }} />
          </Box>
          <List sx={{ listStyle: "disc", fontSize: "20px", width: "40vw" }}>
            <ListItem sx={{ display: "list-item" }}>
              <Stack direction={"row"} spacing={2}>
                <Typography alignContent={"center"} fontSize={"25px"} fontWeight={800}>
                  Lokasi Pekerjaan
                </Typography>
                <Typography alignContent={"center"} fontSize={"25px"}>
                  : Karawaci, Tangerang
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Stack direction={"row"} spacing={2}>
                <Typography alignContent={"center"} fontSize={"25px"} fontWeight={800}>
                  Volume Pekerjaan
                </Typography>
                <Typography alignContent={"center"} fontSize={"25px"}>
                  : 1.038,2 m
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Stack direction={"column"}>
                <Typography alignContent={"center"} fontSize={"25px"} fontWeight={800}>
                  Area Pekerjaan Waterproofing
                </Typography>
                <List sx={{ listStyle: "' - '" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography alignContent={"center"} fontSize={"25px"}>
                      Dak Utama
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography alignContent={"center"} fontSize={"25px"}>
                      Dak Rooftop 4
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography alignContent={"center"} fontSize={"25px"}>
                      Dak Lift
                    </Typography>
                  </ListItem>
                </List>
              </Stack>
            </ListItem>
          </List>
        </Stack>
        <Box sx={{ mx: "auto", width: "80vw", mt: 10 }}>
          <Typography variant="h5" m={"auto"} fontWeight={800}>
            Pekerjaan Waterproofing full system dari Damdex meliputi
          </Typography>
          <List sx={{ listStyle: "disc", pl: 5 }}>
            <ListItem sx={{ display: "list-item" }}>
              <Typography alignContent={"center"} fontSize={"24px"}>
                Pembongkaran Waterproofing lama
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography alignContent={"center"} fontSize={"24px"}>
                Tes Rendam
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography alignContent={"center"} fontSize={"24px"}>
                Pemasangan Styrofoam
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Page;
