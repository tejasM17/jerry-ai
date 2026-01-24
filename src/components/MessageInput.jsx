import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

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
    <div className="p-4 border-t border-gray-800 bg-black">
      <div className="relative flex items-center">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Jerry..."
          className="w-full bg-gray-900 text-white px-4 py-3 pr-14 rounded-xl outline-none resize-none h-14 placeholder-gray-500"
        />

        <button
          onClick={submit}
          className="absolute right-2 h-10 w-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-white rotate-45" />
        </button>
      </div>
    </div>
  );
}
