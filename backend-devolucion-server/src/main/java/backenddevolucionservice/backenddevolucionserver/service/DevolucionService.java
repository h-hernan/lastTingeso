package backenddevolucionservice.backenddevolucionserver.service;

import backenddevolucionservice.backenddevolucionserver.entity.Devolucion;
import backenddevolucionservice.backenddevolucionserver.repository.DevolucionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DevolucionService {

    private final DevolucionRepository devolucionRepository;

    @Autowired
    public DevolucionService(DevolucionRepository devolucionRepository) {
        this.devolucionRepository = devolucionRepository;
    }

    public Devolucion guardarDevolucion(Devolucion devolucion) {
        return devolucionRepository.save(devolucion);
    }

    public List<Devolucion> obtenerTodasDevoluciones() {
        return devolucionRepository.findAll();
    }

    public Devolucion obtenerDevolucionPorId(Long devolucionId) {
        return devolucionRepository.findById(devolucionId).orElse(null);
    }
}
