import { Box, IconButton, Stack, Typography } from "@mui/material";
import tiktok from "../../public/ytb 1.png";
import fb from "../../public/fb 1.png";
import ig from "../../public/fb 2.png";
import Image, { StaticImageData } from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  const sosmed = [
    { img: fb, href: "https://www.facebook.com/Damdex", label: "Damdex Indonesia" },
    { img: ig, href: "https://www.instagram.com/damdexindonesia/?hl=en", label: "@DamdexIndonesia" },
    { img: tiktok, href: "https://www.tiktok.com/@damdexindonesia", label: "@DamdexIndonesia" },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "rgba(36,36,36,1)",
        minHeight: { lg: "80vh", md: "70vh", xs: "60vh" },
        p: { md: 10, sm: 5, xs: 1 },
      }}
    >
      <Typography
        color="#FFF"
        fontWeight={800}
        variant="h3"
        pt={"3vh"}
        textAlign={"left"}
        width={"80vw"}
        sx={{ fontSize: { xs: "16px", md: "28px", lg: "48px" }, width: "50vw" }}
      >
        Find Us on Social Media or your Favorite Store
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        // px={"3.5vw"}
        pt={"4vh"}
        zIndex={10}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          spacing={2}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
        >
          {sosmed.map((d, i) => (
            <SosmedButton
              key={i}
              href={d.href}
              img={d.img}
              label={d.label}
            />
          ))}
          <Stack
            direction={"row"}
            spacing={2}
          >
            <IconButton
              href="https://www.youtube.com/user/DamdexIndonesia"
              target="_blank"
            >
              <YouTubeIcon sx={{ color: "#FFF", fontSize: { xs: "16px", md: "20px", lg: "30px", xl: "50px" } }} />
            </IconButton>
            <Typography
              color="#FFF"
              alignContent={"center"}
              fontSize={{ xl: "32px", lg: "20px", md: "16px", sm: "16px", xs: "12px" }}
            >
              DamdexIndonesia
            </Typography>
          </Stack>
        </Stack>
        <Typography
          color="#FFF"
          fontSize={{ lg: "20px", md: "16px", sm: "12px", xs: "10px" }}
          width={{ xs: "25vw" }}
        >
          Want to learn more about Damdex and Damdex Warna and how they can elevate your construction projects? Join the
          conversation on our social media for insights, tips, and expert advice!
        </Typography>
      </Stack>
      <Typography
        textAlign={"center"}
        color="#FFF"
        sx={{ mt: { xs: "8vh", lg: "12vh" } }}
        fontSize={{ md: "16px", xs: "12px" }}
      >
        © PT Prima Graha Bangun Tunggal. All rights reserved 2024
      </Typography>
    </Box>
  );
};

const SosmedButton = ({ img, href, label }: { img: StaticImageData | string; href: string; label: string }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
    >
      <IconButton
        href={href}
        target="_blank"
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "12px", sm: "16px", md: "20px", lg: "30px", xl: "50px" },
            height: { xs: "12px", sm: "16px", md: "20px", lg: "30px", xl: "50px" },
          }}
        >
          <Image
            src={img}
            alt="fb"
            fill
          />
        </Box>
      </IconButton>
      <Typography
        color="#FFF"
        alignContent={"center"}
        fontSize={{ xl: "32px", lg: "20px", md: "16px", sm: "16px", xs: "12px" }}
      >
        {label}
      </Typography>
    </Stack>
  );
};
