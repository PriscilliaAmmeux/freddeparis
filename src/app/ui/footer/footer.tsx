export default function Footer() {
  return (
    <footer className="text-xl color-text-white bg-blue-color custom-font w-full flex flex-col items-center justify-center pt-4 pb-10 px-4 gap-2 text-center md:text-left text-sm border-t border-gray-300 md:border-t-4 border-blue-pelorous shadow-lg">
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <a
            href="/"
            className="hover:underline cursor-pointer text-center">
            Accueil
          </a>
          <a
            href="/books"
            className="hover:underline cursor-pointer text-center">
            Livres
          </a>
          <a
            href="/contact"
            className="hover:underline cursor-pointer text-center">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-start">
          <a
            href="/legalNotices"
            className="hover:underline cursor-pointer text-center">
            Mentions légales
          </a>
          <a
            href="/privacy"
            className="hover:underline cursor-pointer text-center">
            Politiques de confidentialité
          </a>
        </div>
      </div>

      <p className="italic flex flex-col md:flex-row items-center mt-8">
        Créée par{" "}
        <a
          href="http://www.pixelia-and-co.fr"
          className="pl-2 hover:underline cursor-pointer"
          target="_blank"
          rel="noopener noreferrer">
          Pixelia&Co
        </a>
      </p>

      <p className="text-xs md:text-sm lg:text-base font-semibold">
        © {new Date().getFullYear()} Frédéric DEPARIS. Tous droits réservés.
      </p>
    </footer>
  );
}
