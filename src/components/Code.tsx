"use client";

import { useEffect } from "react";

import Prism from "prismjs";
import "automad-prism-themes/dist/prism-automad-dark.css";
// Import all languages that will be used through this code snippet component
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
// Import for line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// Import for tool bar (shows language on hover) (can have copyable button on toolbar as well)
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language.js";

// TODO: make langauge always show (not only on hover)
// TODO: add copy code button
// TODO: change highlight color

export default function Code({
  text,
  language,
}: {
  text: string;
  language: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, [text, language]);

  return (
    <pre className="code-block">
      <code className={`language-${language} line-numbers`}>{text}</code>
    </pre>
  );
}
