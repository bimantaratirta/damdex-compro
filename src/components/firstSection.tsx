import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import masdamdex from "../../public/masdamdex.gif";
import background from "../../public/bg1.png";

export const FirstSection = () => {
  return (
    <Box sx={{ width: "100vw", background: `url(${background.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      <Stack alignItems={"center"} width={"100vw"}>
        <Typography fontSize={"6vw"} pb="5vh" pt="12vh" fontWeight={800}>
          Better Faster Stronger
        </Typography>
        <Typography variant="h4" fontWeight={400}>
          Produk solusi beton bermutu tinggi, waterproof,
        </Typography>
        <Typography variant="h4" fontWeight={400} pb="2vh">
          dan fungsi istimewa lainnya.
        </Typography>
        <Image src={masdamdex} alt="maskot" width={630} />
      </Stack>
    </Box>
  );
};
