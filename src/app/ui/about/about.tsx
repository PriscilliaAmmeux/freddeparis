import Card from "@/app/components/card/card";
import Title from "../title/title";
import Image from "next/image";

export default function About() {
  return (
    <section className="pt-10 pb-10 bg-blue-color">
      <div className="flex justify-center items-center mb-8">
        <Title title="À propos de l'auteur" />
      </div>
      <div className="ml-10 mr-10">
        <Card>
          <div className="flex flex-col md:flex-row items-center mb-8 px-4 md:px-8 lg:px-16">
            <Image
              src="/fred.jpeg"
              alt="Frédéric DEPARIS"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-48 lg:h-48"
            />
            <div className="md:ml-8 mt-4 md:mt-0">
              <Title title="Frédéric DEPARIS" />
              <h3 className="font-bold">Biographie</h3>

              <p className="mb-4">
                Frédéric Deparis est né en ... à.... (à compléter)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
