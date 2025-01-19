import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import gallery1 from "../../public/gallery 1.png";
import gallery2 from "../../public/gallery 2.png";
import gallery3 from "../../public/gallery 3.png";
import gallery4 from "../../public/gallery 4.png";
import gallery5 from "../../public/gallery 5.png";
import gallery6 from "../../public/gallery 6.png";

export const FiftSection = () => {
  return (
    <Box sx={{ width: "100vw", height: "120vh" }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={3} pt={"5vh"} pb={"2vh"} data-aos="fade-up" data-aos-easing="ease-in-out">
        <Typography variant="h2" fontWeight={800}>
          Gallery
        </Typography>
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(89.87deg, #B94BBC 36.63%, #3557C4 67.38%, #9CD942 98.61%, #F4CB37 134.24%)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Events
        </Typography>
      </Stack>
      <Stack spacing={2} alignItems={"center"} justifyItems={"center"}>
        <Stack direction={"row"} spacing={3}>
          <Image alt="gallery1" src={gallery1} style={{ width: "64.167vw", height: "48.242vh" }} data-aos="fade-right" data-aos-easing="ease-in-out" />
          <Stack direction={"column"} spacing={1.5}>
            <Image alt="gallery2" src={gallery2} style={{ width: "31.25vw", height: "23.828vh" }} data-aos="fade-left" data-aos-easing="ease-in-out" />
            <Image alt="gallery3" src={gallery3} style={{ width: "31.25vw", height: "23.828vh" }} data-aos="fade-up" data-aos-easing="ease-in-out" />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <Stack direction={"column"} spacing={1.5}>
            <Image alt="gallery5" src={gallery5} style={{ width: "31.25vw", height: "23.828vh" }} data-aos="fade-right" data-aos-easing="ease-in-out" />
            <Image alt="gallery4" src={gallery4} style={{ width: "31.25vw", height: "23.828vh" }} data-aos="fade-right" data-aos-easing="ease-in-out" />
          </Stack>
          <Image alt="gallery6" src={gallery6} style={{ width: "64.167vw", height: "48.242vh" }} data-aos="fade-up" data-aos-easing="ease-in-out" />
        </Stack>
      </Stack>
    </Box>
  );
};
