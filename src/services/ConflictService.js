import axios from 'axios'


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default {
  async getAll() {
    const response = await apiClient.get('/api/v1/conflicts')
    return response.data
  }
}