import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";
import Title from "../ui/title/title";
import LegalSection from "../components/legalSection/legalSection";
import LegalLayout from "../components/legalLayout/legalLayout";

export const metadata: Metadata = {
  title: "Mentions légales - Frédéric DEPARIS",
  description:
    "Consultez les mentions légales du site officiel de Frédéric DEPARIS, auteur de science-fiction et de romans captivants. Informations sur l'éditeur, l'hébergement et les droits.",
  keywords:
    "Mentions légales, Frédéric DEPARIS, site officiel, auteur science-fiction, informations légales, droits d'auteur, hébergeur, éditeur",
};

export default function LegalNotices() {
  return (
    <Layout>
      <LegalLayout>
        <Title title="Mentions légales" />
        <LegalSection data={legalNotices} />
      </LegalLayout>
    </Layout>
  );
}
