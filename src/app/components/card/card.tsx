interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden">
      {children}
    </section>
  );
}
