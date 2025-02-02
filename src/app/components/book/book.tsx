"use client";

import booksData from "../../../../api/book.json";
import Image from "next/image";
import styles from "../../styles/button.module.css";
import Button from "@/app/ui/button/button";
import Card from "../card/card";
import BiographyTrilogy from "../biographyTrilogy/biographyTrilogy";

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
    <section className=" pb-10 w-full ">
      <BiographyTrilogy />
      {trilogies.map((trilogy, index) => (
        <section key={index} className="mb-16 ml-2 mr-2">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6 italic">
            {trilogy.name}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 ml-10 mr-10 text-justify">
            {trilogy.summary}
          </p>
          <div className="flex flex-wrap justify-center -mx-4">
            {trilogy.books &&
              trilogy.books.map((book) => (
                <div key={book.id} className="w-full md:w-1/3 px-4 mb-8">
                  <Card>
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
                      <p className="text-gray-600 mb-4 text-justify">
                        {book.summary}
                      </p>
                      <section className="flex  gap-2">
                        <Button
                          type="button"
                          text="Lire un extrait"
                          aria-label="Lire un extrait"
                          className={styles["button-white-border"]}
                          onClick={() =>
                            book.pdfLink && handleDownload(book.pdfLink)
                          }
                        />

                        <Button
                          type="button"
                          text="Se procurer le livre"
                          aria-label="Se procurer le livre"
                          className={styles["button-blue-border"]}
                          onClick={() => window.open(book.buyLink)}
                        />
                      </section>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}
