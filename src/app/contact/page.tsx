"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import img from "@/../public/contact.png";
import React from "react";
import dynamic from "next/dynamic";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { OutlinedButton } from "@/components/button";
import { useRouter } from "next/navigation";
import imgToko from "../../../public/toko.jpg";

const validationSchema = Yup.object({
  name: Yup.string().required("Nama lengkap harus diisi"),
  email: Yup.string().email().required("E-mail harus diisi"),
  subject: Yup.string().required("Subjek harus diisi"),
  message: Yup.string().required("Pesan harus diisi"),
});

const Page = () => {
  const router = useRouter();
  const isTall = useMediaQuery("(min-height: 1200px)");

  const Map = React.useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        ssr: false,
      }),
    []
  );

  return (
    <AppLayout>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: { xs: "180px", sm: "220px", md: "300px", lg: "40vh" },
          background: `linear-gradient(180.53deg, rgba(47, 117, 101, 0.5) 22.87%, rgba(255, 230, 86, 0.5) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "100px", sm: "120px", md: "15vh", lg: "19vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" } }}
          >
            Contact Us
          </Typography>
        </Stack>
      </Box>
      <Stack
        direction={{ md: "row", xs: "column" }}
        p={5}
        spacing={3}
      >
        <Stack
          width={{ md: "45vw", xs: "auto" }}
          spacing={2}
        >
          <Typography fontSize={{ sm: "32px", xs: "28px" }}>Get in Touch</Typography>
          <Typography
            fontSize={{ xl: "56", lg: "48px", md: "40px", sm: "30px", xs: "24px" }}
            fontWeight={800}
          >
            Have any questions? Feel free to reach out to us.
          </Typography>
          <Stack spacing={1}>
            <Typography
              fontSize={{ md: "32px", xs: "24px" }}
              fontWeight={800}
            >
              Call Center
            </Typography>
            <Typography fontSize={{ md: "24px", xs: "22px" }}>
              021 7542688 <br /> 021 7545131
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              fontSize={{ md: "32px", xs: "24px" }}
              fontWeight={800}
            >
              Our Location
            </Typography>
            <Typography fontSize={{ md: "24px", xs: "22px" }}>
              Jl. Cinere Raya No. 50-51 Blok A, Cinere - Limo,Depok 16514
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              fontSize={{ md: "32px", xs: "24px" }}
              fontWeight={800}
            >
              Email
            </Typography>
            <Typography fontSize={{ md: "24px", xs: "22px" }}>info@damdexindonesia.com</Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            p: { xs: 0, md: 3 },
            width: { md: "45vw", xs: "auto" },
          }}
          spacing={2}
          direction={"column"}
        >
          <Typography fontSize={{ md: "24px", xs: "22px" }}>
            Feel free to let me know if you need any further adjustments
          </Typography>
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
                  spacing={2}
                  sx={{
                    backgroundColor: "rgba(251, 251, 251, 1)",
                    borderRadius: "25px",
                    p: 5,
                  }}
                >
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
                    rows={5}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      mt: 3,
                      width: { xs: "20vw", md: "5vw" },
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
              height: isTall ? { xs: "35vh", md: "40vh", lg: "40vh" } : { xs: "35vh", md: "40vh", lg: "57vh" },
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
              spacing={4}
              sx={{ pt: { xs: "10vh", sm: "8vh", md: "10vh", lg: "12vh", xl: "15vh" } }}
            >
              <Typography
                variant="h2"
                width={{ xs: "40vw", md: "30vw", lg: "30vw", xl: "40vw" }}
                fontWeight={800}
                color="rgba(255, 255, 255, 1)"
                textAlign={"center"}
                sx={{ fontSize: { xs: "18px", sm: "30px", md: "25px", lg: "35px", xl: "50px" } }}
              >
                Toko / Traditional Market / Toko Material
              </Typography>
              <OutlinedButton
                label="Find"
                onClick={() => router.push("/lokasi-toko")}
              />
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ width: "100vw", height: "50vh", display: "block" }}>
        <Map
          position={[-6.32595166017651, 106.7850292]}
          zoom={18}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;
