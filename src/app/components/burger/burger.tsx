"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import { usePathname } from "next/navigation";
import booksData from "../../../../api/book.json";

export default function Burger() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [isOpen]);

  const gaiaBooks =
    booksData.trilogies.find((trilogy) => trilogy.name === "Trilogie de Gaïa")
      ?.books || [];
  const nouveauMondeBooks =
    booksData.trilogies.find(
      (trilogy) => trilogy.name === "Trilogie le nouveau monde"
    )?.books || [];

  return (
    <section
      style={{
        height: isOpen ? "100vh" : "auto",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
      onClick={(e) => e.stopPropagation()}
      className={`text-white ${
        isHomePage ? "bg-transparent" : "bg-blue-color"
      }`}>
      <div className="mt-2">
        <button
          className="lg:hidden text-white flex justify-end p-4"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className={`${styles.burgerMenu} ${
            isOpen ? styles.open : ""
          } flex flex-col items-center justify-center pt-2`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <NavLink
            href="/"
            title="Accueil"
            className="flex items-center justify-center mb-2 font-bold"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <NavLink
            href="/books"
            title="Livres"
            className="flex items-center justify-center mb-2 font-bold"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <NavLink
            href="/contact"
            title="Contact"
            className="flex items-center justify-center mb-2 font-bold"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <NavLink
            href="/legalNotices"
            title="Mentions légales"
            className="flex items-center justify-center font-bold"
            onClick={handleCloseMenu}
            isActive={true}
          />
        </nav>
      )}
    </section>
  );
}
