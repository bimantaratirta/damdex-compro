import { Box, Stack, Typography, Link } from "@mui/material";
import logo from "../../public/Damdex Multifungsi Logo.png";
import Image from "next/image";
import { useLanguage } from "./localStorageProvider";
import { useHome } from "@/swr-hooks/home/useHome";

export const SecondSection = () => {
  const { language } = useLanguage();
  const { data } = useHome({ lang: language, section: 2 });
  return (
    <Box sx={{ minHeight: { xs: "1180px", sm: "1380px", md: "750px", lg: "100vh" } }}>
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
          sx={{
            width: { xs: "50vw", md: "30vw", lg: "25vw" },
            height: { xs: "100px", sm: "125px", md: "125px", xl: "175px" },
          }}
        >
          <Image
            alt="logo"
            priority
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
            height: { xs: "250px", sm: "300px", md: "300px", lg: "300px", xl: "300px" },
            backgroundImage: `url(${
              data?.data.find((data) => data.key === "section-2-top-left-image-background")?.fileUrl
            })`,
            backgroundSize: "cover",
            display: "block",
            filter: "grayscale(100%)",
            "&:hover": {
              backgroundImage: `url(${
                data?.data.find((data) => data.key === "section-2-top-left-image-background")?.fileUrl
              })`,
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos-anchor-placement="bottom-bottom"
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
              width={"fit-content"}
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "28px" },
                backgroundColor: "rgba(30,129,176,0.3)",
                pr: 2,
                py: "1px",
              }}
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
              sx={{
                width: { xs: "60vw", md: "20vw" },
                fontSize: { xs: "14px", lg: "16px" },
              }}
            >
              {data?.data.find((data) => data.key === "section-2-top-left-description")?.content}
            </Typography>
            <Link
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              href={
                language === "id"
                  ? "/use/for-your-home?composition=Campuran Kental&compositionId=2&usage=Penguat Beton&usageId=4"
                  : "/use/for-your-home?composition=Medium Mix&compositionId=2&usage=Concrete Reinforcement&usageId=4"
              }
              className="text-sm"
              style={{ color: "#FFF" }}
            >
              {language === "id" ? "Baca Selengkapnya" : "Read More"}
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "250px", sm: "300px", md: "300px", lg: "300px", xl: "300px" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-top-right-image-background")?.fileUrl
            })`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
            alignSelf: "end",
          }}
          data-aos-anchor-placement="bottom-bottom"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <Stack
            mr="3vw"
            mt="2vw"
            alignItems={"end"}
            sx={{ mr: { xs: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{
                width: "fit-content",
                fontSize: { xs: "14px", sm: "20px", lg: "28px" },
                backgroundColor: "rgba(30,129,176,0.3)",
                pl: 2,
                py: "1px",
              }}
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
              sx={{ width: { xs: "70vw", md: "20vw" }, fontSize: { xs: "16px", lg: "16px" } }}
            >
              {data?.data.find((data) => data.key === "section-2-top-right-description")?.content}
            </Typography>
            <Link
              href={
                language === "id"
                  ? "/use/for-your-home?composition=Campuran Cair&compositionId=1&usage=Pori&usageId=11"
                  : "/use/for-your-home?composition=Thin Mix&compositionId=1&usage=Pores&usageId=11"
              }
              className="text-sm"
              style={{ color: "#FFF" }}
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              {language === "id" ? "Baca Selengkapnya" : "Read More"}
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Stack sx={{ mx: { xs: 0, md: "5vw" }, flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "250px", sm: "300px", md: "300px", lg: "300px", xl: "300px" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-bottom-left-image-background")?.fileUrl
            })`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos-anchor-placement="bottom-bottom"
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
              sx={{
                fontSize: { xs: "14px", sm: "20px", lg: "28px" },
                width: "fit-content",
                backgroundColor: "rgba(30,129,176,0.3)",
                pr: 2,
                py: "1px",
              }}
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
              sx={{ width: { xs: "70vw", md: "30vw", lg: "20vw" }, fontSize: { xs: "14px", sm: "16px" } }}
            >
              {data?.data.find((data) => data.key === "section-2-bottom-left-description")?.content}
            </Typography>
            <Link
              href={
                language === "id"
                  ? "/use/for-your-home?composition=Campuran Padat&compositionId=3&usage=Plug&usageId=10"
                  : "/use/for-your-home?composition=Thick Mix&compositionId=3&usage=Plug&usageId=10"
              }
              className="text-sm"
              style={{ color: "#FFF" }}
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              {language === "id" ? "Baca Selengkapnya" : "Read More"}
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "45vw" },
            height: { xs: "250px", sm: "300px", md: "300px", lg: "300px", xl: "300px" },
            background: `url(${
              data?.data.find((data) => data.key === "section-2-bottom-right-image-background")?.fileUrl
            })`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
              transition: "filter 750ms linear",
            },
          }}
          data-aos-anchor-placement="bottom-bottom"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Stack
            mr="3vw"
            mt="2vw"
            alignItems={"end"}
            sx={{ mr: { xs: "3vw" } }}
          >
            <Typography
              color="#FFF"
              variant="h4"
              fontWeight={800}
              sx={{
                width: { xs: "fit-content" },
                fontSize: { xs: "14px", sm: "20px", md: "16px", lg: "20px", xl: "28px" },
                backgroundColor: "rgba(30,129,176,0.5)",
                pl: 2,
                py: "1px",
              }}
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
              sx={{ width: { xs: "70vw", md: "20vw" }, fontSize: { xs: "15px", lg: "16px" } }}
              color="#fff"
              fontWeight={400}
              textAlign={"end"}
            >
              {data?.data.find((data) => data.key === "section-2-bottom-right-description")?.content}
            </Typography>
            <Link
              href={
                language === "id"
                  ? "/use/for-professional?composition=Campuran Padat&compositionId=7&usage=Pemasangan Keramik dalam Air&usageId=17"
                  : "/use/for-professional?composition=Thick Mix&compositionId=7&usage=Underwater Ceramic Installation&usageId=17"
              }
              className="text-sm"
              style={{ color: "#FFF" }}
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              {language === "id" ? "Baca Selengkapnya" : "Read More"}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
