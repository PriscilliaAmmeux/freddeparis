import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <div className="flex items-center mb-4">
    <h1 className="text-xl  font-bold">{title}</h1>
  </div>
);

export default Title;
