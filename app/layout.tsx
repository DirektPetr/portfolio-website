import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const openSans = localFont({
  src: "./fonts/OpenSans-Regular.woff",
  variable: "--font-open-sans",
  weight: "100 900",
});
const openSansBold = localFont({
  src: "./fonts/OpenSans-Bold.woff",
  variable: "--font-open-sans-bold",
  weight: "100 900",
});
const openSansLight = localFont({
  src: "./fonts/OpenSans-Light.woff",
  variable: "--font-open-sans-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Разработка сайтов под ключ",
  description: "Создание и продвижение сайтов под ключ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${openSans.variable} ${openSansBold.variable} ${openSansLight.variable} antialiased`}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
