"use client";

import { useState } from "react";

const navigationItems = [
  { href: "#biographie", label: "Biographie" },
  { href: "#oeuvres", label: "Les oeuvres" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("#accueil");

  const handleClick = (href: string) => {
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center p-4 w-screen bg-white-color color-text-blue">
      <h2 className="font-orbitron mb-0 ml-2 absolute left-4 top-1/2 -translate-y-1/2">
        Frédéric DEPARIS
      </h2>
      <nav className="flex space-x-4 mx-auto">
        {navigationItems.map(({ href, label }) => {
          const isActive = activeSection === href;

          return (
            <a
              key={href}
              href={href}
              title={label}
              onClick={(e) => {
                e.preventDefault();
                handleClick(href);
              }}
              className={`px-4 py-2 font-orbitron rounded-lg transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-blue-700 font-bold"
                  : "text-gray-600 hover:text-blue-700"
              }`}>
              {label}
            </a>
          );
        })}
      </nav>
    </section>
  );
}
