interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
      {children}
    </section>
  );
}
