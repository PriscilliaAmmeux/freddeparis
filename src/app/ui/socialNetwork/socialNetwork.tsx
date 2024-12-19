import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

export default function SocialNetwork() {
  return (
    <section className="pt-6 flex items-center gap-2">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Instagram profile"
        className="cursor-pointer">
        <AiOutlineInstagram size={24} className="text-current" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Facebook profile"
        className="cursor-pointer">
        <FiFacebook size={24} className="text-current" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to linkedIn profile"
        className="cursor-pointer">
        <SlSocialLinkedin size={24} className="text-current" />
      </a>
    </section>
  );
}
