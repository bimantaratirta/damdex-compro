/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "../../public/bg1.png";
import Image, { StaticImageData } from "next/image";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";
import { useRouter } from "next/navigation";
import { useLanguage } from "./localStorageProvider";
import { useNews } from "@/swr-hooks/news/useNews";

export const FourthSection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const { language } = useLanguage();
  const { data, loading } = useNews({ limit: 2, page: 1 });
  const isTall = useMediaQuery("(min-height: 1200px)");

  const newsData = [
    {
      img: news1,
      title: "Damdex Can Save You Billions Of Rupiah On Construction. Here's How",
      description:
        "Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor today and start building better, faster, stronger.",
    },
    {
      img: news2,
      title: "Damdex Can Save You Billions Of Rupiah On Construction. Here's How",
      description:
        "Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor today and start building better, faster, stronger.",
    },
  ];

  const phoneNewsData = [
    {
      img: news1,
      title: "Damdex Can Save You Billions Of Rupiah On Construction. Here's How",
      description:
        "Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor today and start building better, faster, stronger.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: isTall
          ? { xs: "95vh", sm: "82vh", lg: "106vh" }
          : { xs: "700px", sm: "82vh", md: "95vh", lg: "120vh", xl: "100vh" },
      }}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={1}
        sx={{ pt: { xs: "5vh", md: "6vh" } }}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Typography
          variant="h2"
          fontWeight={800}
          fontSize={{ xs: "20px", md: "60px" }}
        >
          Read Our
        </Typography>
        <Typography
          variant="h2"
          fontWeight={800}
          fontSize={{ xs: "20px", md: "60px" }}
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(89.18deg,  #3557C4 57.54%, #9CD942 76.72%, #F4CB37 98.6%)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          News
        </Typography>
      </Stack>
      <Stack
        justifyContent={"center"}
        spacing={4}
        direction={"row"}
        pt={{ xs: 0, md: 2, xl: 8 }}
      >
        {mobile &&
          phoneNewsData.map((d, i) => (
            <div
              key={i}
              onClick={() => router.push(`/news/detail/${i}`)}
              style={{ cursor: "pointer" }}
            >
              <NewsContent
                img={d.img}
                title={d.title}
                description={d.description}
              />
            </div>
          ))}
        {!mobile &&
          newsData.map((d, i) => (
            <div
              key={i}
              onClick={() => router.push(`/news/detail/${i}`)}
              style={{ cursor: "pointer" }}
            >
              <NewsContent
                img={d.img}
                title={d.title}
                description={d.description}
              />
            </div>
          ))}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={1}
        pt={{ xs: 2, xl: 5 }}
      >
        <Typography
          variant="caption"
          fontWeight={800}
          fontSize={{ xs: "20px" }}
        >
          Read Other news
        </Typography>
      </Stack>
    </Box>
  );
};

const NewsContent = ({
  img,
  title,
  description,
}: {
  img: string | StaticImageData;
  title: string;
  description: string;
}) => {
  const isTall = useMediaQuery("(min-height: 1200px)");
  return (
    <Stack
      justifyContent={{ xs: "center", md: "left" }}
      alignContent={{ xs: "center" }}
      alignItems={{ xs: "center", md: "left" }}
      p={{ xs: 2, md: 5, lg: 0 }}
      spacing={1}
      width={"45vw"}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "75vw", md: "45vw" },
          height: isTall ? { xs: "30vh", sm: "36vh", md: "30vh", lg: "48vh" } : { xs: "30vh", sm: "36vh", lg: "48vh" },
        }}
      >
        <Image
          alt="news"
          src={img}
          fill
          style={{ borderRadius: 25 }}
        />
      </Box>
      <Stack
        spacing={2}
        width={{ xs: "75vw", md: "45vw" }}
      >
        <Typography
          variant="h5"
          color="#242424"
          fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "18px" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="#7B7B7B"
          fontSize={{ lg: "20px", md: "20px", sm: "18px", xs: "16px" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
