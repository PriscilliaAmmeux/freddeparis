import { Metadata } from "next";
import Form from "../components/form/form";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Contact - Frederic DEPARIS, Auteur de Science Fiction",
  description:
    "Entrez en contact avec Frederic DEPARIS, auteur de science-fiction et de romans captivants. Posez vos questions, partagez vos avis ou demandez des informations sur ses oeuvres.",
  keywords:
    "contact-frederic-deparis|auteur-science-fiction|romans-captivants|poser-des-questions|avis-lecteurs|trilogies|trilogie-de-gaia|game-over|contact-auteur",
  openGraph: {
    title: "Contact - Frederic DEPARIS, Auteur de Science Fiction",
    description:
      "Entrez en contact avec Frederic DEPARIS, auteur de science-fiction et de romans captivants. Posez vos questions, partagez vos avis ou demandez des informations sur ses oeuvres.",
  },
  alternates: {
    canonical: "https://www.frederic-deparis.fr/contact",
  },
};

export default function Page() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0 md:pt-10 pb-10 bg-blue-color">
        <div className="w-full md:w-2/4 ">
          <Form />
        </div>
      </section>
    </Layout>
  );
}
