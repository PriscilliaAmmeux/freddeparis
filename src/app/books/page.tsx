import Book from "../components/book/book";
import Layout from "../ui/layout/layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Livres de Frederic DEPARIS - Decouvrez ses Oeuvres de Science Fiction",
  description:
    "Parcourez les livres de Frederic DEPARIS, auteur passionne de science-fiction. Decouvrez ses romans captivants, ses trilogies comme la Trilogie de Gaia, et plongez dans des recits uniques et imaginatifs.",
  keywords:
    "livres-frederic-deparis|romans-science-fiction|trilogies-captivantes|trilogie-de-gaia|game-over|le-voyage-ultime|la-revolte-des-animaux|litterature-imaginative|auteur-francais",
  openGraph: {
    title:
      "Livres de Frederic DEPARIS - Decouvrez ses Oeuvres de Science Fiction",
    description:
      "Parcourez les livres de Frederic DEPARIS, auteur passionne de science-fiction. Decouvrez ses romans captivants, ses trilogies comme la Trilogie de Gaia, et plongez dans des recits uniques et imaginatifs.",
    url: "https://www.frederic-deparis.fr/books",
    siteName: "Frederic DEPARIS",
    type: "website",
  },
  alternates: {
    canonical: "https://www.frederic-deparis.fr/books",
  },
};

export default function Books() {
  return (
    <Layout>
      <Book />
    </Layout>
  );
}
