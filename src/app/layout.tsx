import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rajdhani } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
      className={`${inter.className} ${rajdhani.variable} ${orbitron.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
