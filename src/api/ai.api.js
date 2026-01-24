import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5000/api"
})

export const generateAI = async (prompt) => {
  const res = await api.post("/generate", { prompt })
  return res.data.reply
}
