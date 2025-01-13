import Book from "../components/book/book";
import Layout from "../ui/layout/layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livres de Frédéric DEPARIS - Découvrez ses Œuvres de Science Fiction",
  description:
    "Parcourez les livres de Frédéric DEPARIS, auteur passionné de science-fiction. Découvrez ses romans captivants, ses trilogies comme la Trilogie de Gaïa, et plongez dans des récits uniques et imaginatifs.",
  keywords:
    "Livres Frédéric DEPARIS, romans science-fiction, trilogies captivantes, Trilogie de Gaïa, Game Over, Le voyage ultime, La révolte des animaux, littérature imaginative, auteur français",
};

export default function Books() {
  return (
    <Layout>
      <Book />
    </Layout>
  );
}
