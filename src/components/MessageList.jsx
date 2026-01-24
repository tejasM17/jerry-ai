export default function MessageList({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, i) => {
        const isUser = msg.role === "user";

        return (
          <div
            key={i}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-3 rounded-lg text-white ${
                isUser
                  ? "bg-blue-600 w-[30%] text-right"
                  : "bg-gray-700 w-[75%] text-left"
              }`}
            >
              {msg.message}
            </div>
          </div>
        );
      })}

      {loading && <p className="text-gray-400">AI is typing…</p>}
    </div>
  );
}
