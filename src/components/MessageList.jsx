export default function MessageList({ messages, loading }) {
  return (
    <div className="chat-box">
      {messages.map((msg, i) => (
        <div key={i} className={msg.role === "user" ? "user" : "ai"}>
          {msg.text}
        </div>
      ))}
      {loading && <p>AI is typing...</p>}
    </div>
  );
}
