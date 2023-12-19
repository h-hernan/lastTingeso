import axios from 'axios';

const API_URL = 'http://localhost:8080/datas';

class DatasService {
  obtenerDatos() {
    return axios.get(`${API_URL}`);
  }

  obtenerDatosPorId(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  crearDatas(marca, estado) {
    return axios.post(API_URL, { marca, estado });
    }
}

export default new DatasService();