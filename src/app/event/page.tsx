"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import background from "@/../public/bguse.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const data = [
    { img: background, name: "Event 1" },
    { img: background, name: "Event 2" },
    { img: background, name: "Event 3" },
    { img: background, name: "Event 4" },
    { img: background, name: "Event 5" },
    { img: background, name: "Event 6" },
    { img: background, name: "Event 7" },
    { img: background, name: "Event 8" },
    { img: background, name: "Event 9" },
  ];
  return (
    <AppLayout>
      <Box
        sx={{
          p: 12,
          "&::before": {
            content: "''",
            backgroundImage: `url(${background.src})`,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundSize: "cover",
            zIndex: -1,
            opacity: 0.1,
          },
        }}
      >
        <Typography textAlign={"center"} variant="h1" mt={5} fontWeight={800} width={"20vw"} mx={"auto"}>
          Event Gallery
        </Typography>
        <Grid2 container spacing={5} mt={15}>
          {data.map((d, idx) => (
            <div onClick={() => router.push(`/event/detail/${idx}`)} key={idx}>
              <Stack spacing={2} sx={{ "&:hover": { cursor: "pointer" } }}>
                <Image src={d.img} alt="abc" width={530} height={300} style={{ borderRadius: "25px" }} />
                <Typography variant="h4" fontWeight={800}>
                  {d.name}
                </Typography>
              </Stack>
            </div>
          ))}
        </Grid2>
      </Box>
    </AppLayout>
  );
};

export default Page;
