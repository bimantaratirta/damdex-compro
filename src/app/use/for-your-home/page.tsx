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
            "Campuran Damdex Multifungsi dengan semen jenis PCC pada campuran Thin Mix memiliki sifat Low Viscosity (encer) yang efektif meresap ke pori beton dan meningkatkan kuat, sehingga menjadikan beton lebih kedap air. Campuran ini lebih efisien karena memiliki daya sebar luas yaitu 3 m² per campuran. 1 kg semen ditambahkan Damdex Multifungsi untuk 2 kali pelapisan.",
        },
      ],
      img: thinmix,
    },
    {
      value: "Medium Mix",
      usage: [
        {
          value: "Penguat Beton",
          deskripsi1:
            "Bangunan yang kokoh dan kuat sangat ditentukan oleh mutu kualitas struktural beton. Pada proses pembuatan beton, pemilihan material yang tepat (ex: kadar lumpur pasir dibawah 5%, kadar lumpur batu split maks. 1%) diperlukankan juga bahan Aditif yaitu Plasticizer yang berguna untuk meningkatkan mutu kualitas beton. Penggunaan Plasticizer akan mengurangi pemakaian air sebesar 10%.",
          deskripsi2:
            "Damdex Multifungsi merupakan salah satu Aditif pencampuran beton yang berfungsi meningkatkan mutu kuat tekan beton sampai 35% pada umur beton 28 hari dan mempercepat setting pengerasan beton sebesar 50% sehingga bekisting dapat dilepas pada saat umur beton 14 hari.",
        },
        {
          value: "Nat Keramik",
          deskripsi1:
            "Penggunaan cairan kimia pembersih keramik mengakibatkan nat keramik menjadi porous dan mudah terangkat. Untuk memperkuat dan menambah kekerasan pada nat keramik dibutuhkan aditif yaitu Damdex Multifungsi. Dengan dosis pemakaian 2% dari semen nat keramik yang digunakan (contoh: 2 ml Damdex Multifungsi untuk dicampur dengan 1 kg semen nat keramik).",
        },
        {
          value: "Plaster Acian",
          deskripsi1:
            "Plesteran dan acian yang berkualitas akan memperkokoh dinding serta menjadikannya lebih kedap air. Oleh karena itu, untuk memperkuat struktur dinding, selain digunakan pasir yang berkualitas juga dibutuhkan aditif pada aplikasi plesteran yang mampu memperpadat dan memperkeras plesteran sehingga dinding akan lebih kokoh. Dengan penambahan Damdex Multifungsi sebanyak 2% dari berat semen yang digunakan (1 liter Damdex Multifungsi + 50 kg semen PCC) akan menjadikan plesteran dan acian lebih keras, tahan terhadap retak dan lebih kedap air.",
        },
        {
          value: "Screeding",
          deskripsi1:
            "Screeding adalah suatu lapisan yang berfungsi sebagai pelindung waterproofing dari cuaca, sehingga menambah umur waterproofing. Screeding juga berfungsi sebagai pengatur kemiringan lantai beton, supaya air dapat mengalir dengan baik ke pipa pembuangan. Penggunaan aditif Damdex Multifungsi pada campuran screeding akan mengurangi retak muai susut semen serta meningkatkan kekerasan dari screeding itu sendiri.",
          deskripsi2:
            "Screeding terdiri dari campuran pasir yang berkualitas dan semen PCC dengan perbandingan 1 bagian semen : 3 bagian pasir, dan ditambahkan Damdex Multifungsi sebanyak Aditif sebanyak 2% dari berat semen (1 liter Damdex Multifungsi + 50 kg semen + 150 kg pasir).",
        },
        {
          value: "Perekat Keramik",
          deskripsi1:
            "Deskripsi PCC dan pembahan Aditif Damdex Multifungsi sebanyak 2% dari berat semen (contoh: 1 liter Damdex Multifungsi + semen 50 kg). Sifat campuran Medium Mix ini akan meningkatkan daya rekat pada aplikasi pemasangan keramik sehinga dapat mengurangi risiko keramik lepas. Selain memperkuat daya rekat semen PCC, campuran ini meminimalkan efisiensi yang sangat tinggi, sehingga volume material mejadi 2x lebih banyak dibandingkan semen rekat keramik lainnya.",
        },
      ],
      img: mediummix,
    },
    {
      value: "Thick Mix",
      usage: [
        {
          value: "Grouting",
          deskripsi1:
            "Pemilihan material Grouting wajib mempertimbangkan muai susut material yang digunakan. Campuran 1 bagian Damdex Multifungsi + 3 bagian semen mampu mengurangi muai susut semen dan memperkeras Grouting. Sehingga campuran ini direkomendasikan untuk aplikasi Grouting retak pada bangunan rumah.",
        },
        {
          value: "Plug Kebocoran",
          deskripsi1:
            "Pemilihan material Grouting wajib mempertimbangkan muai susut material yang digunakan. Campuran 1 bagian Damdex Multifungsi + 3 bagian semen mampu mengurangi muai susut semen dan memperkeras Grouting. Sehingga campuran ini direkomendasikan untuk aplikasi Grouting retak pada bangunan rumah.",
        },
      ],
      img: thickmix,
    },
    {
      value: "Waterproofing",
      usage: [
        {
          value: "Waterproofing",
          deskripsi1:
            "Damdex Warna Waterproofing Cement Based 2 komponen yang memiliki beberapa inovasi terbaru diantaranya seperti Damdex Warna sudah memiliki 7 varian warna, POT Life (umur adukan lebih lama), daya sebar lebih luas dan aplikasi pada dinding Exposed.",
          deskripsi2:
            "Damdex Warna Waterproofing yang bisa disesuaikan dengan kebutuhan dari Customer. 7 warna tersebut adalah Warna Primer, Warna Abu-Abu, Warna Hijau, Warna Biru, Warna Merah, Warna Hitam dan Warna Coklat. Banyak Project yang sudah berhasil di aplikasikan Damdex Warna maupun Damdex Warna Primer sebagai pelindung/Waterproofing dan pengganti Sealer untuk Case dinding yang lembab (berjamur). Dengan adanya warna akan membuat pengguna lebih mudah dalam Monitoring dan Controlling dak beton dan pada keseluruhan aplikasi pelapisan Waterproofing Damdex Warna.",
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
          background: `linear-gradient(180.53deg, rgba(87, 47, 117, 0.8) 22.87%, rgba(255, 230, 86, 0.5) 119.83%), url(${img1.src})`,
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
              p: 3,
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
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
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
