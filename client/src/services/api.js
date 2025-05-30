import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error en la API:', {
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error('Error de conexión:', error.message);
    }
    return Promise.reject(error);
  }
);

export const getVehiculos = () => api.get('/vehiculos');
export const getVehiculoById = (id) => api.get(`/vehiculos/${id}`);
export const createVehiculo = (data) => api.post('/vehiculos', data);
export const getUbicacionVehiculo = (mId) => api.get(`/vehiculos/${mId}/location`);
export const createRevision = (data) => api.post('/revisiones', data);
export const getRevisionesByVehiculo = (vehiculoId) => api.get(`/revisiones/${vehiculoId}`);

export default api;