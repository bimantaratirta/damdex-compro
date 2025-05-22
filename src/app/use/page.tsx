"use client";
import { AppLayout } from "@/components/appLayout";
import background from "@/../public/bguse.png";
import { Box, Stack, Typography } from "@mui/material";
import img1 from "@/../public/damdexforhome.png";
import img2 from "@/../public/damdexforpro.png";
import { useRouter } from "next/navigation";
import { OutlinedButton } from "@/components/button";

const Page = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <Box
        sx={{
          pt: { sm: 18, xs: 12 },
          width: "100vw",
          background: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { sm: "25vh", md: "50vh", lg: "50vh" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 16, sm: 20, md: 40, lg: 60, xl: "60px" } }}
          fontWeight={500}
          pt={{ xl: 1, lg: 5, md: 3, sm: 0 }}
          pb={{ xs: 5, sm: 0 }}
          textAlign={"center"}
          width={"80vw"}
        >
          These are the respective ways of using Damdex for your needs in each sector.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "65vh",
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0.7) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img1.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "21.5vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}
          >
            Damdex For Your Home
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
          height: "65vh",
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "21.5vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}
          >
            Damdex For Professional
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
