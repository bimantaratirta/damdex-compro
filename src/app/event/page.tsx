"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "@/../public/bguse.png";
import img1 from "@/../public/event1.png";
import img2 from "@/../public/event2.png";
import img3 from "@/../public/event3.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const theme = useTheme();
  const tab = useMediaQuery(theme.breakpoints.down("lg"));
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
          p: 12,
          "&::before": {
            content: "''",
            backgroundImage: `url(${background.src})`,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: { lg: "200vh", md: "300vh" },
            backgroundSize: "cover",
            zIndex: -1,
            opacity: 0.2,
          },
        }}
      >
        <Typography
          textAlign={"center"}
          mt={5}
          fontWeight={800}
          width={"30vw"}
          mx={"auto"}
          sx={{ fontSize: { lg: "75px", md: "50px" } }}
        >
          Event Gallery
        </Typography>
        {!tab && (
          <Grid2
            container
            spacing={5}
            mt={15}
          >
            {data.map((d, idx) => (
              <div
                onClick={() => router.push(`/event/detail/${idx}`)}
                key={idx}
              >
                <Stack
                  spacing={2}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Image
                    src={d.img}
                    alt="abc"
                    width={530}
                    height={300}
                    style={{ borderRadius: "25px" }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight={800}
                  >
                    {d.name}
                  </Typography>
                </Stack>
              </div>
            ))}
          </Grid2>
        )}
        {tab && (
          <Grid2
            container
            spacing={5}
            mt={15}
          >
            {data.map((d, idx) => (
              <div
                onClick={() => router.push(`/event/detail/${idx}`)}
                key={idx}
              >
                <Stack
                  spacing={2}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Image
                    src={d.img}
                    alt="abc"
                    width={250}
                    height={175}
                    style={{ borderRadius: "25px" }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight={800}
                  >
                    {d.name}
                  </Typography>
                </Stack>
              </div>
            ))}
          </Grid2>
        )}
        <Pagination
          count={10}
          shape="rounded"
          size="large"
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
