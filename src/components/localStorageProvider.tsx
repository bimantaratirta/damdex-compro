"use client";

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
        // Tetap lanjutkan meski error (misalnya, private browsing)
        setIsReady(true);
      }
    };

    checkAndSetLocalStorage();
  }, []);

  if (!isReady) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
