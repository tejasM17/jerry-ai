import { useState } from "react";
import { sendMessage } from "../api/chat.api";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useUI } from "../features/chat/ui.store";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function ChatBox({
  messages,
  sessionId,
  userId,
  onNewSession,
  onLoad,
}) {
  const [loading, setLoading] = useState(false);
  const { toggleSidebar } = useUI();

  const handleSend = async (text) => {
    setLoading(true);
    const res = await sendMessage(userId, sessionId, text);

    // If new chat → backend sends new sessionId
    if (!sessionId) {
      onNewSession(res.data.sessionId);
      await onLoad(res.data.sessionId);
    } else {
      await onLoad(sessionId);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-900 text-white">
      <div className="h-14 border-b border-gray-800 flex items-center px-4 bg-black">
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white mr-4"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        <h1 className="text-3xl font-semibold">Jerry by tejas</h1>
      </div>
      <MessageList messages={messages} loading={loading} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
