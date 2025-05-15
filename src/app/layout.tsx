import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Animation from "./Animation";
import LocalStorageProvider from "@/components/localStorageProvider";

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
      <body className={roboto.className}>
        <Animation>
          <LocalStorageProvider>{children}</LocalStorageProvider>
        </Animation>
      </body>
    </html>
  );
}
