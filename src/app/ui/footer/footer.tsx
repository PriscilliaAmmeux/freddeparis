import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function Footer() {
  return (
    <footer className="text-lg text-white custom-font w-full  flex flex-col items-center justify-center pt-4 pb-4 px-4 gap-2 text-center md:text-left text-sm bg-blue-color">
      <a href="/legalNotices" className=" hover:underline cursor-pointer">
        Mentions légales
      </a>
      <SocialNetwork />

      <p className="italic flex flex-col md:flex-row gap-2 items-center mt-8">
        Créée par Priscillia Ammeux
      </p>

      <a
        href="http://www.priscillia-ammeux-portfolio.fr"
        className="pl-2  hover:underline cursor-pointer mb-5"
        target="_blank"
        rel="noopener noreferrer">
        www.priscillia-ammeux-portfolio.fr
      </a>

      <p className="text-xs md:text-sm lg:text-base font-semibold">
        © {new Date().getFullYear()} Frédéric DEPARIS. Tous droits réservés.
      </p>
      <ScrollToTopButton />
    </footer>
  );
}
