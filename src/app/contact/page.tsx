"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import img from "@/../public/contact.png";
import React from "react";
import dynamic from "next/dynamic";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const validationSchema = Yup.object({
  name: Yup.string().required("Nama lengkap harus diisi"),
  email: Yup.string().email().required("E-mail harus diisi"),
  subject: Yup.string().required("Subjek harus diisi"),
  message: Yup.string().required("Pesan harus diisi"),
});

const Page = () => {
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
          height: "40vh",
          background: `linear-gradient(180.53deg, rgba(47, 117, 101, 0.5) 22.87%, rgba(255, 230, 86, 0.5) 119.83%), url(${img.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"column"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "20vh" } }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            color="rgba(255, 255, 255, 1)"
            textAlign={"center"}
            width={"65vw"}
            sx={{ fontSize: { xs: "35px", sm: "50px", lg: "60px" } }}
          >
            Contact Us
          </Typography>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        p={12}
        spacing={5}
      >
        <Stack
          width={"45vw"}
          spacing={3}
        >
          <Typography variant="h4">Get in Touch</Typography>
          <Typography
            variant="h2"
            fontWeight={800}
          >
            Have any questions? Feel free to reach out to us.
          </Typography>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              fontWeight={800}
            >
              Call Center
            </Typography>
            <Typography variant="h5">
              021 7542688 <br /> 021 7545131
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              fontWeight={800}
            >
              Our Location
            </Typography>
            <Typography variant="h5">Jl. Cinere Raya No. 50-51 Blok A, Cinere - Limo,Depok 16514</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              fontWeight={800}
            >
              Email
            </Typography>
            <Typography variant="h5">info@damdexindonesia.com</Typography>
          </Stack>
        </Stack>
        <Box sx={{ backgroundColor: "rgba(251, 251, 251, 1)", borderRadius: "25px", width: "45vw", p: 5 }}>
          <Typography>Feel free to let me know if you need any further adjustments</Typography>
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
                <Stack spacing={2}>
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
                </Stack>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3 }}
                >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
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
