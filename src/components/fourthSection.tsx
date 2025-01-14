import { Box, Stack, Typography } from "@mui/material";
import background from "../../public/bg1.png";
import Image from "next/image";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";

export const FourthSection = () => {
  return (
    <Box sx={{ width: "100vw", background: `url(${background.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={3} pt={"10vh"}>
        <Typography variant="h2" fontWeight={800}>
          Read Our
        </Typography>
        <Typography
          variant="h2"
          fontWeight={800}
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
      <Stack alignContent={"center"} justifyContent={"center"} direction={"row"} spacing={5} mt={5}>
        <Box sx={{ width: "33vw", height: "70vh", justifyContent: "center" }}>
          <Image alt="news1" src={news1} style={{ width: "33vw", height: "48vh", borderRadius: 25 }} />
          <Stack alignContent={"center"} justifyContent={"center"} spacing={2}>
            <Typography variant="h5" color="#242424">
              Damdex Can Save You Billions Of Rupiah On Construction. Here&apos;s How
            </Typography>
            <Typography variant="h6" color="#7B7B7B">
              Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor today and start building better, faster, stronger.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "33vw", height: "70vh" }}>
          <Image alt="news2" src={news2} style={{ width: "33vw", height: "48vh", borderRadius: 25 }} />
          <Stack alignContent={"center"} justifyContent={"center"} spacing={2}>
            <Typography variant="h5" color="#242424">
              Damdex Can Save You Billions Of Rupiah On Construction. Here&apos;s How
            </Typography>
            <Typography variant="h6" color="#7B7B7B">
              Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor today and start building better, faster, stronger.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
