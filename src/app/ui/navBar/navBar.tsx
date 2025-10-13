"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Accueil" },
  { href: "/books", label: "Livres" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <section className="relative flex items-center p-4 w-screen bg-white-color color-text-blue">
      <h2 className="font-orbitron mb-0 ml-2 absolute left-4 top-1/2 -translate-y-1/2">
        Frédéric DEPARIS
      </h2>
      <nav className="flex space-x-4 mx-auto">
        {navigationItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={`px-4 py-2 font-orbitron rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-blue-700 font-bold"
                  : "text-gray-600 hover:text-blue-700"
              }`}>
              {label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
