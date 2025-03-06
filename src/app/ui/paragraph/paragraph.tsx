interface ParagraphProps {
    children: React.ReactNode;
}
    

export default function Paragraph({ children }: ParagraphProps) {
  return <p className=" mb-4 text-justify">{children}</p>;
}
