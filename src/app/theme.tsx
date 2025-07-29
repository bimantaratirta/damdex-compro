"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // <576px
      sm: 576, // ≥576px
      md: 768, // ≥768px
      lg: 992, // ≥992px
      xl: 1200, // ≥1200px
    },
  },
});

export default theme;
