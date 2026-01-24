import { useEffect, useState } from "react";
import { getSessions } from "../api/chat.api";
import { useUI } from "../features/chat/ui.store";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function HistorySidebar({ userId, onSelect, onNew }) {
  const [sessions, setSessions] = useState([]);
  const { sidebarOpen, toggleSidebar, setSidebarOpen } = useUI();

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    const res = await getSessions(userId);
    setSessions(res.data);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
        />
      )}

      <div
        className={`fixed md:relative z-20 h-full w-64 bg-black text-white border-r border-gray-800
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <h2 className="text-lg font-bold">Chats</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <button
          onClick={onNew}
          className="m-4 bg-gray-900 hover:bg-gray-800 p-2 rounded text-sm"
        >
          + New Chat
        </button>

        <div className="px-4 space-y-2 overflow-y-auto h-[calc(100%-120px)]">
          {sessions.map((s) => (
            <div
              key={s._id}
              onClick={() => {
                onSelect(s._id);
                setSidebarOpen(false); // close on mobile
              }}
              className="p-2 rounded cursor-pointer hover:bg-gray-800"
            >
              {s.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
