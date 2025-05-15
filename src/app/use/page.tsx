"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { AppLayout } from "@/components/appLayout";
import background from "@/../public/bguse.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "@/../public/damdexforhome.png";
import img2 from "@/../public/damdexforpro.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <Box
        sx={{
          width: "100vw",
          background: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: "90vh", md: "135vh", lg: "75vh" },
        }}
      >
        <Typography
          fontSize={"80px"}
          fontWeight={500}
          textAlign={"center"}
          pt={22.5}
          width={"60vw"}
          margin={"auto"}
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
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#FFF",
                width: { xs: "50vw", sm: "14.097vw" },
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: { xs: 16, sm: 20, lg: 24 },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              },
            }}
            onClick={() => router.push("/use/detail")}
          >
            Learn More
          </Button>
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
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#FFF",
                width: { xs: "50vw", sm: "14.097vw" },
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: { xs: 16, sm: 20, lg: 24 },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              },
            }}
            onClick={() => router.push("/use/detail")}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
