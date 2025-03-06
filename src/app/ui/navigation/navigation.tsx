import Burger from "../../components/burger/burger";
import NavBar from "../navBar/navBar";

export default function navigation() {
  return (
    <nav className="flex md:justify-center w-full">
      <section className="lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:flex justify-center w-full">
        <NavBar />
      </section>
    </nav>
  );
}
