import { Box, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import tiktok from "../../public/ytb 1.png";
import fb from "../../public/fb 1.png";
import ig from "../../public/fb 2.png";
import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tab = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "rgba(36,36,36,1)",
        height: { xl: "95vh", lg: "110vh", md: "100vh" },
        p: 10,
      }}
    >
      <Typography
        color="#FFF"
        fontWeight={800}
        variant="h3"
        pt={"3vh"}
        textAlign={"left"}
        width={"80vw"}
        sx={{ fontSize: { xs: "28px", lg: "48px" }, width: "50vw", px: "3.5vw" }}
      >
        Find Us on Social Media or your Favorite Store
      </Typography>
      {!mobile && !tab && (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={"3.5vw"}
          pt={"4vh"}
          zIndex={10}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            spacing={2}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.facebook.com/Damdex"
                target="_blank"
              >
                <Image
                  src={fb}
                  alt="fb"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                Damdex Indonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.instagram.com/damdexindonesia/?hl=en"
                target="_blank"
              >
                <Image
                  src={ig}
                  alt="ig"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.tiktok.com/@damdexindonesia"
                target="_blank"
              >
                <Image
                  src={tiktok}
                  alt="tiktok"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.youtube.com/user/DamdexIndonesia"
                target="_blank"
              >
                <YouTubeIcon
                  sx={{ color: "#FFF" }}
                  fontSize="large"
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                DamdexIndonesia
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color="#FFF"
            fontSize={"24px"}
            sx={{ width: "20vw" }}
          >
            Want to learn more about Damdex and Damdex Warna and how they can elevate your construction projects? Join
            the conversation on our social media for insights, tips, and expert advice!
          </Typography>
        </Stack>
      )}
      {!mobile && tab && (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={"3.5vw"}
          pt={"4vh"}
          zIndex={10}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            spacing={2}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.facebook.com/Damdex"
                target="_blank"
              >
                <Image
                  src={fb}
                  alt="fb"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                Damdex Indonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.instagram.com/damdexindonesia/?hl=en"
                target="_blank"
              >
                <Image
                  src={ig}
                  alt="ig"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.tiktok.com/@damdexindonesia"
                target="_blank"
              >
                <Image
                  src={tiktok}
                  alt="tiktok"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.youtube.com/user/DamdexIndonesia"
                target="_blank"
              >
                <YouTubeIcon
                  sx={{ color: "#FFF" }}
                  fontSize="large"
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                DamdexIndonesia
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color="#FFF"
            fontSize={"16px"}
            sx={{ width: "20vw" }}
          >
            Want to learn more about Damdex and Damdex Warna and how they can elevate your construction projects? Join
            the conversation on our social media for insights, tips, and expert advice!
          </Typography>
        </Stack>
      )}
      {mobile && !tab && (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={"3.5vw"}
          pt={"4vh"}
          zIndex={10}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            spacing={2}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.facebook.com/Damdex"
                target="_blank"
              >
                <Image
                  src={fb}
                  alt="fb"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                Damdex Indonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.instagram.com/damdexindonesia/?hl=en"
                target="_blank"
              >
                <Image
                  src={ig}
                  alt="ig"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.tiktok.com/@damdexindonesia"
                target="_blank"
              >
                <Image
                  src={tiktok}
                  alt="tiktok"
                  width={33}
                  height={33}
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                @DamdexIndonesia
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={4}
            >
              <IconButton
                href="https://www.youtube.com/user/DamdexIndonesia"
                target="_blank"
              >
                <YouTubeIcon
                  sx={{ color: "#FFF" }}
                  fontSize="large"
                />
              </IconButton>
              <Typography
                color="#FFF"
                alignContent={"center"}
              >
                DamdexIndonesia
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color="#FFF"
            sx={{ width: "20vw", fontSize: { xs: "12px", md: "20px", xl: "24px" } }}
          >
            Want to learn more about Damdex and Damdex Warna and how they can elevate your construction projects? Join
            the conversation on our social media for insights, tips, and expert advice!
          </Typography>
        </Stack>
      )}
      <Typography
        textAlign={"center"}
        color="#FFF"
        sx={{ mt: { xs: "8vh", lg: "12vh" } }}
      >
        © PT Prima Graha Bangun Tunggal. All rights reserved 2024
      </Typography>
    </Box>
  );
};
