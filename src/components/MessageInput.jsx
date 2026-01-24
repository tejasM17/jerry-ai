import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-700 bg-gray-900">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Gemini..."
        className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg outline-none resize-none h-14"
      />
      <button
        onClick={submit}
        className="ml-3 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
