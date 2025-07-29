"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { OutlinedButton } from "@/components/button";
import { useRouter } from "next/navigation";
import imgToko from "../../../public/toko.jpg";
import { useLanguage } from "@/components/localStorageProvider";

const validationSchema = Yup.object({
  name: Yup.string().required("Nama lengkap harus diisi"),
  email: Yup.string().email().required("E-mail harus diisi"),
  subject: Yup.string().required("Subjek harus diisi"),
  message: Yup.string().required("Pesan harus diisi"),
});

const Page = () => {
  const router = useRouter();
  const { language } = useLanguage();

  return (
    <AppLayout>
      <Stack
        direction={{ md: "row", xs: "column" }}
        pt={{ xs: 8, sm: 10, md: 12, lg: 8, xl: 10 }}
        px={5}
        spacing={3}
        pb={2}
      >
        <Stack
          width={{ md: "30vw", xs: "auto" }}
          spacing={2}
        >
          <Typography fontSize={{ sm: "32px", xs: "28px" }}>
            {language === "eng" ? "Get in Touch" : "Hubungi kami"}
          </Typography>
          <Typography
            fontSize={{ xl: "40px", lg: "30px", md: "30px", sm: "30px", xs: "24px" }}
            fontWeight={800}
          >
            {language === "eng"
              ? "Have any questions? Feel free to reach out to us."
              : "Ada pertanyaan? Jangan ragu untuk menghubungi kami."}
          </Typography>
          <Stack spacing={1}>
            <Typography
              fontSize={{ xl: "40px", md: "28px", xs: "24px" }}
              fontWeight={800}
            >
              Call Center
            </Typography>
            <Typography fontSize={{ xl: "32px", md: "20px", xs: "22px" }}>
              021 7542688 <br /> 021 7545131
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              fontSize={{ xl: "40px", md: "28px", xs: "24px" }}
              fontWeight={800}
            >
              {language === "eng" ? "Our Location" : "Lokasi Kami"}
            </Typography>
            <Typography fontSize={{ xl: "32px", md: "20px", xs: "22px" }}>
              Jl. Cinere Raya No. 50-51 Blok A, Cinere - Limo,Depok 16514
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              fontSize={{ xl: "40px", md: "28px", xs: "24px" }}
              fontWeight={800}
            >
              Email
            </Typography>
            <Typography fontSize={{ xl: "32px", md: "20px", xs: "22px" }}>info@damdexindonesia.com</Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            p: { xs: 0, md: 3 },
            width: { md: "70vw", xs: "auto" },
          }}
          spacing={2}
          direction={"column"}
        >
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (data, { setSubmitting }) => {
              setSubmitting(true);
              console.log(data);
            }}
          >
            {({ values, handleChange, touched, errors }) => (
              <Form>
                <Stack
                  spacing={1}
                  sx={{
                    backgroundColor: "rgba(251, 251, 251, 1)",
                    borderRadius: "25px",
                    p: 3,
                  }}
                >
                  <Typography fontSize={{ md: "20px", xs: "22px" }}>
                    {language === "eng"
                      ? "Feel free to let us know if you need any further adjustments"
                      : "Jangan ragu untuk memberi tahu kami jika Anda memerlukan penyesuaian lebih lanjut"}
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    label="Full Name"
                    variant="standard"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="E-Mail"
                    variant="standard"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    id="subject"
                    name="subject"
                    label="Subject"
                    variant="standard"
                    value={values.subject}
                    onChange={handleChange}
                    error={touched.subject && Boolean(errors.subject)}
                    helperText={touched.subject && errors.subject}
                  />
                  <TextField
                    id="message"
                    name="message"
                    label="Message"
                    variant="standard"
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    multiline
                    rows={3}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      mt: 3,
                      width: { xs: "20vw", md: "10vw" },
                      backgroundColor: "#000",
                      borderRadius: "25px",
                      fontSize: { xs: "12px", sm: "16px" },
                    }}
                  >
                    Send
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Box
            sx={{
              height: { xs: "250px", sm: "300px", md: "225px", lg: "250px", xl: "350px" },
              background: `linear-gradient(77.88deg, rgba(185, 75, 188, 0.8) -3.14%, rgba(53, 87, 196, 0.8) 27%, rgba(156, 217, 66, 0.8) 94.16%), url(${imgToko.src})`,
              backgroundSize: "cover",
              borderRadius: { xs: "20px", sm: "25px" },
              mx: "auto",
            }}
          >
            <Stack
              alignItems={"center"}
              justifyItems={"center"}
              direction={"column"}
              spacing={2}
              sx={{ pt: { xs: "10vh", sm: "8vh", md: "65px", lg: "60px", xl: "80px" } }}
            >
              <Typography
                variant="h2"
                width={{ xs: "40vw", md: "30vw", lg: "30vw", xl: "40vw" }}
                fontWeight={800}
                color="rgba(255, 255, 255, 1)"
                textAlign={"center"}
                sx={{ fontSize: { xs: "18px", sm: "30px", md: "20px", lg: "30px", xl: "50px" } }}
              >
                {language === "id"
                  ? "Toko / Traditional Market / Toko Material"
                  : "Shop / Traditional Market / Grocery Store"}
              </Typography>
              <OutlinedButton
                label="Find"
                onClick={() => router.push("/lokasi-toko")}
              />
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ width: "100vw", height: "300px", display: "block" }}>
        {/* <Map
          position={[-6.32595166017651, 106.7850292]}
          zoom={18}
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5104763674353!2d106.7848386267823!3d-6.325764969128605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee467f0dad49%3A0x1c9041845b8362d4!2sJl.%20Cinere%20Raya%20No.50-51%20Blok%20A%2C%20Cinere%2C%20Kec.%20Cinere%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514!5e0!3m2!1sid!2sid!4v1750162449463!5m2!1sid!2sid"
          style={{
            width: "100%",
            zIndex: 1,
            height: "100%",
          }}
          loading="lazy"
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
