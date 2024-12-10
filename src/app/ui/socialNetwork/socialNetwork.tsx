import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function SocialNetwork() {
  return (
    <section className="flex items-center gap-2">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Facebook profile"
        className="cursor-pointer hover:text-pink-300">
        <FaFacebook size={24} className="text-current" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn profile"
        className="cursor-pointer hover:text-pink-300">
        <FaLinkedin size={24} className="text-current" />
      </a>
    </section>
  );
}
