/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Typography } from "@mui/material";
import img1 from "../../public/fungsi1.png";
import img2 from "../../public/fungsi2.png";
import img3 from "../../public/fungsi3.png";
import img4 from "../../public/fungsi4.png";
import img1gif from "../../public/fungsi1gif.gif";
import logo from "../../public/Damdex Multifungsi Logo.png";
import Image from "next/image";
import { useLanguage } from "./localStorageProvider";
import { useHome } from "@/swr-hooks/home/useHome";

export const SecondSection = () => {
  const { language } = useLanguage();
  const { data } = useHome({ lang: language, section: 1 });
  return (
    <Box sx={{ minHeight: { xs: "146vh", sm: "92vh", md: "100vh" } }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        mt={"1vh"}
        mb="1vh"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Box
          position={"relative"}
          sx={{ width: { xs: "50vw", md: "30vw", lg: "25vw" }, height: { xs: "15vh", md: "18vh" } }}
        >
          <Image
            alt="logo"
            src={logo}
            fill
          />
        </Box>
        <Typography
          fontWeight={800}
          sx={{ fontSize: { xs: "clamp(16px, 8vw, 20px)", md: "clamp(24px, 8vvw, 34px)" } }}
          textAlign={"center"}
        >
          Cepat Menutup Kebocoran dan Memperkuat Beton
        </Typography>
      </Stack>
      <Stack
        zIndex={0}
        sx={{ mx: { xs: 0, md: "5vw" }, flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            backgroundImage: `url(${img1.src})`,
            backgroundSize: "cover",
            display: "block",
            filter: { md: "grayscale(100%)" },
            "&:hover": {
              backgroundImage: `url(${img1gif.src})`,
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <Stack
            ml="3vw"
            mt="2vw"
            justifyContent={"end"}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              width={"15vw"}
              sx={{ fontSize: { xs: "14px", sm: "20px", lg: "28px" } }}
            >
              STRONGER CONCRETE
            </Typography>
            <Box
              sx={{
                mt: "1vh",
                border: "2px solid #FFF",
                width: "11.2vw",
                mb: "1vh",
              }}
            />
            <Typography
              color="#fff"
              fontWeight={400}
              sx={{ width: { xs: "55vw", md: "20vw" }, fontSize: { xs: "9px", sm: "14px" } }}
            >
              Hanya membutuhkan 2% dari berat semen, mampu meningkatkan mutu beton hingga 35%
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${img2.src})`,
            backgroundSize: "cover",
            filter: { md: "grayscale(100%)" },
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
            alignSelf: "end",
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <Stack
            mr="3vw"
            mt="2vw"
            alignItems={"end"}
            sx={{ mr: { xs: "3vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "50vw", md: "30vw", lg: "14vw" }, fontSize: { xs: "14px", sm: "20px", lg: "28px" } }}
              textAlign={"end"}
            >
              PENETRATE & ADHESIVE
            </Typography>
            <Box
              sx={{
                mt: "1vh",
                border: "2px solid #FFF",
                width: "11.2vw",
                mb: "1vh",
              }}
            />
            <Typography
              textAlign={"end"}
              color="#fff"
              fontWeight={400}
              sx={{ width: { xs: "55vw", md: "20vw" }, fontSize: { xs: "9px", sm: "14px" } }}
            >
              Memiliki tingkat keenceran yang tinggi, maka mudah meresap dan meningkat ke pori - pori beton
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack sx={{ mx: { xs: 0, md: "5vw" }, flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${img3.src})`,
            backgroundSize: "cover",
            filter: { md: "grayscale(100%)" },
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Stack
            ml="3vw"
            mt="2vw"
            justifyContent={"end"}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ fontSize: { xs: "14px", sm: "20px", lg: "28px" }, width: { xs: "60vw", md: "40vw", lg: "14vw" } }}
            >
              STOP LEAKS INSTANLY
            </Typography>
            <Box
              sx={{
                mt: "1vh",
                border: "2px solid #FFF",
                width: "12vw",
                mb: "1vh",
              }}
            />
            <Typography
              color="#fff"
              fontWeight={400}
              sx={{ width: { xs: "55vw", md: "20vw" }, fontSize: { xs: "9px", sm: "14px" } }}
            >
              Dengan formula campuran Damdex 3:1 dapat menyumbat kebocoran air mengalir, sederas apapun secara instant.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${img4.src})`,
            backgroundSize: "cover",
            filter: { md: "grayscale(100%)" },
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Stack
            mr="3vw"
            mt="2vw"
            alignItems={"end"}
            sx={{ mr: { xs: "3vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "60vw", md: "30vw" }, fontSize: { xs: "14px", sm: "20px", lg: "28px" } }}
              textAlign={"end"}
            >
              UNDERWATER CERAMICS INSTALLATION
            </Typography>
            <Box
              sx={{
                mt: "1vh",
                border: "2px solid #FFF",
                width: "25vw",
                mb: "1vh",
              }}
            />
            <Typography
              sx={{ width: { xs: "55vw", md: "20vw" }, fontSize: { xs: "9px", sm: "14px" } }}
              color="#fff"
              fontWeight={400}
              textAlign={"end"}
            >
              Mampu merekat keramik dan mengeras dengan instan walaupun pemasangan di dalam air atau tanpa dikuras
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
