import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react";
import CodeBlock from "./CodeBlock";

export default function MessageList({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-28 bg-black">
      {messages.map((msg, i) => {
        const isUser = msg.role === "user";

        return (
          <div
            key={i}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-5 py-4 rounded-xl text-white leading-relaxed ${
                isUser ? "bg-gray-950 w-[55%]" : "bg-black w-[90%]"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold mt-4 mb-2">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-semibold mt-3 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-2 text-gray-100">{children}</p>
                  ),
                  li: ({ children }) => (
                    <li className="ml-4 list-disc text-gray-200">{children}</li>
                  ),
                  code({ inline, className, children }) {
                    const language = className?.replace("language-", "");

                    if (!inline) {
                      return (
                        <CodeBlock
                          code={String(children)}
                          language={language}
                        />
                      );
                    }

                    return (
                      <code className="bg-gray-900 px-1 rounded text-green-400">
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {msg.message}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}

      {loading && (
        <p className="text-gray-400 animate-pulse">Jerry is thinking…</p>
      )}
    </div>
  );
}
