interface SubtitleProps {
  text?: string;
  id?: string;
}

export default function Subtitle({ text, id }: SubtitleProps) {
  return (
    <h2 id={id} className="text-2xl font-bold mb-4 text-center font-orbitron">
      {text}
    </h2>
  );
}
