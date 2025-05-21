"use client";

import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState, useEffect, ReactNode } from "react";

interface LocalStorageProviderProps {
  children: ReactNode;
}

export default function LocalStorageProvider({ children }: LocalStorageProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAndSetLocalStorage = () => {
      try {
        const settings = localStorage.getItem("languageSettings");
        if (!settings) {
          localStorage.setItem("languageSettings", "id");
        }
        setIsReady(true);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        setIsReady(true);
      }
    };

    checkAndSetLocalStorage();
  }, []);

  if (!isReady) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", height: "20vh", mt: "35vh" }}>
        <Stack direction="column">
          <CircularProgress sx={{ margin: "auto" }} />
          <Typography>Loading language setting</Typography>
        </Stack>
      </Box>
    );
  }

  return <>{children}</>;
}
