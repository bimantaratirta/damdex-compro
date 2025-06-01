import { Box, Stack, Typography } from "@mui/material";
import logo from "../../public/Damdex Multifungsi Logo.png";
import Image from "next/image";
import { useLanguage } from "./localStorageProvider";
import { useHome } from "@/swr-hooks/home/useHome";

export const SecondSection = () => {
  const { language } = useLanguage();
  const { data } = useHome({ lang: language, section: 2 });
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
            backgroundImage: `url(${
              data?.data.find((data) => data.key === "section-2-top-left-image-background")?.fileUrl
            })`,
            backgroundSize: "cover",
            display: "block",
            filter: { md: "grayscale(100%)" },
            "&:hover": {
              backgroundImage: `url(${
                data?.data.find((data) => data.key === "section-2-top-left-image-background")?.fileUrl
              })`,
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
              {data?.data.find((data) => data.key === "section-2-top-left-title")?.content}
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
              {data?.data.find((data) => data.key === "section-2-top-left-description")?.content}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-top-right-image-background")?.fileUrl
            })`,
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
              {data?.data.find((data) => data.key === "section-2-top-right-title")?.content}
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
              {data?.data.find((data) => data.key === "section-2-top-right-description")?.content}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack sx={{ mx: { xs: 0, md: "5vw" }, flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-bottom-left-image-background")?.fileUrl
            })`,
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
              {data?.data.find((data) => data.key === "section-2-bottom-left-title")?.content}
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
              {data?.data.find((data) => data.key === "section-2-bottom-left-description")?.content}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "30vh", md: "38vh" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-bottom-right-image-background")?.fileUrl
            })`,
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
              {data?.data.find((data) => data.key === "section-2-bottom-right-title")?.content}
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
              {data?.data.find((data) => data.key === "section-2-bottom-right-description")?.content}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
