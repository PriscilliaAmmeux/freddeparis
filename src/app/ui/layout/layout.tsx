import React from "react";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
