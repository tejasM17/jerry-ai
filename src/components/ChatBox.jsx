import { useState } from "react";
import { generateAI } from "../api/ai.api";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "../styles/chat.css";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const reply = await generateAI(text);
      setMessages((prev) => [...prev, { role: "ai", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", text: "Server error" }]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} loading={loading} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
