import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";
import Title from "../ui/title/title";

export const metadata: Metadata = {
  title: "Mentions légales - Priscillia Ammeux",
};

export default function LegalNotices() {
  return (
    <Layout>
      <Title title="Mentions légales" />
      <section className="p-4">
        <div className="space-y-8">
          {legalNotices.map((notice) => (
            <div key={notice.id} className="border-b pb-4">
              <h2 className="text-xl font-bold mb-2">{notice.title}</h2>
              {Array.isArray(notice.content) ? (
                notice.content.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.text}
                  </p>
                ))
              ) : (
                <p className="mb-2">{notice.content}</p>
              )}
              {notice.list && (
                <ul className="list-disc list-inside mb-2">
                  {notice.list.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              )}
              {notice.footer && <p className="italic">{notice.footer}</p>}
            </div>
          ))}
        </div>

        <a
          href="/CGV_Priscillia_Ammeux.pdf"
          download
          aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
          className="text-xs md:text-sm lg:text-base underline hover:text-pink-700 hover:font-bold p-1">
          Télécharger les CGV
        </a>
      </section>
    </Layout>
  );
}
