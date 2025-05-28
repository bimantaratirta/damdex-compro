import { Box, Typography, Grid2, Stack, useMediaQuery } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";

export const OtherListSection = ({
  data,
  variant,
}: {
  data?: { img: StaticImageData | string; title: string }[];
  variant: "Projects" | "Events" | "News";
}) => {
  const isTall = useMediaQuery("(min-height: 1200px)");
  return (
    <Box sx={{ pt: 2, display: "flex", justifyContent: "center", flexDirection: "column" }}>
      {data && data.length !== 0 && (
        <>
          <Typography
            fontWeight={800}
            mb={4}
            fontSize={{ lg: "30px", md: "20px" }}
          >
            Other {variant}
          </Typography>
          <Grid2
            container
            spacing={5}
            justifyContent={{ xs: "start", lg: "space-between" }}
          >
            {data &&
              data.map((d, idx) => (
                <div
                  onClick={() => console.log(`/projects/detail/${idx}`)}
                  key={idx}
                >
                  <Grid2 size={1}>
                    <Stack
                      spacing={2}
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: { xl: "25vw", lg: "25vw", md: "40vw", xs: "90vw" },
                          height: isTall
                            ? { xl: "30vh", lg: "30vh", md: "25vh", xs: "30vh" }
                            : { xl: "23vh", lg: "30vh", md: "20vh", sm: "280px", xs: "200px" },
                        }}
                      >
                        <Image
                          src={d.img}
                          alt="project"
                          fill
                          style={{ borderRadius: "25px" }}
                        />
                      </Box>
                      <Typography
                        fontSize={{ lg: "20px", md: "16px" }}
                        fontWeight={800}
                        width={{ xl: "20vw", lg: "20vw", md: "42vw", xs: "80vw" }}
                        textOverflow={"clip"}
                      >
                        {d.title}
                      </Typography>
                    </Stack>
                  </Grid2>
                </div>
              ))}
          </Grid2>
        </>
      )}
    </Box>
  );
};
