import { useState } from "react";
import { sendMessage } from "../api/chat.api";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatBox({
  messages,
  sessionId,
  userId,
  onNewSession,
  onLoad,
}) {
  const [loading, setLoading] = useState(false);

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
      <MessageList messages={messages} loading={loading} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
