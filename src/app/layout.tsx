import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Animation from "./Animation";
import { LocalStorageProvider } from "@/components/localStorageProvider";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAMDEX",
  description: "DAMDEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className={roboto.className}>
        <Animation>
          <ThemeProvider theme={theme}>
            <LocalStorageProvider>{children}</LocalStorageProvider>
          </ThemeProvider>
        </Animation>
      </body>
    </html>
  );
}
