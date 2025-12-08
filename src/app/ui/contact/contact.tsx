import Form from "@/app/components/form/form";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0 md:pt-10 pb-10 bg-blue-color">
      <div className="w-full md:w-2/4 ">
        <Form />
      </div>
    </section>
  );
}
