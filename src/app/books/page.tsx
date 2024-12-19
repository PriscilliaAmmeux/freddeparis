import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import type { Metadata } from "next";
import booksData from "../../../api/book.json";
import Image from "next/image";
import Button from "../ui/button/button";
import styles from "../styles/button.module.css";

export const metadata: Metadata = {
  title: "Livres de Frédéric DEPARIS",
  description: "",
};

export default function Books() {
  const trilogies = booksData.trilogies;

  return (
    <Layout>
      <section className="pt-10 pb-10 pl-2 pr-2">
        <div className="flex items-center justify-center">
          <Title title="Livres" />
        </div>

        {trilogies.map((trilogy, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold">{trilogy.name}</h2>
            <p className="mb-4 text-justify">{trilogy.summary}</p>
            {trilogy.books &&
              trilogy.books.map((book) => (
                <div key={book.id} className="flex mb-6">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={200}
                    height={100}
                    className="mr-4"
                  />
                  <div className="w-3/4">
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <p className="mb-2 text-justify">{book.summary}</p>
                    <div className="flex gap-1">
                      <Button
                        type="button"
                        text="Lire un extrait"
                        className={styles["button-white-border"]}
                      />
                      <Button
                        type="button"
                        text="Acheter"
                        className={styles["button-blue-border"]}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </section>
    </Layout>
  );
}
