import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/section3-1.png";
import image2 from "../../public/section3-2.png";
import logowarna from "../../public/Damdex Warna Logo-01.png";

export const ThirdSection = () => {
  return (
    <Box sx={{ width: "100vw", height: "180vh", position: "relative" }}>
      <Stack alignItems={"center"} justifyContent={"center"} direction="row" mb="2vh" data-aos="fade-up" data-aos-easing="ease-in-out">
        <Image src={logowarna} alt="logo" height={100} />
        <Typography variant="h5">Pioneer of Waterproofing Innovation</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Image alt="image1" src={image1} style={{ width: "90vw", height: "79vh", backgroundSize: "cover" }} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200" />
        <Image alt="image2" src={image2} style={{ width: "90vw", height: "79vh", backgroundSize: "cover" }} />
      </Stack>
      <div>
        <Box sx={{ height: "11vh", width: "58vw", mx: "auto", position: "absolute", top: "84vh", left: "23vw", zIndex: 5 }} data-aos="fade-up" data-aos-easing="ease-in-out">
          <Stack alignItems={"center"}>
            <Typography variant="h3" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
              CONFIDENCE IN EVERY DROP
            </Typography>
            <Typography variant="h1" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
              WATERPROOF
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ height: "6vh", width: "45vw", backgroundColor: "#37B878", alignSelf: "center", position: "absolute", top: "87vh", left: "29.3vw" }} data-aos="fade-up" data-aos-easing="ease-in-out" />
      </div>
    </Box>
  );
};
