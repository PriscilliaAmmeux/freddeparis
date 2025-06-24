import { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center py-10 px-4 bg-blue-color">
      <div className="bg-white-color text-blue-color rounded-md p-6 w-full max-w-4xl shadow-md mx-auto">
        {children}
      </div>
    </section>
  );
}
