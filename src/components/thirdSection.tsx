import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/section3a.png";
import image2 from "../../public/section3b.png";
import logowarna from "../../public/Damdex Warna Logo-01.png";
import background from "../../public/bg3.png";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "80vh", sm: "74.5vh", md: "155vh", lg: "180.5vh" },
        position: "relative",
        pt: 2,
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction="row"
        mb="2vh"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Image
          src={logowarna}
          alt="logo"
          height={100}
        />
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "20px", sm: "24px", lg: "30px" } }}
        >
          Pioneer of Waterproofing Innovation
        </Typography>
      </Stack>
      <Stack sx={{ alignItems: { md: "center" } }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "79vh" },
            position: "relative",
            color: "#FFF",
            background: `url(${image1.src})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Stack
            ml="3vw"
            mt="4vw"
            justifyContent={"flex-end"}
            zIndex={2}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ fontSize: { xs: "16px", lg: "64PX" }, width: { xs: "60vw", md: "40vw", lg: "14vw" } }}
            >
              LONGER POT LIFE
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
              sx={{ width: { xs: "60vw", md: "20vw" }, fontSize: { xs: "10px", sm: "12px", lg: "20px" } }}
            >
              Umur campuran produk lain maksimal 45 menit, sedangkan Damdex Warna bisa tahan 30x lebih lama.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "30vh", sm: "30vh", md: "65vh", lg: "79vh" },
            position: "relative",
            background: `url(${image2.src})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Stack
            mr="3vw"
            mt="4vw"
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            // justifyContent={"end"}
            // alignSelf={"end"}
            height={"60vh"}
            sx={{ mr: { xs: "8vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "60vw", md: "30vw" }, fontSize: { xs: "16px", lg: "64px" } }}
              textAlign={"end"}
            >
              COLORFUL CEMENT WATERPROOFING
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
              sx={{ width: { xs: "50vw", md: "20vw" }, fontSize: { xs: "10px", sm: "12px", lg: "20px" } }}
              color="#fff"
              fontWeight={400}
              textAlign={"end"}
            >
              Satu - satunya waterproofing semen base yang memiliki 7 varian warna.
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <div>
        <Box
          sx={{
            height: "11vh",
            width: "58vw",
            mx: "auto",
            position: "absolute",
            top: { xs: "47vh", sm: "39vh", md: "72vh", lg: "84vh" },
            left: "23vw",
            zIndex: 5,
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Stack alignItems={"center"}>
            <Typography
              variant="h3"
              fontWeight={800}
              color="#FFF"
              width={"80vw"}
              textAlign={"center"}
              sx={{ fontSize: { xs: "15px", md: "44px", lg: "48px" } }}
            >
              CONFIDENCE IN EVERY DROP
            </Typography>
            <Typography
              variant="h1"
              fontWeight={800}
              color="#FFF"
              width={"80vw"}
              textAlign={"center"}
              sx={{ fontSize: { xs: "20px", sm: "45px", md: "60px", lg: "84px" } }}
            >
              WATERPROOF
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            height: { xs: "3vh", sm: "6vh", lg: "8vh" },
            width: "45vw",
            backgroundColor: "#37B878",
            alignSelf: "center",
            position: "absolute",
            top: { xs: "48.5vh", sm: "40vh", md: "76vh", lg: "87vh" },
            left: "29.3vw",
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        />
      </div>
    </Box>
  );
};
