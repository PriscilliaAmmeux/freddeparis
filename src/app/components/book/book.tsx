"use client";

import booksData from "../../../../api/book.json";
import Image from "next/image";
import styles from "../../styles/button.module.css";
import Button from "@/app/ui/button/button";
import Title from "@/app/ui/title/title";

export default function Book() {
  const trilogies = booksData.trilogies;

  const handleDownload = async (pdfLink: string) => {
    try {
      const response = await fetch(pdfLink);
      if (!response.ok) {
        throw new Error("PDF download failed");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = pdfLink.split("/").pop() || "downloaded-document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download PDF");
    }
  };

  return (
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
                        <Button
                          type="button"
                          text="Lire un extrait"
                          className={styles["button-white-border"]}
                          onClick={() =>
                            book.pdfLink && handleDownload(book.pdfLink)
                          }
                        />

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
  );
}
