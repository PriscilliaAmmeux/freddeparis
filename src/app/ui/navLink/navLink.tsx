import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
  isActive: boolean;
}

export default function NavLink({
  href,
  title,
  className,
  onClick,
  isActive,
}: NavLinkProps) {
  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h3
        className={` font-semibold hover:underline mr-6 ${className}`}
        onClick={onClick}
        style={{
          color: isActive ? "underline" : "",
        }}>
        {title}
      </h3>
    </Link>
  );
}
