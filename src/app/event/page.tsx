"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography } from "@mui/material";
import background from "@/../public/bguse.png";
import img1 from "@/../public/event1.png";
import img2 from "@/../public/event2.png";
import img3 from "@/../public/event3.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const data = [
    { img: img1, name: "ACE JABAR" },
    { img: img2, name: "Event 2" },
    { img: img3, name: "Event 3" },
    { img: img1, name: "Event 4" },
    { img: img2, name: "Event 5" },
    { img: img3, name: "Event 6" },
    { img: img1, name: "Event 7" },
    { img: img2, name: "Event 8" },
    { img: img3, name: "Event 9" },
  ];
  return (
    <AppLayout>
      <Box
        sx={{
          p: 8,
          "&::before": {
            content: "''",
            backgroundImage: `url(${background.src})`,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: { xl: "200vh", md: "150vh", sm: "200vh", xs: "350vh" },
            backgroundSize: "cover",
            zIndex: -1,
            opacity: 0.2,
          },
        }}
      >
        <Typography
          textAlign={"center"}
          mt={{ lg: 5, md: 0, xs: 5 }}
          fontWeight={800}
          width={"30vw"}
          mx={"auto"}
          sx={{ fontSize: { lg: "75px", md: "50px", xs: "40px" } }}
        >
          Event Gallery
        </Typography>
        <Grid2
          container
          mt={10}
          spacing={{ lg: 4, md: 2, sm: 6, xs: 5 }}
          justifyContent={"center"}
        >
          {data.map((d, idx) => (
            <div
              onClick={() => router.push(`/event/detail/${idx}`)}
              key={idx}
            >
              <Grid2 size={{ md: 4, xs: 8 }}>
                <Stack
                  spacing={2}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { lg: "25vw", md: "25vw", sm: "30vw", xs: "50vw" },
                      height: { xl: "25vh", md: "15vh", sm: "15vh", xs: "20vh" },
                    }}
                  >
                    <Image
                      src={d.img}
                      alt="event"
                      fill
                      style={{ borderRadius: "25px" }}
                    />
                  </Box>
                  <Typography
                    fontSize={{ lg: "30px", md: "20px" }}
                    fontWeight={800}
                    width={{ xl: "25vw", md: "25vw" }}
                    textOverflow={"clip"}
                  >
                    {d.name}
                  </Typography>
                </Stack>
              </Grid2>
            </div>
          ))}
        </Grid2>
        <Pagination
          count={5}
          shape="rounded"
          size="small"
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
