"use client";

import { FaHome, FaBook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Accueil", icon: FaHome },
  { href: "/books", label: "Livres", icon: FaBook },
  { href: "/contact", label: "Contact", icon: FaEnvelope },
];

export default function Burger() {
  const pathname = usePathname();

  return (
    <section className="bg-white border-t border-gray-300 shadow-lg fixed bottom-0 left-0 w-full z-50 md:relative md:shadow-none md:border-t-0 md:bg-transparent">
      <div className="flex justify-around p-2 md:justify-center md:gap-8">
        {navigationItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 md:flex-row md:gap-2 md:px-4 md:py-3 md:rounded-lg ${
                isActive
                  ? "text-blue-800 dark:text-blue-800 font-bold md:bg-blue-100 md:border-b-2 md:border-blue-500"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 md:hover:bg-blue-50"
              }`}>
              <Icon size={24} className="md:text-lg" />
              <span className="text-xs md:text-base font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
