"use client";
import { AppLayout } from "@/components/appLayout";
import background from "@/../public/bguse.png";
import { Box, Stack, Typography } from "@mui/material";
import img1 from "@/../public/damdexforhome.png";
import img2 from "@/../public/damdexforpro.png";
import { useRouter } from "next/navigation";
import { OutlinedButton } from "@/components/button";
import { useLanguage } from "@/components/localStorageProvider";

const Page = () => {
  const router = useRouter();
  const { language } = useLanguage();
  return (
    <AppLayout>
      <Box
        sx={{
          pt: { xs: 12, sm: 15, md: 8, lg: 10, xl: 18 },
          width: "100vw",
          background: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { sm: "250px", md: "300px", lg: "300px", xl: "500px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 16, sm: 20, md: 25, lg: 40, xl: 50 } }}
          fontWeight={500}
          pt={{ xl: 5, lg: 3, md: 10, sm: 0 }}
          pb={{ xs: 5, sm: 0 }}
          textAlign={"center"}
          width={"80vw"}
        >
          {language === "eng"
            ? "These are the respective ways of using Damdex for your needs in each sector."
            : "Berikut adalah masing-masing cara penggunaan Damdex untuk kebutuhan Anda di setiap sektor."}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { xs: "200px", sm: "250px", md: "300px", lg: "400px", xl: "500px" },
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0.7) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img1.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={2}
          sx={{ pt: { xs: 8, sm: 10, md: 12, lg: 18, xl: 22 } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            sx={{ fontSize: { xs: "25px", sm: "32px", lg: "50px", xl: "60px" } }}
          >
            {language === "eng" ? "Damdex For Your Home" : "Damdex Untuk Rumah Anda"}
          </Typography>
          <OutlinedButton
            onClick={() => router.push("/use/for-your-home")}
            label="Learn More"
          />
        </Stack>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { xs: "200px", sm: "250px", md: "300px", lg: "400px", xl: "500px" },
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={2}
          sx={{ pt: { xs: 8, sm: 10, md: 12, lg: 18, xl: 22 } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            sx={{ fontSize: { xs: "25px", sm: "32px", lg: "50px", xl: "60px" } }}
          >
            {language === "eng" ? "Damdex For Professional" : "Damdex Untuk Professional"}
          </Typography>
          <OutlinedButton
            onClick={() => router.push("/use/for-professional")}
            label="Learn More"
          />
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
