import axios from 'axios'

// 1. Definimos la URL de Railway como constante absoluta para que no haya fallos
// Asegúrate de que esta URL funciona en tu navegador antes de pegarla
const RAILWAY_URL = 'https://desplegament-fullstack-production.up.railway.app';

const apiClient = axios.create({
  // Forzamos que si la variable de entorno no existe, use la de Railway directamente
  baseURL: import.meta.env.VITE_API_URL || RAILWAY_URL,
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default {
  async getAll() {
    try {
      // 2. Aquí pon la ruta EXACTA que configuraste en tu @RequestMapping de Java
      // Si en Java es /api/conflictos, ponlo aquí:
      const response = await apiClient.get('/api/conflictos');
      return response.data;
    } catch (error) {
      console.error("Error cargando conflictos:", error);
      throw error;
    }
  }
}