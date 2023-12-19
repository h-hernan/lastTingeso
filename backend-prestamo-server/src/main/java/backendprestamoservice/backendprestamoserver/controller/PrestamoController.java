package backendprestamoservice.backendprestamoserver.controller;

import backendprestamoservice.backendprestamoserver.entity.Prestamo;
import backendprestamoservice.backendprestamoserver.service.PrestamoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/prestamos")
public class PrestamoController {

    @Autowired
    private PrestamoService prestamoService;

    @GetMapping
    public List<Prestamo> getAllPrestamos() {
        return prestamoService.getAllPrestamos();
    }

    @GetMapping("/{id}")
    public Optional<Prestamo> getPrestamoById(@PathVariable Long id) {
        return prestamoService.getPrestamoById(id);
    }

    @PostMapping
    public Prestamo createPrestamo(@RequestBody Prestamo prestamo) {
        return prestamoService.createPrestamo(prestamo);
    }

    @PutMapping("/{id}")
    public Prestamo updatePrestamo(@PathVariable Long id, @RequestBody Prestamo prestamo) {
        return prestamoService.updatePrestamo(id, prestamo);
    }

    @DeleteMapping("/{id}")
    public void deletePrestamo(@PathVariable Long id) {
        prestamoService.deletePrestamo(id);
    }
}
