import { useEffect, useState } from "react";
import { getHistory } from "../api/chat.api";
import ChatBox from "../components/ChatBox";
import HistorySidebar from "../components/HistorySidebar";

const USER_ID = "tejas123";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const loadHistory = async () => {
    const res = await getHistory(USER_ID);
    setMessages(res.data);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      <HistorySidebar onRefresh={loadHistory} />
      <ChatBox messages={messages} onRefresh={loadHistory} userId={USER_ID} />
    </div>
  );
}
