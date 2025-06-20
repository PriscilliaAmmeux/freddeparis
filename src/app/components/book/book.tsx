"use client";

import booksData from "../../../../api/book.json";
import Image from "next/image";
import styles from "../../styles/button.module.css";
import Button from "@/app/ui/button/button";
import Card from "../card/card";
import BiographyTrilogy from "../biographyTrilogy/biographyTrilogy";
import { useState } from "react";

export default function Book() {
  const trilogies = booksData.trilogies;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
    <section className="pb-10 w-full bg-yellow-50 shadow-sm rounded-xl flex justify-center flex-col items-center">
      <BiographyTrilogy />
      {trilogies.map((trilogy, index) => (
        <section key={index} className="mb-16 ml-2 mr-2">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6 font-orbitron">
            {trilogy.name}
          </h2>
          <div className="flex flex-wrap justify-center item-center -mx-4">
            {trilogy.books &&
              trilogy.books.map((book) => (
                <div
                  key={book.id}
                  className="w-full flex justify-center md:w-1/3 px-4 mb-8">
                  <Card>
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={150}
                      height={225}
                      className="mx-auto"
                    />

                    <div className="p-6 text-center flex justify-center flex-col h-full">
                      <button
                        onClick={toggleDropdown}
                        className="flex justify-center items-center px-4 py-2 rounded-lg hover:font-bold"
                        style={{ color: "var(--blue-color)" }}>
                        <h3 className="text-2xl font-semibold flex justify-center text-gray-800 mb-2 font-cinzel">
                          {book.title}
                        </h3>
                        <svg
                          style={{ color: "var(--blue-color)" }}
                          className={`ml-2 w-4 h-4 transition-transform transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div>
                          {" "}
                          <p className="mt-4 p-4 bg-gray-100 text-justify rounded-lg">
                            {book.summary}
                          </p>
                          <p className="text-gray-600 mb-4 text-justify italic">
                            {book.detail}
                          </p>
                          <p className="text-gray-600 mb-4 text-justify italic">
                            {book.detail2}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-2 p-4 mt-auto">
                        {book.title === "Morpheus ou la Révolution Poétique" ? (
                          <Button
                            type="button"
                            text="Lire un extrait"
                            aria-label="Lire un extrait"
                            className={styles["button-white-border"]}
                            onClick={() =>
                              book.pdfLink && handleDownload(book.pdfLink)
                            }
                          />
                        ) : (
                          book.title !== "Bientôt disponible" && (
                            <>
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
                            </>
                          )
                        )}
                      </div>
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
