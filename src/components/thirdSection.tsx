import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image2 from "../../public/section3b.png";
import logowarna from "../../public/Damdex Warna Logo-01.png";
import background from "../../public/bg3.png";
import { useLanguage } from "./localStorageProvider";
import { useHome } from "@/swr-hooks/home/useHome";

export const ThirdSection = () => {
  const { language } = useLanguage();
  const { data } = useHome({ lang: language, section: 3 });
  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "111vh", sm: "111vh", md: "157vh", lg: "190vh" },
        position: "relative",
        pt: { md: 2 },
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        direction="column"
        mb="2vh"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Box
          position={"relative"}
          sx={{ width: { xs: "50vw", md: "30vw", lg: "25vw" }, height: { xs: "15vh", lg: "20vh" } }}
        >
          <Image
            src={logowarna}
            alt="logo"
            fill
          />
        </Box>
        <Typography
          fontWeight={800}
          sx={{ fontSize: { xs: "16px", md: "24px", lg: "30px" } }}
          textAlign={"center"}
        >
          Pioneer of Waterproofing Innovation
        </Typography>
      </Stack>
      <Stack sx={{ alignItems: { md: "center" } }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "45vh", md: "65vh", lg: "79vh" },
            position: "relative",
            color: "#FFF",
            background: `url(${data?.data.find((data) => data.key === "section-3-image-background")?.fileUrl})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,1)",
          }}
        >
          <Stack
            ml="3vw"
            mt="4vw"
            zIndex={2}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{
                fontSize: { xs: "16px", sm: "24px", md: "32px", lg: "44px" },
                width: { xs: "30vw", md: "16vw", lg: "16vw", xl: "14vw" },
              }}
            >
              {data?.data.find((data) => data.key === "section-3-top-left-title")?.content}
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
              sx={{ width: { xs: "60vw", md: "20vw" }, fontSize: { xs: "9px", sm: "16px" } }}
            >
              {data?.data.find((data) => data.key === "section-3-top-left-description")?.content}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "90vw" },
            height: { xs: "45vh", md: "65vh", lg: "79vh" },
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
            height={{ xs: "40vh", md: "50vh", lg: "65vh", xl: "60vh" }}
            sx={{ mr: { xs: "3vw", sm: "7vw", md: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{ width: { xs: "60vw", md: "30vw" }, fontSize: { xs: "14px", sm: "22px", lg: "36px" } }}
              textAlign={"end"}
            >
              {data?.data.find((data) => data.key === "section-3-bottom-right-title")?.content}
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
              sx={{ width: { xs: "50vw", md: "20vw" }, fontSize: { xs: "9px", sm: "15px" } }}
              color="#fff"
              fontWeight={400}
              textAlign={"end"}
            >
              {data?.data.find((data) => data.key === "section-3-bottom-right-description")?.content}
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
            top: { xs: "64vh", sm: "60vh", md: "85vh", lg: "100vh" },
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
              width={{ xl: "60vw", sm: "80vw", xs: "60vw" }}
              textAlign={"center"}
              sx={{ fontSize: { xs: "18px", sm: "29px", md: "40px", lg: "48px", xl: "60px" } }}
            >
              {data?.data.find((data) => data.key === "section-3-center-title")?.content}
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
            top: { xs: "65vh", sm: "61vh", md: "86vh", lg: "103vh" },
            left: "29.3vw",
          }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        />
      </div>
    </Box>
  );
};
