import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

export default function SocialNetwork() {
  return (
    <section className="pt-6 flex items-center gap-2">
      <a
        href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-deparis-a2229664/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to linkedIn profile"
        className="cursor-pointer">
        <SlSocialLinkedin size={24} className="text-current" />
      </a>
    </section>
  );
}
