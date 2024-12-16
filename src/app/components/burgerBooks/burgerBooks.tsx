"use client";

import { useState } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import booksData from "../../../../api/book.json";

export default function BurgerBooks() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  const trilogies = booksData.reduce(
    (acc: { [key: string]: typeof booksData }, book) => {
      const { "name-trilogy": nameTrilogy } = book;
      if (!acc[nameTrilogy]) {
        acc[nameTrilogy] = [];
      }
      acc[nameTrilogy].push(book);
      return acc;
    },
    {}
  );

  return (
    <div>
      <button onClick={toggleSubMenu} className="text-white p-4">
        Livres
      </button>
      {isSubMenuVisible && (
        <section>
          {Object.entries(trilogies).map(([trilogyName, books], index) => (
            <div key={index}>
              <h2>{trilogyName}</h2>
              <ul className="mt-2">
                {books.map((book) => (
                  <li key={book.id}>
                    <NavLink href={book.link} title={book.title}>
                      {book.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
