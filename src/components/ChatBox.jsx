import { useState } from "react";
import { sendMessage } from "../api/chat.api";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatBox({ messages, onRefresh, userId }) {
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    setLoading(true);
    await sendMessage(userId, text);
    await onRefresh();
    setLoading(false);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-900 text-white">
      <MessageList messages={messages} loading={loading} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
