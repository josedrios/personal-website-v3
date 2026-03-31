"use client";
import Projects from "@/app/projects/page";
import { skip } from "node:test";
import { useEffect, useState } from "react";

type HeaderProps = {
  type?: number;
  children: string;
};

export default function Header({ type = 1, children: text }: HeaderProps) {
  // For blinking text cursor animation
  const [cursor, setCursor] = useState<boolean>();
  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => {
        if (prev) {
          return false;
        } else {
          return true;
        }
      });
    }, 600);
    return () => clearInterval(interval);
  }, [cursor]);

  if (type === 1) {
    return (
      <h1>
        <span
          className={`header-prefix ${cursor ? "show-cursor" : "hide-cursor"}`}
        >
          &gt;
        </span>
        {text}
      </h1>
    );
  } else if (type === 2) {
    return (
      <h2>
        <span className="header-prefix">~</span>
        {text}
      </h2>
    );
  } else if (type === 3) {
    return <h3>{text}</h3>;
  } else {
    return <h1>{text}</h1>;
  }
}
