import { Box, Typography, Grid2, Stack } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const OtherListSection = ({
  data,
  variant,
}: {
  data?: { img: StaticImageData | string; title: string; id: number }[];
  variant: "Projects" | "Events" | "News";
}) => {
  const router = useRouter();
  return (
    <Box sx={{ pt: 2, display: "flex", justifyContent: "center", flexDirection: "column" }}>
      {data && data.length !== 0 && (
        <>
          <Typography
            fontWeight={800}
            mb={4}
            fontSize={{ lg: "30px", md: "24px" }}
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
                  onClick={() => {
                    if (variant === "Projects") router.push(`/projects/detail/${d.id}`);
                    if (variant === "News") router.push(`/news/detail/${d.id}`);
                    if (variant === "Events") router.push(`/event/detail/${d.id}`);
                  }}
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
                          width: { xl: "29vw", lg: "28vw", md: "40vw", sm: "85vw", xs: "80vw" },
                          height: { xl: "250px", md: "180px", sm: "280px", xs: "200px" },
                        }}
                      >
                        <Image
                          src={d.img}
                          alt="project"
                          fill
                          style={{ borderRadius: "25px", objectFit: "cover" }}
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
