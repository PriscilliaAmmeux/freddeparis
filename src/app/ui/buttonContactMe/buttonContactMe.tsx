import Link from "next/link";
import Button from "../button/button";

export default function ButtonContactMe() {
  return (
    <Link href="/contact">
      <Button
        type={"button"}
        text={"Envoyer un email"}
        className="mt-5"
        aria-label={
          "Cliquez sur le bouton pour aller sur la page Contact afin d'envoyer un email"
        }
      />
    </Link>
  );
}
