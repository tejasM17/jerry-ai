import { useEffect, useState } from "react";
import { getSessions } from "../api/chat.api";

export default function HistorySidebar({ userId, onSelect, onNew }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    const res = await getSessions(userId);
    setSessions(res.data);
  };

  return (
    <div className="w-64 bg-gray-800 p-4 border-r border-gray-700 text-white flex flex-col">
      <button
        onClick={onNew}
        className="mb-4 bg-blue-600 p-2 rounded hover:bg-blue-700"
      >
        + New Chat
      </button>

      <h2 className="text-xl font-bold mb-3">Chats</h2>

      <div className="flex-1 overflow-y-auto space-y-2">
        {sessions.map((s) => (
          <div
            key={s._id}
            onClick={() => onSelect(s._id)}
            className="p-2 rounded cursor-pointer hover:bg-gray-700"
          >
            {s.title}
          </div>
        ))}
      </div>
    </div>
  );
}
