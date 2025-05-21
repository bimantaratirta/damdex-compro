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
    <Box sx={{ height: { xs: "95vh", sm: "92vh", md: "95vh", lg: "90vh" } }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        mt={"1vh"}
        mb="1vh"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Image
          alt="logo"
          src={logo}
          height={100}
        />
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "18px", sm: "24px" } }}
        >
          One Product, All Solution
        </Typography>
      </Stack>
      <Stack
        zIndex={0}
        sx={{ mx: { xs: 0, md: "5vw" }, flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "20vh", md: "38vh" },
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
              sx={{ fontSize: { xs: "16px", lg: "28px" } }}
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
              sx={{ width: { xs: "50vw", md: "20vw" }, fontSize: { xs: "8px", sm: "12px", lg: "14px" } }}
            >
              Hanya membutuhkan 2% dari berat semen, mampu meningkatkan mutu beton hingga 35%
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "20vh", md: "38vh" },
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
            sx={{ mr: { xs: "8vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "50vw", md: "30vw", lg: "14vw" }, fontSize: { xs: "16px", lg: "28px" } }}
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
              sx={{ width: { xs: "50vw", md: "20vw" }, fontSize: { xs: "10px", sm: "12px", lg: "14px" } }}
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
            height: { xs: "20vh", md: "38vh" },
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
              sx={{ fontSize: { xs: "16px", lg: "28px" }, width: { xs: "60vw", md: "40vw", lg: "14vw" } }}
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
              sx={{ width: { xs: "60vw", md: "20vw" }, fontSize: { xs: "10px", sm: "12px", xl: "16px" } }}
            >
              Dengan formula campuran Damdex 3:1 dapat menyumbat kebocoran air mengalir, sederas apapun secara instant.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "20vh", md: "38vh" },
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
            sx={{ mr: { xs: "8vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "60vw", md: "30vw" }, fontSize: { xs: "16px", lg: "28px" } }}
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
              sx={{ width: { xs: "50vw", md: "20vw" }, fontSize: { xs: "10px", sm: "12px", lg: "14px" } }}
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
