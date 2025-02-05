import { Metadata } from "next";
import Form from "../components/form/form";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Contact - Frédéric DEPARIS, Auteur de Science Fiction",
  description:
    "Entrez en contact avec Frédéric DEPARIS, auteur de science-fiction et de romans captivants. Posez vos questions, partagez vos avis ou demandez des informations sur ses œuvres.",
  keywords:
    "Contact Frédéric DEPARIS, auteur science-fiction, romans captivants, poser des questions, avis lecteurs, trilogies, Trilogie de Gaïa, Game Over, contact auteur",
};

export default function Page() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0 pt-10 pb-10 bg-white-color">
        <div className="w-full md:w-2/4 ">
          <Form />
        </div>
      </section>
    </Layout>
  );
}
