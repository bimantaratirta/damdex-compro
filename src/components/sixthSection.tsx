import { Box, Stack, Typography } from "@mui/material";
import bg from "../../public/bg2.png";
import img from "../../public/toko.jpg";
import { OutlinedButton } from "./button";
import { useRouter } from "next/navigation";
import { useLanguage } from "./localStorageProvider";

export const SixthSection = ({ noBackground }: { noBackground?: boolean }) => {
  const router = useRouter();
  const { language } = useLanguage();
  return (
    <Box
      sx={{
        width: "100vw",
        background: noBackground ? null : `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "300px", sm: "350px", md: "500px", xl: "600px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "95vw", sm: "75vw" },
          height: { xs: "250px", sm: "300px", md: "380px", lg: "380px", xl: "450px" },
          background: `linear-gradient(77.88deg, rgba(185, 75, 188, 0.8) -3.14%, rgba(53, 87, 196, 0.8) 27%, rgba(156, 217, 66, 0.8) 94.16%), url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: { xs: "20px", sm: "25px" },
          mx: "auto",
          mt: { xs: "100px", sm: "125px", md: "75px", lg: "50px", xl: "100px" },
        }}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "75px", sm: "80px", md: "100px", lg: "100px", xl: "120px" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "20px", sm: "24px", md: "40px", lg: "50px", xl: "60px" } }}
          >
            {language === "id" ? "Toko / Traditional Market / Toko Material" : "Shop / Traditional Market / Grocery Store"}
          </Typography>
          <OutlinedButton label={language === "id" ? "Cari" : "Find"} onClick={() => router.push("/lokasi-toko")} />
        </Stack>
      </Box>
    </Box>
  );
};
