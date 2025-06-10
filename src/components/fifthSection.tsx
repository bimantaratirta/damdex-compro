/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "./localStorageProvider";
import { useEvent } from "@/swr-hooks/eventGallery/useEvent";

export const FiftSection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = useLanguage();
  const { data, loading } = useEvent({ page: 1, limit: 3 });

  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "620px", sm: "650px", md: "400px", lg: "75vh", xl: "65vh" },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={1}
        pt={"2vh"}
        pb={"2vh"}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Typography
          variant="h2"
          fontWeight={800}
          fontSize={{ md: "60px", xs: "30px" }}
        >
          Gallery
        </Typography>
        <Typography
          variant="h2"
          fontWeight={800}
          fontSize={{ md: "60px", xs: "30px" }}
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(89.87deg, #B94BBC 36.63%, #3557C4 67.38%, #9CD942 98.61%, #F4CB37 134.24%)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Events
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        alignItems={"center"}
        justifyItems={"center"}
      >
        {mobile && data && (
          <Stack
            direction={"column"}
            spacing={3}
          >
            {data.data.payload.map((data, idx) => (
              <Box
                sx={{ width: "80vw", height: { xs: "180px", sm: "200px" }, position: "relative" }}
                key={idx}
              >
                <Image
                  alt={`gallery${idx}`}
                  src={data.heroImageUrl}
                  objectFit="cover"
                  fill
                  data-aos={idx === 2 ? "fade-left" : "fade-right"}
                  data-aos-easing="ease-in-out"
                />
              </Box>
            ))}
          </Stack>
        )}
        {!mobile && data && (
          <>
            <Stack
              direction={"row"}
              spacing={3}
            >
              <Box
                sx={{
                  position: "relative",
                  width: data.data.payload.length > 1 ? "64.167vw" : "100vw",
                  height: { md: "300px", xl: "500px" },
                }}
              >
                <Image
                  alt="gallery1"
                  src={data.data.payload[0].heroImageUrl}
                  fill
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  objectFit="cover"
                />
              </Box>
              {data.data.payload.length > 1 && (
                <Stack
                  direction={"column"}
                  spacing={1.5}
                >
                  <Box sx={{ position: "relative", width: "31.25vw", height: { md: "144px", xl: "244px" } }}>
                    <Image
                      alt="gallery2"
                      src={data.data.payload[1].heroImageUrl}
                      fill
                      objectFit="cover"
                      data-aos="fade-left"
                      data-aos-easing="ease-in-out"
                    />
                  </Box>
                  <Box sx={{ position: "relative", width: "31.25vw", height: { md: "144px", xl: "244px" } }}>
                    <Image
                      alt="gallery3"
                      src={data.data.payload[2].heroImageUrl}
                      fill
                      objectFit="cover"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-out"
                    />
                  </Box>
                </Stack>
              )}
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};
