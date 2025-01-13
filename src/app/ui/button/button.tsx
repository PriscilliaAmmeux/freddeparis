export default function Button({
  type,
  text,
  disabled,
  onClick,
  target,
  className,
}: {
  type: "submit" | "button";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  target?: string;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 w-50 cursor-pointer rounded-full mx-auto  transition-colors duration-300 ease-in-out ${className}`}
      aria-label={text}
      disabled={disabled}>
      {text}
    </button>
  );
}
