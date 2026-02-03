import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";
import Book from "./components/book/book";
import { Metadata } from "next";

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
      <section id="accueil">
        <Header />
      </section>
      <section id="livres">
        <Book />
      </section>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </section>
  );
}
