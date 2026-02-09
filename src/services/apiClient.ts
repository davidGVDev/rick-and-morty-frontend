import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Instancia de axios con configuración base
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request: Agrega token u otros headers automáticamente
apiClient.interceptors.request.use(
  (config) => {
    // Ejemplo: agregar token de autenticación
    // const token = store.getState().auth.token;
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de response: Manejo global de errores
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Ejemplo: manejar 401 globalmente
    // if (error.response?.status === 401) {
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
