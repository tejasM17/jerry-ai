// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function HistorySidebar({ userId, onSelectSession }) {
//   const [sessions, setSessions] = useState([]);

//   useEffect(() => {
//     axios
//       // .get(import.meta.env.VITE_API_URL + "/api/chat/sessions/" + userId)
//       .then((res) => setSessions(res.data));
//   }, []);

//   return (
//     <div className="w-64 bg-gray-800 p-4 border-r border-gray-700 text-white">
//       <h2 className="text-xl font-bold mb-4">Chats</h2>

//       {sessions.map((s) => (
//         <div
//           key={s.sessionId}
//           onClick={() => onSelectSession(s.sessionId)}
//           className="p-2 rounded cursor-pointer hover:bg-gray-700"
//         >
//           {s.title}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function HistorySidebar() {
  return (
    <div className="w-64 bg-gray-800 p-4 border-r border-gray-700 text-white">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <p className="text-gray-400">Sessions coming soon</p>
    </div>
  );
}
