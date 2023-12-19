package backendprestamoservice.backendprestamoserver.service;

import backendprestamoservice.backendprestamoserver.repository.PrestamosRepository;
import backendprestamoservice.backendprestamoserver.entity.Prestamo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrestamoService {

    @Autowired
    private PrestamosRepository prestamoRepository;

    public List<Prestamo> getAllPrestamos() {
        return prestamoRepository.findAll();
    }

    public Optional<Prestamo> getPrestamoById(Long id) {
        return prestamoRepository.findById(id);
    }

    public Prestamo createPrestamo(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }

    public Prestamo updatePrestamo(Long id, Prestamo prestamo) {
        if (prestamoRepository.existsById(id)) {
            prestamo.setId(id);
            return prestamoRepository.save(prestamo);
        } else {
            // Manejar el caso en que el prestamo con el ID proporcionado no exista
            return null;
        }
    }

    public void deletePrestamo(Long id) {
        prestamoRepository.deleteById(id);
    }
}