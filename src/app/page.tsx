import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Navigation from "./ui/navigation/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frederic DEPARIS - Auteur de Science Fiction",
  description:
    "Plongez dans l'univers captivant de Frederic DEPARIS, auteur de science-fiction et de romans incontournables. Decouvrez ses trilogies uniques, lisez des extraits exclusifs et commandez vos livres preferes. Ideal pour les amateurs de litterature imaginative.",
  openGraph: {
    title: "Frederic DEPARIS - Auteur de Science Fiction",
    description:
      "Plongez dans l'univers captivant de Frederic DEPARIS, auteur de science-fiction et de romans incontournables. Decouvrez ses trilogies uniques, lisez des extraits exclusifs et commandez vos livres preferes. Ideal pour les amateurs de litterature imaginative.",
    url: "https://www.frederic-deparis.fr",
    siteName: "Frederic DEPARIS",
    type: "website",
  },
  keywords:
    "frederic-deparis|auteur-science-fiction|romans-dystopiques|nepomucene|trilogies-captivantes|trilogie-de-gaia|game-over|le-voyage-ultime|le-nouveau-monde|livres-numeriques|romans-futuristes",
};

export default function Home() {
  return (
    <section className=" flex flex-col justify-center">
      <div className="background-image flex flex-col items-center justify-center h-full w-full">
        <div className="fixed top-0 left-0 w-full z-50">
          {" "}
          <Navigation />
        </div>
        <div className="text-white text-center mb-10">
          <div className="md:hidden" aria-hidden="false">
            <p className="text-2xl font-cinzel">Deux trilogies</p>
            <p className="text-2xl mb-10">de Science-Fiction</p>
            <p className="text-3xl font-orbitron">Gaia</p>
            <p className="text-2xl font-cinzel">et</p>
            <p className="text-3xl font-orbitron">Le Nouveau Monde</p>
          </div>
          <div className="hidden md:block" aria-hidden="true">
            <p className="text-3xl mb-10 font-rajdhani">
              Deux trilogies de Science-Fiction
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-5xl font-orbitron">Gaia</p>
              <p className="text-3xl font-cinzel">et</p>
              <p className="text-5xl font-orbitron">Le Nouveau Monde</p>
            </div>
          </div>
        </div>
        <h1 className="flex flex-col md:flex-row items-center text-center md:text-left text-white custom-font text-2xl md:text-3xl ">
          <span className="md:mr-2 font-rajdhani">Frédéric</span>
          <span className="font-rajdhani">DEPARIS</span>
        </h1>
      </div>
      <Analytics />
      <SpeedInsights />
    </section>
  );
}
