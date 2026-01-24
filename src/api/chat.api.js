import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/chat",
});

export const sendMessage = (userId, sessionId, message) =>
  api.post("/send", { userId, sessionId, message });

export const getSessions = (userId) =>
  api.get("/sessions/" + userId);

export const getHistory = (sessionId) =>
  api.get("/history/" + sessionId);
