"use client";

import { FaHome, FaBook, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import NavLink from "@/app/ui/navLink/navLink";
import { usePathname } from "next/navigation";
import booksData from "../../../../api/book.json";
import styles from "../../styles/burger.module.css";

export default function Burger() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const gaiaBooks =
    booksData.trilogies.find((trilogy) => trilogy.name === "Trilogie de Gaïa")
      ?.books || [];
  const nouveauMondeBooks =
    booksData.trilogies.find(
      (trilogy) => trilogy.name === "Trilogie le nouveau monde"
    )?.books || [];

  return (
    <section className={styles.burgerMenu}>
      <div className="flex justify-around p-2">
        <NavLink href="/" title="Accueil" className={styles.navLink}>
          <FaHome size={24} />
        </NavLink>
        <NavLink href="/books" title="Livres" className={styles.navLink}>
          <FaBook size={24} />
        </NavLink>
        <NavLink href="/contact" title="Contact" className={styles.navLink}>
          <FaEnvelope size={24} />
        </NavLink>
      </div>
    </section>
  );
}
