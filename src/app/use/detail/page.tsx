/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Box, Stack, Typography, ToggleButton, Button, List, ListItem, ListItemText } from "@mui/material";
import { AppLayout } from "@/components/appLayout";
import img1 from "@/../public/damdexforhome.png";
import img2 from "@/../public/damdexforpro.png";

const Page = () => {
  const [selectedComposition, setSelectedComposition] = React.useState<string>("thin");
  const [selectedUsage, setSelectedUsage] = React.useState<string>("perekat");
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
          sx={{ pt: { xs: "10vh", sm: "23vh" } }}
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
      <Box sx={{ p: 10 }}>
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
          <Stack
            direction={"row"}
            spacing={4}
          >
            <Box
              sx={
                selectedComposition === "thin"
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
                value="thin"
                sx={{
                  textTransform: "none",
                  width: "22vw",
                  borderRadius: "0px 100px 100px",
                  color: "#000",
                  "&.Mui-selected": {
                    background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
                    color: "#FFF",
                    border: 0,
                  },
                }}
                selected={selectedComposition === "thin"}
                onChange={(_, value) => setSelectedComposition(value)}
              >
                Thin Mix
              </ToggleButton>
            </Box>
            <Box
              sx={
                selectedComposition === "medium"
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
                value="medium"
                sx={{
                  textTransform: "none",
                  width: "22vw",
                  borderRadius: "0px 100px 100px",
                  color: "#000",
                  "&.Mui-selected": {
                    background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
                    color: "#FFF",
                    border: 0,
                  },
                }}
                selected={selectedComposition === "medium"}
                onChange={(_, value) => setSelectedComposition(value)}
              >
                Medium Mix
              </ToggleButton>
            </Box>
            <Box
              sx={
                selectedComposition === "thick"
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
                value="thick"
                sx={{
                  textTransform: "none",
                  width: "22vw",
                  borderRadius: "0px 100px 100px",
                  color: "#000",
                  "&.Mui-selected": {
                    background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
                    color: "#FFF",
                    border: 0,
                  },
                }}
                selected={selectedComposition === "thick"}
                onChange={(_, value) => setSelectedComposition(value)}
              >
                Thick Mix
              </ToggleButton>
            </Box>
            <Box
              sx={
                selectedComposition === "waterproof"
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
                value="waterproof"
                sx={{
                  textTransform: "none",
                  width: "22vw",
                  borderRadius: "0px 100px 100px",
                  color: "#000",
                  "&.Mui-selected": {
                    background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)",
                    color: "#FFF",
                    border: 0,
                  },
                }}
                selected={selectedComposition === "waterproof"}
                onChange={(_, value) => setSelectedComposition(value)}
              >
                Waterproofing
              </ToggleButton>
            </Box>
          </Stack>
        </Stack>
        {/* <Stack direction={"column"} py={10} spacing={1}>
          <Typography fontSize={"32px"} fontWeight={800}>
            Use For
          </Typography>
          <Stack direction={"row"} spacing={5}>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Perekat Keramik
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Nat Keramik
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Grouting
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Plaster Acian
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Waterproofing
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Screeding
            </ToggleButton>
            <ToggleButton
              value="thin"
              sx={{
                width: "12vw",
                borderRadius: "30px",
                color: "#000",
                border: 0,
                backgroundColor: "rgba(242, 242, 242, 1)",
                textTransform: "none",
                "&.Mui-selected": { background: "linear-gradient(85.36deg, #FF8821 0%, #F52F30 95.63%)", color: "#FFF", border: 0 },
              }}
              selected={selectedUsage === "thin"}
              onChange={(_, value) => setSelectedUsage(value)}
            >
              Pori
            </ToggleButton>
          </Stack>
        </Stack> */}
        <Box
          sx={{
            width: "90vw",
            height: "100vh",
            backgroundColor: "rgba(246, 246, 246, 1)",
            margin: "100px auto",
            borderRadius: "25px",
            p: 5,
          }}
        >
          <Typography
            color="#000"
            fontWeight={800}
            fontSize={"40px"}
          >
            WHEN USING DAMDEX FOLLOW THE RECOMMENDED WAYS
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={"40px"}
          >
            Paint a waterproof coat on tiled, concrete or asbestos roofs. On floors and wall surfaces. On ceramic tiles,
            too.
          </Typography>
          <Typography
            color="#000"
            fontWeight={800}
            fontSize={"40px"}
          >
            Preparation
          </Typography>
          <List sx={{ listStyle: "decimal", pl: 5, fontSize: "40px" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary="Thoroughly clean the surface to be coated from all dirt, dust, mildew and other foreign matter such as old paint or shrivelled bitumen, anything that may prevent the mixture penetrating deeply into cracks."
                sx={{ "& span": { fontSize: "40px" } }}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary="For best results always wet the surface with water. Never work on hot, dry surfaces."
                sx={{ "& span": { fontSize: "40px" } }}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary="Remove any cement lumps by riddling/filtering the cement powder before mixing."
                sx={{ "& span": { fontSize: "40px" } }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw" },
          height: "45vh",
          background: `linear-gradient(180.53deg, rgba(245, 5, 3, 0.65) 22.87%, rgba(255, 230, 86, 0.65) 119.83%), url(${img2.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyItems={"center"}
          direction={"row"}
          spacing={4}
          sx={{ pt: { xs: "10vh", sm: "18vh" } }}
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
          <Button
            variant="outlined"
            sx={{
              "&.MuiButtonBase-root": {
                color: "#FFF",
                borderColor: "#000",
                backgroundColor: "rgba(0,0,0,1)",
                width: { xs: "50vw", sm: "14.097vw" },
                height: "5.664vh",
                borderRadius: "64px",
                fontSize: { xs: 16, sm: 20, lg: 24 },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.75)",
                },
              },
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Page;
