import React from "react";

type LegalSectionProps = {
  data: { id: number; title: string; content: string | { text: string }[] }[];
};

export default function LegalSection({ data }: LegalSectionProps) {
  return (
    <section>
      {data.map((notice) => (
        <div key={notice.id} className="border-b border-blue-100 pb-4">
          <h2 className="text-xl font-bold mb-2">{notice.title}</h2>
          {Array.isArray(notice.content) ? (
            notice.content.map((item, index) => (
              <p key={index} className="mb-2 flex text-justify">
                {item.text}
              </p>
            ))
          ) : (
            <p className="mb-2 text-justify">{notice.content}</p>
          )}
        </div>
      ))}
    </section>
  );
}
