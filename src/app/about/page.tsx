import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Livres de Frédéric DEPARIS - Science Fiction et Trilogies Captivantes",
  description:
    "Explorez la bibliothèque de Frédéric DEPARIS, auteur de science-fiction. Découvrez ses trilogies captivantes comme la Trilogie de Gaïa et ses œuvres phares : Game Over, La révolte des animaux, et Le voyage ultime.",
  keywords:
    "Livres Frédéric DEPARIS, science-fiction, romans captivants, trilogies, Trilogie de Gaïa, Game Over, La révolte des animaux, Le voyage ultime, auteur science-fiction, littérature imaginative",
};

export default function Page() {
  return (
    <Layout>
      <section className="pt-10 pb-10">
        <div className="flex justify-center items-center mb-8">
          <Title title="À propos de l'auteur" />
        </div>

        <div className="flex flex-col md:flex-row items-center mb-8 px-4 md:px-8 lg:px-16">
          <Image
            src="/fred.jpeg"
            alt="Frédéric DEPARIS"
            width={200}
            height={200}
            className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-48 lg:h-48"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <p className="mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              nulla voluptates quia distinctio facilis dicta velit. Officia et
              inventore quod laboriosam nisi necessitatibus, dolores aliquam hic
              quasi dicta voluptates sed. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Impedit, nulla voluptates quia distinctio
              facilis dicta velit. Officia et inventore quod laboriosam nisi
              necessitatibus, dolores aliquam hic quasi dicta voluptates sed.
            </p>
            <p className="mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              nulla voluptates quia distinctio facilis dicta velit. Officia et
              inventore quod laboriosam nisi necessitatibus, dolores aliquam hic
              quasi dicta voluptates sed. A voluptates quia distinctio facilis
              dicta velit. Officia et inventore quod laboriosam nisi
              necessitatibus, dolores aliquam hic quasi dicta voluptates sed. A
              voluptates quia distinctio facilis dicta velit. Officia et
              inventore quod laboriosam.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
