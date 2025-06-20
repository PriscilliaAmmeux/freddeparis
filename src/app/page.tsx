import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Cookies from "./components/cookies/cookies";
import Navigation from "./ui/navigation/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frédéric DEPARIS - Auteur de Science Fiction",
  description:
    "Plongez dans l'univers captivant de Frédéric DEPARIS, auteur de science-fiction et de romans incontournables. Découvrez ses trilogies uniques, lisez des extraits exclusifs et commandez vos livres préférés. Idéal pour les amateurs de littérature imaginative.",
  keywords:
    "Frédéric DEPARIS, auteur science-fiction, romans dystopiques, nepomucène, trilogies captivantes, Trilogie de Gaïa, Game Over, Le voyage ultime, Le nouveau monde, livres numériques, romans futuristes",
};

export default function Home() {
  return (
    <section className=" flex flex-col justify-center">
      <div className="background-image flex flex-col items-center justify-center h-full w-full">
        <div className="fixed top-0 left-0 w-full z-50">
          {" "}
          <Navigation />
        </div>
        {/* Version mobile */}
        <div
          className="md:hidden text-white text-center mb-10"
          aria-hidden="false">
          <p className="text-2xl">Deux trilogies</p>
          <p className="text-2xl  mb-10">de Science-Fiction</p>
          <p className="text-3xl font-orbitron">"Gaia"</p>
          <p className="text-2xl">et</p>
          <p className="text-3xl font-orbitron">"Le Nouveau Monde"</p>
        </div>

        {/* Version desktop */}
        <div
          className="hidden md:block text-white text-center mb-10"
          aria-hidden="true">
          <p className="text-3xl mb-10 ">Deux trilogies de Science-Fiction</p>
          <p className="text-5xl font-orbitron">
            "Gaia" <span className="text-3xl">et</span> "le Nouveau Monde"
          </p>
        </div>
        <h1 className="flex flex-col md:flex-row items-center text-center md:text-left text-white custom-font text-2xl md:text-3xl">
          <span className="md:mr-2">Frédéric</span>
          <span>DEPARIS</span>
        </h1>
      </div>
      <Analytics />
      <SpeedInsights />
      <Cookies />
    </section>
  );
}
