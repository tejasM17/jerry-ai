import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api"
})

export const generateAI = async (prompt) => {
  const res = await api.post("/generate", { prompt })
  return res.data.reply
}
