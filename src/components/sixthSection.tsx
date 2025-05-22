import { Box, Stack, Typography } from "@mui/material";
import bg from "../../public/bg2.png";
import img from "../../public/toko.jpg";
import { OutlinedButton } from "./button";
import { useRouter } from "next/navigation";

export const SixthSection = ({ noBackground }: { noBackground?: boolean }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100vw",
        background: noBackground ? null : `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
        pt: { xs: "10vh", sm: "10vh", md: "10vh", lg: "5vh" },
      }}
    >
      <Box
        sx={{
          width: { xs: "95vw", sm: "75vw" },
          height: "57vh",
          background: `linear-gradient(77.88deg, rgba(185, 75, 188, 0.8) -3.14%, rgba(53, 87, 196, 0.8) 27%, rgba(156, 217, 66, 0.8) 94.16%), url(${img.src})`,
          backgroundSize: "cover",
          borderRadius: "25px",
          mx: "auto",
        }}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "13vh", xl: "18vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "25px", sm: "50px", lg: "60px" } }}
          >
            Toko / Traditional Market / Toko Material
          </Typography>
          <OutlinedButton
            label="Find"
            onClick={() => router.push("/lokasi-toko")}
          />
        </Stack>
      </Box>
    </Box>
  );
};
