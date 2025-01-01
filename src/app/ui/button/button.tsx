export default function Button({
  type,
  text,
  disabled,
  onClick,
  className,
}: {
  type: "submit" | "button";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 w-50 cursor-pointer mx-auto border-2 transition-colors duration-300 ease-in-out ${className}`}
      aria-label={text}
      disabled={disabled}>
      {text}
    </button>
  );
}
