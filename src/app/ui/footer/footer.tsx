import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";

export default function Footer() {
  return (
    <footer className="text-xl color-text-white bg-blue-color custom-font w-full flex flex-col items-center justify-center pt-4 pb-10 px-4 gap-2 text-center md:text-left text-sm border-t border-gray-300 md:border-t-4 border-blue-pelorous shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-4xl gap-2 sm:gap-0">
        <a
          href="/legalNotices"
          className="hover:underline cursor-pointer font-bold text-center">
          Mentions légales
        </a>
        <a
          href="/privacy"
          className="hover:underline cursor-pointer font-bold text-center">
          Politiques de confidentialité
        </a>
      </div>

      <p className="italic flex flex-col md:flex-row gap-2 items-center mt-8">
        Créée par Priscillia Ammeux
      </p>

      <a
        href="http://www.priscillia-ammeux-portfolio.fr"
        className="pl-2 hover:underline cursor-pointer mb-5"
        target="_blank"
        rel="noopener noreferrer">
        www.priscillia-ammeux-portfolio.fr
      </a>

      <p className="text-xs md:text-sm lg:text-base font-semibold">
        © {new Date().getFullYear()} Frédéric DEPARIS. Tous droits réservés.
      </p>
    </footer>
  );
}
