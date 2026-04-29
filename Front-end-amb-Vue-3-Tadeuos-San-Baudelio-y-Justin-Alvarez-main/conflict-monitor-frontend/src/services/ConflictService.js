import axios from 'axios'

// 1. Limpiamos la URL (sin barra al final)
const RAILWAY_URL = 'https://desplegament-fullstack-production.up.railway.app';

// 2. Priorizamos la variable, pero nos aseguramos de que sea un string válido
const getBaseURL = () => {
  const envURL = import.meta.env.VITE_API_URL;
  if (envURL && envURL.startsWith('http')) {
    return envURL;
  }
  return RAILWAY_URL;
};

const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: { 'Content-Type': 'application/json' }
})

export default {
  async getAll() {
    // 3. Ajusta la ruta exacta de tu Controller de Java
    // Si en Java pusiste @RequestMapping("/api/conflictos"), pon eso aquí.
    const response = await apiClient.get('/api/conflictos') 
    return response.data
  }
}