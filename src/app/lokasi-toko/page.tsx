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
  ];

  return (
    <AppLayout>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          pt: "15vh",
          width: "100vw",
          mb: "10vh",
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={{ xl: "80px", lg: "60px", md: "40px", xs: "20px" }}
          fontWeight={800}
          width={"20vw"}
          lineHeight={1}
          mb={10}
        >
          LOKASI TOKO
        </Typography>
        <Stack
          direction={"row"}
          spacing={5}
        >
          <Stack
            width={"30vw"}
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
            <Stack spacing={5}>
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
            <Box sx={{ height: { xl: "60vh", lg: "75vh", md: "80vh", sm: "50vh", xs: "50vh" }, display: "block" }}>
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
      <Typography fontSize={{ xl: "40px", lg: "28px", md: "22px" }}>{alamat}</Typography>
      <Typography
        fontSize={{ xl: "32px", lg: "24px", md: "20px" }}
        fontWeight={800}
      >
        Call : {noTelp}
      </Typography>
      <Link
        fontSize={{ xl: "32px", lg: "24px", md: "20px" }}
        sx={{ cursor: "pointer" }}
      >
        View on Map
      </Link>
    </Box>
  );
};
