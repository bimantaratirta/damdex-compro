import { Box, Stack, Typography } from "@mui/material";
import img1 from "../../public/fungsi1.png";
import img2 from "../../public/fungsi2.png";
import img3 from "../../public/fungsi3.png";
import img4 from "../../public/fungsi4.png";
import img1gif from "../../public/fungsi1gif.gif";
import logo from "../../public/Damdex Multifungsi Logo.png";
import Image from "next/image";

export const SecondSection = () => {
  return (
    <Box sx={{ height: "95vh" }}>
      <Stack alignItems={"center"} justifyContent={"center"} direction={"row"} mt={"1vh"} mb="1vh" data-aos="fade-up" data-aos-easing="ease-in-out">
        <Image alt="logo" src={logo} height={100} />
        <Typography variant="h5">One Product, All Solution</Typography>
      </Stack>
      <Stack direction={"row"} mx="5vw" zIndex={0}>
        <Box
          sx={{
            width: "45vw",
            height: "38vh",
            backgroundImage: `url(${img1.src})`,
            backgroundSize: "cover",
            display: "block",
            filter: "grayscale(100%)",
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
          <Stack ml="3vw" mt="4vw" justifyContent={"end"}>
            <Typography color="#FFF" variant="h4" fontWeight={800} width={"11.2vw"}>
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
            <Typography width={"11.2vw"} color="#fff" fontWeight={400}>
              Hanya membutuhkan 2% dari berat semen, mampu meningkatkan mutu beton hingga 35%
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "45vw",
            height: "38vh",
            background: `url(${img2.src})`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
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
          <Stack mr="3vw" mt="4vw" alignItems={"end"}>
            <Typography color="#FFF" variant="h4" fontWeight={800} width={"14vw"} textAlign={"end"}>
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
            <Typography width={"14vw"} textAlign={"end"} color="#fff" fontWeight={400}>
              Memiliki tingkat keenceran yang tinggi, maka mudah meresap dan meningkat ke pori - pori beton
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack direction={"row"} mx="5vw">
        <Box
          sx={{
            width: "45vw",
            height: "38vh",
            background: `url(${img3.src})`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Stack ml="3vw" mt="4vw" justifyContent={"end"}>
            <Typography color="#FFF" variant="h4" fontWeight={800} width={"13vw"}>
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
            <Typography width={"13vw"} color="#fff" fontWeight={400}>
              Dengan formula campuran Damdex 3:1 dapat menyumbat kebocoran air mengalir, sederas apapun secara instant.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "45vw",
            height: "38vh",
            background: `url(${img4.src})`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Stack mr="3vw" mt="4vw" alignItems={"end"}>
            <Typography color="#FFF" variant="h4" fontWeight={800} width={"30vw"} textAlign={"end"}>
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
            <Typography width={"14vw"} color="#fff" fontWeight={400} textAlign={"end"}>
              Mampu merekat keramik dan mengeras dengan instan walaupun pemasangan di dalam air atau tanpa dikuras
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
