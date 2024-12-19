import React from "react";
import styles from "./../../styles/title.module.css";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return (
    <div className="flex items-center justify-center mb-4">
      <h2 className={`text-3xl font-bold ${styles.title}`}>{title}</h2>
    </div>
  );
}
