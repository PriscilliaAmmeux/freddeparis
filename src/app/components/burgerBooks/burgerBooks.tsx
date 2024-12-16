"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/app/ui/navLink/navLink";

export default function BurgerMenu() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div>
      <button onClick={toggleSubMenu} className="text-white p-4">
        Prestations
      </button>
      {isSubMenuVisible && (
        <div>
          <Link href="/" passHref>
            <NavLink
              className="text-white p-4"
              title="Trilogie de Gaïa"
              href={""}>
              <ul>
                <li>Game Over</li>
                <li>La révolte des animaux</li>
                <li>Le voyage ultime</li>
              </ul>
            </NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink
              className="text-white p-4"
              title="Trilogie le nouveau monde"
              href={""}>
              <ul>
                <li>Bicéphales</li>
              </ul>
            </NavLink>
          </Link>
          <Link href="3" passHref>
            <NavLink
              className="text-white p-4"
              title="Réfléxologie crânienne"
              href={""}></NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink className="text-white p-4" title="QVT" href={""}></NavLink>
          </Link>
        </div>
      )}
    </div>
  );
}
