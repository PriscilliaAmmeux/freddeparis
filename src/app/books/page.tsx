import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livres de Frédéric DEPARIS",
  description: "",
};

export default function Books() {
  return (
    <Layout>
      <section className="pt-10 pb-10">
        <Title title="Livres" />
      </section>
    </Layout>
  );
}
