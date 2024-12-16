"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import NavLink from "@/app/ui/navLink/navLink";

export default function Burger() {
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
      className="bg-primary-color text-white flex justify-end"
      // Prevent closing when clicking inside the menu
    >
      <div className="mt-2">
        <button
          className="lg:hidden text-white "
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className={`${styles.burgerMenu} ${
            isOpen ? styles.open : ""
          } flex flex-col items-center justify-start `}
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
            title="A propos de l'auteur"
            onClick={handleCloseMenu}
            isActive={true}
          />
          <NavLink
            href="/books"
            title="Livres"
            onClick={(e) => {
              e.preventDefault();
            }}
            isActive={true}
          />

          <NavLink
            href="/contact"
            title="Contact"
            onClick={handleCloseMenu}
            isActive={true}
          />
        </nav>
      )}
    </section>
  );
}
