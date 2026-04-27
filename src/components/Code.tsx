"use client";

import { useEffect } from "react";

import Prism from "prismjs";
// Prismjs theme
import "automad-prism-themes/dist/prism-automad-dark.css";
// Import all languages that will be used through this code snippet component
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
// Import for line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// CURRENT: add copy code button

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
    <div className="code-block-container">
      <pre className="code-block">
        <code className={`language-${language} line-numbers`}>{text}</code>
      </pre>
      {/* add copy button that shows on hover (absolute - top right - make sure to add min height for code block so coyp and language dont over lap */}
      <p className="code-block-language">{language.toUpperCase()}</p>
    </div>
  );
}
