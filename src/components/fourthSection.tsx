import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "../../public/bg1.png";
import Image from "next/image";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";
import { useRouter } from "next/navigation";

export const FourthSection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100vw",
        background: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "110vh", sm: "95vh", md: "115vh", lg: "95vh" },
      }}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
    >
      {mobile && (
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
          sx={{ pt: { xs: "5vh", md: "6vh" } }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Typography
            variant="h2"
            fontWeight={800}
          >
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
      )}
      {!mobile && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
          sx={{ pt: { xs: "5vh", md: "6vh" } }}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Typography
            variant="h2"
            fontWeight={800}
          >
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
      )}
      <Stack
        alignContent={"center"}
        justifyContent={"center"}
        direction={"row"}
        spacing={5}
        mt={5}
      >
        {mobile && (
          <Box
            sx={{ width: "90vw", height: "70vh", justifyContent: "center" }}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            <Box sx={{ position: "relative", width: "90vw", height: "45vh" }}>
              <Image
                alt="news1"
                src={news1}
                fill
                style={{ borderRadius: 25 }}
              />
            </Box>
            <Stack
              alignContent={"center"}
              justifyContent={"center"}
              spacing={2}
              pt={2}
            >
              <Typography
                variant="h5"
                color="#242424"
                align="center"
                fontSize={18}
              >
                Damdex Can Save You Billions Of Rupiah On Construction. Here&apos;s How
              </Typography>
              <Typography
                variant="h6"
                color="#7B7B7B"
                align="center"
                fontSize={14}
              >
                Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor
                today and start building better, faster, stronger.
              </Typography>
            </Stack>
          </Box>
        )}
        {!mobile && (
          <>
            <div
              onClick={() => router.push("news/detail/abc")}
              style={{ cursor: "pointer" }}
            >
              <Box
                sx={{ width: "33vw", height: "70vh", justifyContent: "center" }}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <Box sx={{ position: "relative", width: "33vw", height: { sm: "36vh", xl: "48vh" } }}>
                  <Image
                    alt="news1"
                    src={news1}
                    fill
                    style={{ borderRadius: 25 }}
                  />
                </Box>
                <Stack
                  alignContent={"center"}
                  justifyContent={"center"}
                  spacing={2}
                  pt={2}
                >
                  <Typography
                    variant="h5"
                    color="#242424"
                    fontSize={{ lg: "24px", md: "16px" }}
                  >
                    Damdex Can Save You Billions Of Rupiah On Construction. Here&apos;s How
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#7B7B7B"
                    fontSize={{ lg: "20px", md: "14px" }}
                  >
                    Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor
                    today and start building better, faster, stronger.
                  </Typography>
                </Stack>
              </Box>
            </div>
            <div
              onClick={() => router.push("news/detail/abc")}
              style={{ cursor: "pointer" }}
            >
              <Box
                sx={{ width: "33vw", height: "70vh" }}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
              >
                <Box sx={{ position: "relative", width: "33vw", height: { sm: "36vh", xl: "48vh" } }}>
                  <Image
                    alt="news2"
                    src={news2}
                    fill
                    style={{ borderRadius: 25 }}
                  />
                </Box>
                <Stack
                  alignContent={"center"}
                  justifyContent={"center"}
                  spacing={2}
                  pt={2}
                >
                  <Typography
                    variant="h5"
                    color="#242424"
                    fontSize={{ lg: "24px", md: "16px" }}
                  >
                    Damdex Can Save You Billions Of Rupiah On Construction. Here&apos;s How
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#7B7B7B"
                    fontSize={{ lg: "24px", md: "16px" }}
                  >
                    Having DAMDEX in the mix means faster building time and a quicker ROI. Call your DAMDEX distributor
                    today and start building better, faster, stronger.
                  </Typography>
                </Stack>
              </Box>
            </div>
          </>
        )}
      </Stack>
    </Box>
  );
};
