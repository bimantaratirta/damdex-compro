import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/section3-1.png";
import image2 from "../../public/section3-2.png";

export const ThirdSection = () => {
  return (
    <Box sx={{ width: "100vw", height: "180vh", position: "relative" }}>
      <Stack alignItems={"center"} mb="2vh">
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Typography variant="h2" fontWeight={800}>
            Damdex
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
            Warna
          </Typography>
        </Stack>
        <Typography variant="h5">Pioneer of Waterproofing Innovation</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Image alt="image1" src={image1} style={{ width: "90vw", height: "79vh", backgroundSize: "cover" }} />
        <Image alt="image2" src={image2} style={{ width: "90vw", height: "79vh", backgroundSize: "cover" }} />
      </Stack>
      <div>
        <Box sx={{ height: "11vh", width: "58vw", mx: "auto", position: "absolute", top: "84vh", left: "23vw", zIndex: 5 }}>
          <Stack alignItems={"center"}>
            <Typography variant="h3" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
              CONFIDENCE IN EVERY DROP
            </Typography>
            <Typography variant="h1" fontWeight={800} color="#FFF" width={"80vw"} textAlign={"center"}>
              WATERPROOF
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ height: "6vh", width: "45vw", backgroundColor: "#37B878", alignSelf: "center", position: "absolute", top: "87vh", left: "29.3vw" }} />
      </div>
    </Box>
  );
};
