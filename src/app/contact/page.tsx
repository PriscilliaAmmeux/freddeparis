import Form from "../components/form/form";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export default function Page() {
  return (
    <Layout>
      <section className="pt-10 pb-10">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-2/4">
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  );
}
