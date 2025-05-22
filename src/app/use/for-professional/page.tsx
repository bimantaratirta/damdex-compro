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

const Page = () => {
  const router = useRouter();
  const [composition, setComposition] = React.useState<string>("");
  const [usage, setUsage] = React.useState<string>("");
  const compositionData = [
    {
      value: "Thin Mix",
      usage: [
        {
          value: "Pori",
          deskripsi1:
            "Campuran Damdex Multifungsi dengan semen jenis PCC pada campuran Thin Mix memiliki sifat Low Viscosity (encer) yang efektif meresap ke pori beton dan mengikat kuat, sehingga menjadikan beton lebih kedap air. Campuran ini lebih efisien karena memiliki daya sebar luas yaitu 3 m² per campuran. 1 kg semen ditambahkan Damdex Multifungsi untuk 2 kali pelapisan.",
        },
      ],
      img: thinmix,
    },
    {
      value: "Medium Mix",
      usage: [
        {
          value: "Pengecoran",
          deskripsi1:
            "Bangunan yang kokoh dan kuat sangat ditentukan oleh mutu kualitas struktural beton. Pada proses pembuatan beton, pemilihan material yang tepat (ex: kadar lumpur pasir dibawah 5%, kadar lumpur batu split maks. 1%) diperlukankan juga bahan Additive yaitu Plasticizer yang berguna untuk meningkatkan mutu kualitas beton. Penggunaan Plasticizer akan mengurangi pemakaian air sebesar 10%.",
          deskripsi2:
            "Damdex Multifungsi merupakan salah satu Additive pencampuran beton yang berfungsi meningkatkan mutu kuat tekan beton sampai 35% pada umur beton 28 hari dan mempercepat Setting pengerasan beton sebesar 50% sehingga bekisting dapat dilepas pada saat umur beton 14 hari.",
        },
        {
          value: "Beton Precast",
          deskripsi1:
            "Beton Precast merupakan alternatif solusi untuk meningkatkan efisiensi waktu pekerjaan konstruksi bangunan. Saat ini, beton Precast banyak digunakan pada konstruksi saluran air, turap, dinding partisi, Concrete Barrier dan bahkan dapat juga digunakan sebagai struktur dinding pada kolam renang.",
          deskripsi2:
            "Damdex Multifungsi sangat direkomendasikan sebagai Additive pada per cetakan beton Precast. Karena memiliki sifat meningkatkan mutu kualitas beton hingga 35%, yang lebih istimewa juga dapat meningkatkan volume produksi beton Precast karena dapat membantu percepatan Setting pengerasan beton sebesar 50% dari waktu standar.",
        },
        {
          value: "Screeding",
          deskripsi1:
            "Screeding adalah suatu lapisan yang berfungsi sebagai pelindung Waterproofing dari cuaca, sehingga menambah umur Waterproofing. Screeding juga berfungsi sebagai pengatur kemiringan lantai beton, supaya air dapat mengalir dengan baik ke pipa pembuangan. Penggunaan Additive Damdex Multifungsi pada campuran Screeding akan mengurangi retak muai susut semen serta meningkatkan kekerasan dari Screeding itu sendiri.",
          deskripsi2:
            "Screeding terdiri dari campuran pasir yang berkualitas dan semen PCC dengan perbandingan 1 bagian semen : 3 bagian pasir, dan ditambah Damdex Multifungsi sebagai Additive sebanyak 2% dari berat semen (1 liter Damdex Multifungsi = 50 kg semen + 150 kg pasir).",
        },
      ],
      img: mediummix,
    },
    {
      value: "Thick Mix",
      usage: [
        {
          value: "Plug Kebocoran",
          deskripsi1:
            "Kondisi bagian bangunan gedung di bawah tanah (Basement) mempunyai tingkat kerawanan yang tinggi munculnya masalah kebocoran air dari luar yang masuk ke dalam bangunan. Campuran Damdex Multifungsi dan semen PCC dengan komposisi 1 : 3 mampu menyumbat kebocoran yang muncul dengan sekejap. Campuran ini mampu menahan tekanan air maks. 7 bar.",
        },
        {
          value: "Perekat Keramik Dalam Air",
          deskripsi1:
            "Salah satu masalah kolam renang yang cukup menyusahkan yaitu keramik/mozaik yang terlepas. Pemakaian semen biasa tanpa Additive tidak akan bisa merekatkan mozaik/keramik yang terlepas di dalam air, dan adanya kondisi tidak memungkinkan air dikuras terlebih dahulu.",
          deskripsi2:
            "Damdex Multifungsi yang dikenal sebagai One Product All Solution dapat digunakan sebagai Additive semen PCC untuk dapat merekatkan keramik/mozaik di dalam air. Dengan penggunaan campuran 1 Damdex Multifungsi : 3 semen tanpa penambahan air, dapat membuat setting pengerasan semen menjadi sangat instan dan merekat kuat ke media beton dan tidak mempengaruhi tingkat kekeruhan air karena campuran ini sangat minim larut terhadap air.",
        },
      ],
      img: thickmix,
    },
    {
      value: "Waterproofing (Damdex Warna)",
      usage: [
        {
          value: "Waterproofing",
          deskripsi1:
            "Damdex Warna Waterproofing Cement Based 2 komponen yang memiliki beberapa inovasi terbaru diantaranya seperti Damdex Warna sudah memiliki 7 varian warna, POT Life (umur adukan lebih lama), daya sebar lebih luas dan aplikasi pada di dinding Exposed.",
          deskripsi2:
            "Damdex Warna Waterproofing yang bisa disesuaikan dengan kebutuhan dari Customer. 7 warna tersebut ialah Warna Primer, Warna Abu-Abu, Warna Hijau, Warna Biru, Warna Merah, Warna Hitam dan Warna Coklat. Banyak Project yang sudah berhasil diaplikasikan Damdex Warna maupun Damdex Warna Primer sebagai pelindung/Waterproofing dan pengganti Sealer untuk Case dinding yang lembab (berjamur). Dengan adanya warna akan membantu untuk memudahkan di dalam Monitoring dan Controlling daka beton dan pada kesempatan aplikasi pelapisan Waterproofing Damdex Warna.",
        },
      ],
      img: waterproofing,
    },
  ];

  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "50vh",
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "20vh", md: "10vh", sm: "23vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}
          >
            Damdex For Professional
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
            {compositionData.map((d, i) => (
              <Grid2
                key={i}
                size={{ xs: 6, md: 3 }}
                mt={{ xs: 2, md: 0 }}
              >
                <CompositionButton
                  value={d.value}
                  onChange={() => {
                    setComposition(d.value);
                    setUsage("");
                  }}
                  img={d.img}
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
              compositionData
                .find((c) => c.value === composition)!
                .usage.map((d, i) => (
                  <Grid2
                    key={i}
                    size={{ md: 2, xs: 4 }}
                    alignSelf={"start"}
                  >
                    <UsageForButton
                      selected={usage}
                      value={d.value}
                      onChange={() => setUsage(d.value)}
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
              sx={{
                position: "relative",
                alignSelf: "center",
                width: { md: "30vw", xs: "50vw" },
                height: { md: "30vh", sm: "20vh", xs: "15vh" },
                borderRadius: "25px",
              }}
            >
              <Image
                alt="komposisi"
                src={compositionData.find((d) => d.value === composition)!.img}
                fill
              />
            </Box>
            <Typography
              color="#000"
              fontWeight={800}
              fontSize={{ sm: "40px", xs: "20px" }}
              mb={5}
            >
              Deskripsi
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ sm: "40px", xs: "20px" }}
            >
              {compositionData.find((d) => d.value === composition)!.usage.find((u) => u.value === usage)?.deskripsi1}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ sm: "40px", xs: "20px" }}
            >
              {compositionData.find((d) => d.value === composition)!.usage.find((u) => u.value === usage)?.deskripsi2 ??
                ""}
            </Typography>
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { sm: "45vh", xs: "30vh" },
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0.8) 22.87%, rgba(255, 230, 86, 0.5) 119.83%), url(${img1.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"row"}
          spacing={{ sm: 4, xs: 2 }}
          sx={{ pt: { xs: "10vh", sm: "18vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", md: "45px", lg: "60px" } }}
          >
            Damdex For Your Home
          </Typography>
          <FilledButton
            label="Learn More"
            onClick={() => router.push("/use/for-your-home")}
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
            width: { lg: "18vw", md: "15vw", sm: "30vw", xs: "25vw" },
            borderRadius: "0px 100px 100px",
            minHeight: { xs: "6vh", lg: "10h", xl: "9vh" },
            color: "#000",
            fontSize: { xl: "25px", lg: "16px", xs: "11px" },
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
              <Typography fontSize={{ lg: "15px", md: "10px", xs: "8px" }}> (Damdex warna)</Typography>
            )}
          </Stack>
        </ToggleButton>
      </Box>
      <Stack mt={1}>
        <Typography
          fontSize={{ xl: "26px", lg: "16px", md: "12px", xs: "12px" }}
          fontWeight={800}
          textAlign={"center"}
        >
          Perbandingan Volume
        </Typography>
        <Typography
          fontSize={{ xl: "20px", lg: "10px", xs: "10px" }}
          textAlign={"center"}
        >
          (Menggunakan gelas/kaleng)
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: { xl: "15vw", lg: "12vw", md: "10vw", xs: "15vw" },
          height: { xl: "15vh", lg: "8vh", md: "6vh", sm: "8vh", xs: "6vh" },
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
        borderRadius: { lg: "30px", md: "20px" },
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
