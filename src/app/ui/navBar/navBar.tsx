import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function navBar() {
  return (
    <section className="flex justify-between items-center p-4 w-full">
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" isActive={true} />
        <NavLink href="/about" title="A propos de l'auteur" isActive={true} />
        <NavLink href="/contact" title="Contact" isActive={true} />
      </nav>
    </section>
  );
}