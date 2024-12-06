import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${openSansBold.variable} ${openSansLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
