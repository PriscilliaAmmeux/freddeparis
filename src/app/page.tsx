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
    "Frédéric DEPARIS, auteur science-fiction, romans dystopiques, trilogies captivantes, Trilogie de Gaïa, Game Over, Le voyage ultime, Le nouveau monde, livres numériques, romans futuristes",
};

export default function Home() {
  return (
    <section className=" flex flex-col justify-center">
      <div className="background-image flex flex-col items-center justify-center h-full w-full">
        <div className="fixed top-0 left-0 w-full z-50">
          {" "}
          <Navigation />
        </div>

        <h1 className="flex flex-col items-center text-center text-white custom-font text-5xl">
          <span>Frédéric</span>
          <span>DEPARIS</span>
        </h1>
      </div>
      <Analytics />
      <SpeedInsights />
      <Cookies />
    </section>
  );
}
