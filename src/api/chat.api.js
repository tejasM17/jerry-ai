import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/chat",
});

export const sendMessage = (userId, message) =>
  api.post("/send", { userId, message });

export const getHistory = (userId) =>
  api.get("/history/" + userId);
