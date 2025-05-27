"use client";

import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState, useEffect, ReactNode, createContext, useContext } from "react";

interface LocalStorageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  language: string;
}

// Buat Context
const LanguageContext = createContext<LanguageContextType>({
  language: "id",
});

// // Fungsi untuk memuat terjemahan
// const loadTranslations = (locale) => {
//   try {
//     return require(`../locales/${locale}.json`);
//   } catch (error) {
//     console.error(`Gagal memuat terjemahan untuk locale: ${locale}`);
//     return require('../locales/en.json'); // Fallback ke bahasa Inggris
//   }
// };

export function LocalStorageProvider({ children }: LocalStorageProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    const checkAndSetLocalStorage = () => {
      try {
        const settings = localStorage.getItem("languageSettings");
        if (!settings) {
          localStorage.setItem("languageSettings", "id");
          setLanguage("id");
        }
        if (settings) setLanguage(settings);
        setIsReady(true);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        setIsReady(true);
      }
    };

    checkAndSetLocalStorage();
  }, [language]);

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

  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus digunakan di dalam LanguageProvider");
  }
  return context;
};
