"use client";
import { AppLayout } from "@/components/appLayout";
import Map from "@/components/map";
import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Page = () => {
  const [provinsi, setProvinsi] = React.useState("");
  const [kota, setKota] = React.useState("");
  const handleChangeProv = (event: SelectChangeEvent) => {
    setProvinsi(event.target.value);
  };
  const handleChangeKota = (event: SelectChangeEvent) => {
    setKota(event.target.value);
  };

  const dataAlamatStatis = [
    {
      alamat: "Jl. Cipete No. 50-51 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
    {
      alamat: "Jl. Bangka No. 02 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
    {
      alamat: "Jl. Pancoran No. 44 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
    {
      alamat: "Jl. Cipete No. 50-51 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
    {
      alamat: "Jl. Bangka No. 02 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
    {
      alamat: "Jl. Pancoran No. 44 Blok A, Jakarta 11556",
      noTelp: "021 777 888 77",
    },
  ];

  return (
    <AppLayout>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          pt: { md: "10vh", lg: "12vh", xs: "80px", sm: "100px" },
          width: "100vw",
          mb: "10vh",
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={{ xl: "80px", lg: "50px", md: "40px", xs: "20px" }}
          fontWeight={800}
          lineHeight={1}
          mb={5}
        >
          LOKASI TOKO
        </Typography>
        <Stack
          direction={"row"}
          spacing={{ xs: 2, lg: 3 }}
        >
          <Stack
            width={"35vw"}
            spacing={5}
          >
            <FormControl>
              <InputLabel id="demo-simple-select-autowidth-label">Provinsi</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={provinsi}
                onChange={handleChangeProv}
                autoWidth
                label="Provinsi"
              >
                <MenuItem value="">Provinsi</MenuItem>
                <MenuItem value={"DKI Jakarta"}>DKI Jakarta</MenuItem>
              </Select>
            </FormControl>
            <Stack
              spacing={2}
              overflow={"auto"}
              height={{ xl: "500px", lg: "400px", md: "400px", sm: "300px", xs: "300px" }}
            >
              {dataAlamatStatis.map((d, i) => (
                <Alamat
                  key={i}
                  alamat={d.alamat}
                  noTelp={d.noTelp}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            width={"50vw"}
            spacing={5}
          >
            <FormControl>
              <InputLabel id="demo-simple-select-autowidth-label">Kota</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={kota}
                onChange={handleChangeKota}
                autoWidth
                label="Kota"
              >
                <MenuItem value="">Kota</MenuItem>
                <MenuItem value={"Jakarta Utara"}>Jakarta Utara</MenuItem>
                <MenuItem value={"Jakarta Barat"}>Jakarta Barat</MenuItem>
                <MenuItem value={"Jakarta Selatan"}>Jakarta Selatan</MenuItem>
                <MenuItem value={"Jakarta Pusat"}>Jakarta Pusat</MenuItem>
                <MenuItem value={"Jakarta Timur"}>Jakarta Timur</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ height: { xl: "500px", lg: "400px", md: "400px", sm: "300px", xs: "300px" }, display: "block" }}>
              <Map
                position={[-6.32595166017651, 106.7850292]}
                zoom={16}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;

const Alamat = ({ alamat, noTelp }: { alamat: string; noTelp: string }) => {
  return (
    <Box>
      <Typography fontSize={{ xl: "32px", lg: "28px", md: "22px", xs: "12px" }}>{alamat}</Typography>
      <Typography
        fontSize={{ xl: "28px", lg: "24px", md: "20px", xs: "10px" }}
        fontWeight={800}
      >
        Call : {noTelp}
      </Typography>
      <Link
        fontSize={{ xl: "28px", lg: "24px", md: "20px", xs: "10px" }}
        sx={{ cursor: "pointer" }}
      >
        View on Map
      </Link>
    </Box>
  );
};
