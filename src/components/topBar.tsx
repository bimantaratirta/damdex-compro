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

export const TopBar = () => {
  const drawerItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/product" },
    { name: "Use & Applications", url: "/use" },
    { name: "Projects", url: "/projects" },
    { name: "Events", url: "/event" },
    { name: "Contact us", url: "/contact" },
  ];
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;

  const settings = localStorage.getItem("languageSettings");

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.9)",
        borderImage: "linear-gradient(90.03deg, #B94BBC -0.47%, #3557C4 31.38%, #9CD942 63.74%, #F4CB37 100.64%)",
        borderImageSlice: 1,
        borderBottom: "7px solid transparent",
        width: "100vw",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100vw"}
        height={"6.5vh"}
        justifyContent={"space-between"}
        sx={{ px: "2.5vw" }}
      >
        <Image
          alt="logo"
          src={logo}
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
                Home
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
                Products
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
                Use & Applications
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
                Projects
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
                Events
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
                Contact Us
              </Link>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
            >
              <Link
                underline="hover"
                color={settings === "id" ? "#FFF" : "#4D4D4D"}
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
                color={settings === "en" ? "#FFF" : "#4D4D4D"}
                component={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("languageSettings", "en");
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
        </Box>
      </Drawer>
    </Box>
  );
};
