package tingeso.backenddataserver.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tingeso.backenddataserver.entity.Datas;
import tingeso.backenddataserver.Repository.DatasRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DatasService {

    @Autowired
    private DatasRepository datasRepository;

    public List<Datas> obtenerTodosLosDatos() {
        return datasRepository.findAll();
    }

    public Datas obtenerDatosPorId(Long id) {
        Optional<Datas> optionalDatas = datasRepository.findById(id);
        return optionalDatas.orElse(null);
    }

    public Datas crearDatos(Datas datas) {
        return datasRepository.save(datas);
    }

    public Datas actualizarDatos(Long id, Datas datas) {
        if (datasRepository.existsById(id)) {
            datas.setId(id);
            return datasRepository.save(datas);
        }
        return null; // Manejar el caso en el que los datos no existan
    }
}
