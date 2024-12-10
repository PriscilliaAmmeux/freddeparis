import Burger from "../../components/burger/burger";
import NavBar from "../navBar/navBar";

export default function navigation() {
  return (
    <nav>
      <section className="lg:hidden">
        <Burger />
      </section>
      <section className="hidden lg:flex justify-center">
        <NavBar />
      </section>
    </nav>
  );
}
