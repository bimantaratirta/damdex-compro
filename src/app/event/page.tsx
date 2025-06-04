"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Grid2, Pagination, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEvent } from "@/swr-hooks/eventGallery/useEvent";
import { usePaginationData } from "@/lib/usePaginationData";
import { useLanguage } from "@/components/localStorageProvider";

const Page = () => {
  const router = useRouter();
  const isTall = useMediaQuery("(min-height: 1200px)");
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("md"));

  const { pagination, handlePaginationModelChange } = usePaginationData({ pageIndex: 1, pageSize: 9 });
  const { language } = useLanguage();
  const { data: events } = useEvent({ limit: pagination.pageSize, page: pagination.pageIndex });

  return (
    <AppLayout>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#e8e0fd",
        }}
      >
        <Typography
          textAlign={"center"}
          mt={{ lg: 5, sm: 8, xs: 5 }}
          fontWeight={800}
          width={"30vw"}
          mx={"auto"}
          sx={{ fontSize: { lg: "75px", md: "50px", xs: "40px" } }}
        >
          Event Gallery
        </Typography>
        <Grid2
          container
          mt={5}
          spacing={{ lg: 4, md: 2, sm: 6, xs: 5 }}
          justifyContent={"center"}
        >
          {events?.data.payload.map((d, idx) => (
            <div
              onClick={() => router.push(`/event/detail/${d.id}`)}
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
                      width: { lg: "28vw", md: "28vw", xs: "80vw" },
                      height: isTall
                        ? { xl: "25vh", lg: "12vh", md: "10vh", sm: "15vh", xs: "20vh" }
                        : { xl: "25vh", lg: "28vh", md: "150px", sm: "250px", xs: "180px" },
                    }}
                  >
                    <Image
                      src={d.heroImageUrl}
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
                    {language === "id" ? d.titleIDN : d.titleENG}
                  </Typography>
                </Stack>
              </Grid2>
            </div>
          ))}
        </Grid2>
        <Pagination
          siblingCount={1}
          count={events?.data.totalPage}
          shape="rounded"
          size={phone ? "small" : "large"}
          page={pagination.pageIndex}
          onChange={(_, val) => handlePaginationModelChange({ pageIndex: val, pageSize: pagination.pageSize })}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: 5 }}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
