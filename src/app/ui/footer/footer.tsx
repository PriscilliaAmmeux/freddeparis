import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";

export default function Footer() {
  return (
    <footer className="w-full sm:p-6 md:p-10 flex flex-col items-center justify-center pt-4 pb-4 px-4 gap-2 text-center md:text-left text-sm">
      <p className="text-xs md:text-sm lg:text-base font-semibold">
        © {new Date().getFullYear()} Frédéric DEPARIS. Tous droits réservés.
      </p>

      <a href="/legalNotices" className=" hover:underline cursor-pointer">
        Mentions légales
      </a>
      <p className="italic flex flex-col md:flex-row gap-2 items-center">
        Créé par Priscillia Ammeux, Conceptrice et Développeuse
        d&apos;Applications:
      </p>

      <a
        href="http://www.priscillia-ammeux-portfolio.fr"
        className="pl-2  hover:underline cursor-pointer"
        target="_blank"
        rel="noopener noreferrer">
        www.priscillia-ammeux-portfolio.fr
      </a>

      <ScrollToTopButton />
    </footer>
  );
}
