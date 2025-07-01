"use client";
import React from "react";
import {
  Box,
  Link,
  Stack,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/damdexlogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { useLanguage } from "./localStorageProvider";
import eng from "../locale/eng.json";
import id from "../locale/id.json";

export const TopBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const { language } = useLanguage();
  const drawerItems = [
    { name: language === "eng" ? eng.topBar.home : id.topBar.home, url: "/" },
    { name: language === "eng" ? eng.topBar.product : id.topBar.product, url: "/product" },
    { name: language === "eng" ? eng.topBar.use : id.topBar.use, url: "/use" },
    { name: language === "eng" ? eng.topBar.project : id.topBar.project, url: "/projects" },
    { name: language === "eng" ? eng.topBar.event : id.topBar.event, url: "/event" },
    { name: language === "eng" ? eng.topBar.contact : id.topBar.contact, url: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.9)",
        borderImage: "linear-gradient(90.03deg, #B94BBC -0.47%, #3557C4 31.38%, #9CD942 63.74%, #F4CB37 100.64%)",
        borderImageSlice: 1,
        borderBottom: "7px solid transparent",
        width: "100vw",
        height: "60px",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100vw"}
        height={"55px"}
        justifyContent={"space-between"}
        sx={{ px: "2.5vw" }}
      >
        <Image
          alt="logo"
          src={logo}
          priority
          height={23}
        />
        {mobile && (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 1, sm: 2 }, display: { md: "none" } }}
          >
            <MenuIcon sx={{ color: "#FFF" }} />
          </IconButton>
        )}
        {!mobile && (
          <>
            <Stack
              direction={"row"}
              spacing={3}
              pr={"5vw"}
            >
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                {language === "eng" ? eng.topBar.home : id.topBar.home}
              </Link>
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/product");
                }}
              >
                {language === "eng" ? eng.topBar.product : id.topBar.product}
              </Link>
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/use");
                }}
              >
                {language === "eng" ? eng.topBar.use : id.topBar.use}
              </Link>
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/projects");
                }}
              >
                {language === "eng" ? eng.topBar.project : id.topBar.project}
              </Link>
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/event");
                }}
              >
                {language === "eng" ? eng.topBar.event : id.topBar.event}
              </Link>
              <Link
                underline="hover"
                color="#FFF"
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/contact");
                }}
              >
                {language === "eng" ? eng.topBar.contact : id.topBar.contact}
              </Link>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
            >
              <Link
                underline="hover"
                color={language === "id" ? "#FFF" : "#4D4D4D"}
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("languageSettings", "id");
                  window.location.reload();
                }}
              >
                ID
              </Link>
              <Typography color="#FFF">/</Typography>
              <Link
                underline="hover"
                color={language === "eng" ? "#FFF" : "#4D4D4D"}
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("languageSettings", "eng");
                  window.location.reload();
                }}
              >
                EN
              </Link>
            </Stack>
          </>
        )}
      </Stack>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box sx={{ height: "100vh", backgroundColor: "#000" }}>
          <Image
            alt="logo"
            src={logo}
            priority
            height={23}
            style={{ margin: "10px 0px 0px 70px" }}
          />
          <List>
            {drawerItems.map((item, idx) => (
              <ListItem
                key={idx}
                disablePadding
              >
                <ListItemButton
                  sx={{ textAlign: "center", color: "#FFF" }}
                  onClick={() => router.push(item.url)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
          >
            <Link
              underline="hover"
              color={language === "id" ? "#FFF" : "#4D4D4D"}
              component={"button"}
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("languageSettings", "id");
                window.location.reload();
              }}
            >
              ID
            </Link>
            <Typography color="#FFF">/</Typography>
            <Link
              underline="hover"
              color={language === "eng" ? "#FFF" : "#4D4D4D"}
              component={"button"}
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("languageSettings", "eng");
                window.location.reload();
              }}
            >
              EN
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};
