import { useEffect, useState } from "react";
import { getHistory } from "../api/chat.api";
import ChatBox from "../components/ChatBox";
import HistorySidebar from "../components/HistorySidebar";

const USER_ID = "tejas123";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  const loadHistory = async (sid) => {
    const res = await getHistory(sid);
    setMessages(res.data);
  };

  const selectSession = (sid) => {
    setSessionId(sid);
    loadHistory(sid);
  };

  const newChat = () => {
    setSessionId(null);
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <HistorySidebar
        userId={USER_ID}
        onSelect={selectSession}
        onNew={newChat}
      />
      <ChatBox
        messages={messages}
        sessionId={sessionId}
        userId={USER_ID}
        onNewSession={setSessionId}
        onLoad={loadHistory}
      />
    </div>
  );
}
