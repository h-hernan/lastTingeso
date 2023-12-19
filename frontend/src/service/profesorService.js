import axios from 'axios';

const API_URL = 'http://localhost:8080/profesor';

class ProfesorService {
  obtenerProfesores() {
    return axios.get(API_URL);
  }

  obtenerProfesorPorId(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  crearProfesor(profesor) {
    return axios.post(API_URL, profesor);
  }
}

export default new ProfesorService();