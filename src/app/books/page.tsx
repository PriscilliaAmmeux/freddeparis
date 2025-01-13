import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import type { Metadata } from "next";
import booksData from "../../../api/book.json";
import Image from "next/image";
import Button from "../ui/button/button";
import styles from "../styles/button.module.css";

export const metadata: Metadata = {
  title: "Livres de Frédéric DEPARIS - Découvrez ses Œuvres de Science Fiction",
  description:
    "Parcourez les livres de Frédéric DEPARIS, auteur passionné de science-fiction. Découvrez ses romans captivants, ses trilogies comme la Trilogie de Gaïa, et plongez dans des récits uniques et imaginatifs.",
  keywords:
    "Livres Frédéric DEPARIS, romans science-fiction, trilogies captivantes, Trilogie de Gaïa, Game Over, Le voyage ultime, La révolte des animaux, littérature imaginative, auteur français",
};

export default function Books() {
  const trilogies = booksData.trilogies;

  return (
    <Layout>
      <section className="pt-10 pb-10 pl-2 pr-2">
        <div className="text-center mb-10">
          <Title title="Livres" />
          <p className="text-lg text-gray-700 mt-4">
            Deux trilogies pour le plaisir de lire
          </p>
        </div>
        {trilogies.map((trilogy, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
              {trilogy.name}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              {trilogy.summary}
            </p>
            <div className="flex flex-wrap justify-center -mx-4">
              {trilogy.books &&
                trilogy.books.map((book) => (
                  <div key={book.id} className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={150}
                        height={225}
                        className="mx-auto"
                      />

                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                          {book.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{book.summary}</p>
                        <div className="flex flex-col gap-2">
                          <a href={book.pdfLink} download>
                            <Button
                              type="button"
                              text="Lire un extrait"
                              className={styles["button-white-border"]}
                            />
                          </a>
                          <Button
                            type="button"
                            text="Acheter"
                            className={styles["button-blue-border"]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
