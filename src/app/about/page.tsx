import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livres de Frédéric DEPARIS",
  description: "À propos de l'auteur",
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
