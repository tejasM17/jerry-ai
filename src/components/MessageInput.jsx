import { useState } from "react";
import { Icon } from "@iconify/react";

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
    <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-[#1f1f1f] rounded-2xl flex items-center px-3 py-2 shadow-lg border border-gray-800">
        {/* Plus icon */}
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Icon icon="mdi:plus" className="text-gray-300 text-xl" />
        </button>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Jerry"
          rows={1}
          className="flex-1 bg-transparent text-white px-3 py-2 outline-none resize-none placeholder-gray-400"
        />

        {/* Mic icon */}
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Icon icon="mdi:microphone" className="text-gray-300 text-xl" />
        </button>

        {/* Send (Up Arrow) */}
        <button
          onClick={submit}
          className="ml-1 p-2 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center"
        >
          <Icon icon="mdi:arrow-up" className="text-black text-lg" />
        </button>
      </div>
    </div>
  );
}
