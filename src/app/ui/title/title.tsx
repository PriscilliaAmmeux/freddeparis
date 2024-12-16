import React from "react";
import styles from "./../../styles/title.module.css";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return (
    <div className="flex items-center mb-4">
      <h1 className={`text-xl font-bold ${styles.title}`}>{title}</h1>
    </div>
  );
}
