import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Animation from "./Animation";
import { LocalStorageProvider } from "@/components/localStorageProvider";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Whatsapp from "../../public/whatsapp.png";
import Image from "next/image";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <Animation>
          <ThemeProvider theme={theme}>
            <LocalStorageProvider>
              {children}
              <a
                href="https://wa.me/6281284845169"
                target="_blank"
                aria-label="Chat via WhatsApp"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  zIndex: 1000,
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image src={Whatsapp} alt="WhatsApp" width={60} height={60} />
              </a>
            </LocalStorageProvider>
          </ThemeProvider>
        </Animation>
      </body>
    </html>
  );
}
