import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import { Rajdhani } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${rajdhani.variable} ${orbitron.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
