import React from "react";
import styles from "./../../styles/title.module.css";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center mb-4">
      <h1 className={`text-xl font-bold ${styles.title}`}>{title}</h1>
    </div>
  );
}
