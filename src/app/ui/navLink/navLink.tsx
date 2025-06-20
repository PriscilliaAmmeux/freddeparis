import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
  isActive?: boolean;
  children?: React.ReactNode;
}

export default function NavLink({
  href,
  title,
  className,
  onClick,
  isActive,
  children,
}: NavLinkProps) {
  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h3
        className={`mr-6 uppercase font-cinzel `}
        onClick={onClick}
        style={{
          color: isActive ? "underline" : "",
        }}>
        {title}
      </h3>
    </Link>
  );
}
