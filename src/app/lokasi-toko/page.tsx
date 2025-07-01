"use client";
import { AppLayout } from "@/components/appLayout";
import { useLanguage } from "@/components/localStorageProvider";
import { useCityOptions } from "@/swr-hooks/store/useCityOptions";
import { useProvinceOptions } from "@/swr-hooks/store/useProvinceOptions";
import { useStore } from "@/swr-hooks/store/useStore";
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
import eng from "@/locale/eng.json";
import id from "@/locale/id.json";
import { LoadingView } from "@/components/loadingView";

const Page = () => {
  const [lokasi, setLokasi] = React.useState<string>(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5104763674353!2d106.7848386267823!3d-6.325764969128605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee467f0dad49%3A0x1c9041845b8362d4!2sJl.%20Cinere%20Raya%20No.50-51%20Blok%20A%2C%20Cinere%2C%20Kec.%20Cinere%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514!5e0!3m2!1sid!2sid!4v1750162449463!5m2!1sid!2sid"
  );
  const [provinsi, setProvinsi] = React.useState("Jakarta");
  const [kota, setKota] = React.useState("Jakarta Barat");
  const handleChangeProv = (event: SelectChangeEvent) => {
    setProvinsi(event.target.value);
    setKota("");
  };
  const handleChangeKota = (event: SelectChangeEvent) => {
    setKota(event.target.value);
  };
  const { data: store, loading } = useStore({ limit: 300, province: provinsi, city: kota });
  const { data: province } = useProvinceOptions();
  const { data: city } = useCityOptions(provinsi);
  const handleChangeKoordinat = (data: string) => {
    setLokasi(data);
  };
  const { language } = useLanguage();

  if (loading || !store) return <LoadingView />;

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
          {language === "eng" ? eng.store.title : id.store.title}
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
                {province?.data.map((d, i) => (
                  <MenuItem
                    key={i}
                    value={d.value}
                  >
                    {d.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Stack
              spacing={2}
              overflow={"auto"}
              height={{ xl: "500px", lg: "400px", md: "400px", sm: "300px", xs: "300px" }}
            >
              {store &&
                store.data.totalData !== 0 &&
                store?.data.payload.map((d, i) => (
                  <Alamat
                    key={i}
                    namaToko={d.storeName}
                    alamat={d.storeAddress}
                    noTelp={d.storePhone}
                    koordinat={d.storeAddressGoogleMap}
                    handleChange={handleChangeKoordinat}
                  />
                ))}
              {store && store.data.totalData === 0 && (
                <Typography
                  fontSize={{ xl: "28px", lg: "24px", md: "20px", xs: "10px" }}
                  fontWeight={800}
                >
                  {language === "eng" ? eng.store.empty : id.store.empty}
                </Typography>
              )}
              {loading && (
                <Typography
                  fontSize={{ xl: "28px", lg: "24px", md: "20px", xs: "10px" }}
                  fontWeight={800}
                >
                  {language === "eng" ? eng.store.loading : id.store.loading}
                </Typography>
              )}
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
                {city?.data.map((d, i) => (
                  <MenuItem
                    key={i}
                    value={d.value}
                  >
                    {d.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ height: { xl: "500px", lg: "400px", md: "400px", sm: "300px", xs: "300px" }, display: "block" }}>
              <iframe
                src={lokasi}
                key={lokasi}
                style={{
                  width: "100%",
                  zIndex: 1,
                  height: "100%",
                }}
                loading="lazy"
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;

const Alamat = ({
  namaToko,
  alamat,
  noTelp,
  koordinat,
  handleChange,
}: {
  namaToko: string;
  alamat: string;
  noTelp: string;
  koordinat: string;
  handleChange: (data: string) => void;
}) => {
  return (
    <Box>
      <Typography
        fontSize={{ xl: "28px", lg: "24px", md: "20px", xs: "10px" }}
        fontWeight={800}
      >
        {namaToko}
      </Typography>
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
        component={"button"}
        onClick={(e) => {
          e.preventDefault();
          handleChange(koordinat);
          console.log(koordinat);
        }}
      >
        View on Map
      </Link>
    </Box>
  );
};
