"use client";
import React from "react";
import { Box, Link, Stack, Typography, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import logo from "../../public/damdexlogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

export const TopBar = () => {
  const drawerItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/" },
    { name: "User & Applications", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Contact us", url: "/" },
  ];
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

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
        position: "fixed",
        zIndex: 10,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} width={"100vw"} height={"6.5vh"} justifyContent={"space-between"} sx={{ px: "2.5vw" }}>
        <Image alt="logo" src={logo} height={23} />
        {mobile && (
          <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: { xs: 1, sm: 2 }, display: { sm: "none" } }}>
            <MenuIcon sx={{ color: "#FFF" }} />
          </IconButton>
        )}
        {!mobile && (
          <>
            <Stack direction={"row"} spacing={3} pr={"5vw"}>
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
                User & Applications
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
              <Link underline="hover" color="#FFF">
                Events
              </Link>
              <Link underline="hover" color="#FFF">
                Contact Us
              </Link>
            </Stack>
            <Typography color="#FFF">ID/EN</Typography>
          </>
        )}
      </Stack>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box sx={{ height: "100vh", backgroundColor: "#000" }}>
          <Image alt="logo" src={logo} height={23} style={{ margin: "10px 0px 0px 70px" }} />
          <List>
            {drawerItems.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton sx={{ textAlign: "center", color: "#FFF" }} onClick={() => router.push(item.url)}>
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
