import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import privacyPolicy from "../../../api/confidentialite.json";
import Title from "../ui/title/title";
import LegalSection from "../components/legalSection/legalSection";
import LegalLayout from "../components/legalLayout/legalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Frédéric DEPARIS",
  description:
    "Consultez la politique de confidentialite du site de Frederic DEPARIS. Informations sur la collecte de donnees, responsable du traitement, droits utilisateurs et securite.",
  keywords:
    "politique-de-confidentialite|donnees-personnelles|rgpd|cookies|consentement|responsable-du-traitement|droits-utilisateurs|securite|frederic-deparis|formulaire-de-contact",
  openGraph: {
    title: "Politique de confidentialité - Frédéric DEPARIS",
    description:
      "Toutes les informations sur la gestion de vos donnees personnelles sur le site de Frederic DEPARIS : collecte, finalites, droits, securite et contact.",
    url: "https://www.frederic-deparis.fr/privacy",
    siteName: "Frederic DEPARIS",
    type: "website",
  },
  alternates: {
    canonical: "https://www.frederic-deparis.fr/privacy",
  },
};

export default function Privacy() {
  return (
    <Layout>
      <LegalLayout>
        <Title title="Politique de confidentialité" />
        <LegalSection data={privacyPolicy} />
      </LegalLayout>
    </Layout>
  );
}
