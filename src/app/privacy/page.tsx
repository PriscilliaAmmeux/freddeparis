import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import privacyPolicy from "../../../api/confidentialite.json"; // <-- à créer
import Title from "../ui/title/title";
import LegalSection from "../components/legalSection/legalSection";
import LegalLayout from "../components/legalLayout/legalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Frédéric DEPARIS",
  description:
    "Consultez la politique de confidentialité du site de Frédéric DEPARIS. Informations sur la collecte de données, Google Analytics et consentement utilisateur.",
  keywords:
    "politique de confidentialité, données personnelles, RGPD, cookies, Google Analytics, consentement, Frédéric DEPARIS",
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
