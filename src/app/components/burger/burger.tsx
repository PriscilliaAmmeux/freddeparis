"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "@/app/ui/socialNetwork/socialNetwork";
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

  return (
    <section
      style={{
        height: isOpen ? "100vh" : "auto",
      }}
      onClick={(e) => e.stopPropagation()}
      className={`text-white ${
        isHomePage ? "bg-transparent" : "bg-primary-color"
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
          } flex flex-col items-center justify-center `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <NavLink
            href="/"
            title="Accueil"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <NavLink
            href="/about"
            title="À propos de l'auteur"
            onClick={handleCloseMenu}
            isActive={true}
          />
          <NavLink
            href="/books"
            title="Livres ▼"
            onClick={(e) => {
              e.preventDefault();
            }}
            isActive={true}
          />

          <div className="flex flex-col items-center">
            {booksData.map((booksData) => (
              <NavLink
                href={booksData.link}
                title={booksData.title}
                key={booksData.id}
                onClick={handleCloseMenu}
              />
            ))}
          </div>

          <NavLink
            href="/contact"
            title="Contact"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <NavLink
            href="/legalNotices"
            title="Mentions légales"
            onClick={handleCloseMenu}
            isActive={true}
          />

          <span className="flex items-center mt-5">
            <SocialNetwork />
          </span>
        </nav>
      )}
    </section>
  );
}
