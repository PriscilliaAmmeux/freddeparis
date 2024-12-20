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
        <div className="flex justify-center items-center">
          <Title title="À propos de l'auteur" />
        </div>

        <Image
          src="/image.png"
          alt="Frédéric DEPARIS"
          width={300}
          height={300}
          className="w-screen h-auto"
        />
        <p className="p-2 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nulla voluptates quia distinctio facilis dicta velit. Officia et
          inventore quod laboriosam nisi necessitatibus, dolores aliquam hic
          quasi dicta voluptates sed. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit, nulla voluptates quia distinctio facilis
          dicta velit. Officia et inventore quod laboriosam nisi necessitatibus,
          dolores aliquam hic quasi dicta voluptates sed.
        </p>
        <p className="p-2 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nulla voluptates quia distinctio facilis dicta velit. Officia et
          inventore quod laboriosam nisi necessitatibus, dolores aliquam hic
          quasi dicta voluptates sed. a voluptates quia distinctio facilis dicta
          velit. Officia et inventore quod laboriosam nisi necessitatibus,
          dolores aliquam hic quasi dicta voluptates sed. a voluptates quia
          distinctio facilis dicta velit. Officia et inventore quod laboriosam
        </p>
      </section>
    </Layout>
  );
}
