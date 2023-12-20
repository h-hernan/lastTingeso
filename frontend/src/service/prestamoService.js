import axios from 'axios';

const API_URL = 'http://localhost:8080/prestamos';

class PrestamoService {
  getAllPrestamos() {
    return axios.get(API_URL);
  }

  getPrestamoById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createPrestamo(prestamo) {
    return axios.post(API_URL, prestamo);
  }

  updatePrestamo(id, prestamo) {
    return axios.put(`${API_URL}/${id}`, prestamo);
  }

  deletePrestamo(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new PrestamoService();