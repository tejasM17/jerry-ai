import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react";

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative my-3">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} />
      </button>

      <SyntaxHighlighter
        language={language || "javascript"}
        style={oneDark}
        customStyle={{
          borderRadius: "10px",
          padding: "16px",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
