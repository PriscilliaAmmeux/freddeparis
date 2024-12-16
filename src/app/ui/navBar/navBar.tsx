"use client";

import NavLink from "@/app/ui/navLink/navLink";
import { useRouter } from "next/compat/router";

export default function navBar() {
  const router = useRouter();
  const isHomePage = router?.pathname === "/";
  return (
    <section
      className={`flex justify-between items-center p-4 w-full text-white ${
        isHomePage ? "bg-transparent" : "bg-primary-color"
      }`}>
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" isActive={true} />
        <NavLink href="/about" title="À propos de l'auteur" isActive={true} />
        <NavLink href="/books" title="Livres" isActive={true} />
        <NavLink href="/contact" title="Contact" isActive={true} />
      </nav>
    </section>
  );
}
