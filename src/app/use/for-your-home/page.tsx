"use client";
import React from "react";
import { Box, Stack, Typography, ToggleButton, Divider, Grid2 } from "@mui/material";
import { AppLayout } from "@/components/appLayout";
import img1 from "@/../public/damdexforhome.png";
import img2 from "@/../public/damdexforpro.png";
import thinmix from "@/../public/thinmix.jpeg";
import mediummix from "@/../public/mediummix.png";
import thickmix from "@/../public/thickmix.png";
import waterproofing from "@/../public/waterproofing.png";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FilledButton } from "@/components/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/localStorageProvider";
import { useUsageDetail } from "@/swr-hooks/usage/useUsageDetail";

const Page = () => {
  const router = useRouter();
  const [composition, setComposition] = React.useState<string>("");
  const [compositionId, setCompositionId] = React.useState<number>(0);
  const [usageForId, setUsageForId] = React.useState<number>(0);
  const [usage, setUsage] = React.useState<string>("");
  const { language } = useLanguage();
  const { data } = useUsageDetail(1);

  const images = [thinmix, mediummix, thickmix, waterproofing];

  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { xs: "200px", sm: "250px", md: "300px", xl: "400px" },
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0.8) 22.87%, rgba(255, 230, 86, 0.5) 119.83%), url(${img1.src})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "top", lg: "center" },
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{
            pt: { xs: "110px", sm: "135px", md: "150px", lg: "125px", xl: "200px" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "24px", sm: "35px", md: "45px", lg: "60px" } }}
          >
            Damdex For Your Home
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ p: 5 }}>
        <Stack
          direction={"column"}
          spacing={1}
        >
          <Typography
            fontSize={"32px"}
            fontWeight={800}
          >
            Composition
          </Typography>
          <Grid2
            container
            justifyContent={"space-evenly"}
            spacing={{ md: 2 }}
          >
            {data?.data.useComposition.map((d, i) => (
              <Grid2
                key={i}
                size={{ xs: 6, md: 3 }}
                mt={{ xs: 2, md: 0 }}
              >
                <CompositionButton
                  value={language === "id" ? d.titleIDN : d.titleENG}
                  onChange={() => {
                    setComposition(language === "id" ? d.titleIDN : d.titleENG);
                    setCompositionId(d.id);
                    setUsage("");
                  }}
                  img={images[i]}
                  selected={composition}
                />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
        <Divider sx={{ backgroundColor: "#000", my: 4, minWidth: "70vw" }} />
        {composition !== "" && (
          <Grid2
            spacing={{ md: 15, xs: 5 }}
            justifyContent={"start"}
            direction={"row"}
            container
          >
            {composition !== "" &&
              data?.data.useComposition
                .find((d) => d.id === compositionId)
                ?.useCompositionUseFor.map((d, i) => (
                  <Grid2
                    key={i}
                    size={{ md: 2, xs: 4 }}
                    alignSelf={"start"}
                  >
                    <UsageForButton
                      selected={usage}
                      value={language === "id" ? d.titleIDN : d.titleENG}
                      onChange={() => {
                        setUsage(language === "id" ? d.titleIDN : d.titleENG);
                        setUsageForId(d.id);
                      }}
                    />
                  </Grid2>
                ))}
          </Grid2>
        )}
        {composition && usage && (
          <Stack
            spacing={5}
            justifyContent={"center"}
            sx={{
              height: "auto",
              backgroundColor: "rgba(246, 246, 246, 1)",
              borderRadius: "25px",
              mt: "100px",
              p: 5,
            }}
          >
            <Box
              fontWeight={400}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    language === "id"
                      ? (data?.data.useComposition
                          .find((d) => d.id === compositionId)
                          ?.useCompositionUseFor.find((d) => d.id === usageForId)?.descriptionIDN as string)
                      : (data?.data.useComposition
                          .find((d) => d.id === compositionId)
                          ?.useCompositionUseFor.find((d) => d.id === usageForId)?.descriptionENG as string),
                }}
              />
            </Box>
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { xl: "400px", lg: "300px", sm: "300px", xs: "250px" },
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
          backgroundSize: "cover",
          p: 2,
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"row"}
          spacing={{ sm: 4, xs: 2 }}
          sx={{
            pt: { xs: "70px", sm: "100px", lg: "100px", xl: "150px" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", md: "40px", lg: "50px", xl: "60px" } }}
          >
            Damdex For Professional
          </Typography>
          <FilledButton
            label="Learn More"
            onClick={() => router.push("/use/for-professional")}
          />
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;

const CompositionButton = ({
  selected,
  value,
  onChange,
  img,
}: {
  selected: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  img: string | StaticImport;
}) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      <Box
        sx={
          selected === value
            ? undefined
            : {
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  borderRadius: "0px 100px 100px",
                  inset: 0,
                  padding: 0.1,
                  background: "linear-gradient(87.85deg, #FF8821 0%, #F52F30 102.88%)",
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                },
              }
        }
      >
        <ToggleButton
          value={value}
          sx={{
            textTransform: "none",
            width: { lg: "18vw", md: "15vw", sm: "30vw", xs: "50vw" },
            borderRadius: "0px 100px 100px",
            minHeight: { xs: "45px", sm: "65px", md: "60px", lg: "75px", xl: "91px" },
            color: "#000",
            fontSize: { xl: "25px", lg: "16px", md: "12px", sm: "14px", xs: "11px" },
            "&.Mui-selected": {
              background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
              color: "#FFF",
              border: 0,
            },
          }}
          selected={selected === value}
          onChange={onChange}
        >
          <Stack direction={"column"}>
            {value}
            {value === "Waterproofing" && (
              <Typography fontSize={{ lg: "15px", sm: "9px", xs: "8px" }}> (Damdex Warna)</Typography>
            )}
          </Stack>
        </ToggleButton>
      </Box>
      <Stack mt={1}>
        <Typography
          fontSize={{ xl: "26px", lg: "16px", md: "12px", xs: "15px" }}
          fontWeight={800}
          textAlign={"center"}
        >
          {value === "Medium Mix" || value === "Campuran Kental" ? "Perbandingan Berat" : "Perbandingan Volume"}
        </Typography>
        <Typography
          fontSize={{ xl: "20px", lg: "10px", xs: "12px" }}
          textAlign={"center"}
        >
          {value === "Medium Mix" || value === "Campuran Kental"
            ? "(Menggunakan Timbangan)"
            : "(Menggunakan gelas/kaleng)"}
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: { xl: "15vw", lg: "13vw", md: "10vw", sm: "25vw", xs: "30vw" },
          height: { xl: "15vh", lg: "13vh", md: "6vh", sm: "90px", xs: "75px" },
        }}
      >
        <Image
          alt="perbandingan"
          src={img}
          fill
          style={{ marginTop: "10px" }}
        />
      </Box>
    </Stack>
  );
};

const UsageForButton = ({
  selected,
  value,
  onChange,
}: {
  selected: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void;
}) => {
  return (
    <ToggleButton
      value={value}
      sx={{
        width: { md: "15vw", sm: "20vw", xs: "25vw" },
        height: { xs: "70px", lg: "100px" },
        borderRadius: { lg: "30px", xs: "20px" },
        color: "#000",
        border: 0,
        fontSize: { xl: "28px", lg: "20px", md: "12px", xs: "12px" },
        minHeight: { xl: "10vh", lg: "8vh", sm: "5vh", xs: "8vh" },
        px: 5,
        lineHeight: 1,
        backgroundColor: "rgba(242, 242, 242, 1)",
        textTransform: "none",
        "&.Mui-selected": {
          background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
          color: "#FFF",
          border: 0,
        },
      }}
      selected={selected === value}
      onChange={onChange}
    >
      {value}
    </ToggleButton>
  );
};
