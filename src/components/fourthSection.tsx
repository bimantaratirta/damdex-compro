import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "../../public/bg1.png";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "./localStorageProvider";
import { useNews } from "@/swr-hooks/news/useNews";
import eng from "../locale/eng.json";
import id from "../locale/id.json";

export const FourthSection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const { language } = useLanguage();
  const { data } = useNews({ limit: mobile ? 1 : 2, page: 1 });
  const isTall = useMediaQuery("(min-height: 1200px)");

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
        {language === "eng" && (
          <Typography
            variant="h2"
            fontWeight={800}
            fontSize={{ xs: "20px", md: "60px" }}
          >
            Read our
          </Typography>
        )}
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
          {language === "eng" ? eng.newsTitle : id.newsTitle}
        </Typography>
      </Stack>
      <Stack
        justifyContent={"center"}
        spacing={4}
        direction={"row"}
        pt={{ xs: 0, md: 2, xl: 8 }}
      >
        {mobile &&
          data &&
          data.data.payload.map((d, i) => (
            <div
              key={i}
              onClick={() => router.push(`/news/detail/${i}`)}
              style={{ cursor: "pointer" }}
            >
              <NewsContent
                img={d.titleImageUrl}
                title={language === "eng" ? d.titleENG : d.titleIDN}
                description={language === "eng" ? d.contentENG : d.contentIDN}
              />
            </div>
          ))}
        {!mobile &&
          data &&
          data.data.payload.map((d, i) => (
            <div
              key={i}
              onClick={() => router.push(`/news/detail/${i}`)}
              style={{ cursor: "pointer" }}
            >
              <NewsContent
                img={d.titleImageUrl}
                title={language === "eng" ? d.titleENG : d.titleIDN}
                description={language === "eng" ? d.contentENG : d.contentIDN}
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
          {language === "eng" ? eng.otherNews : id.otherNews}
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
        <div
          className="line-clamp-3 xs:text-[16px] sm:text-[18px] md:text-[20px] xs:text-center md:text-left text-[#7B7B7B]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Stack>
    </Stack>
  );
};
