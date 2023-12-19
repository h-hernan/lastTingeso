package backenddevolucionservice.backenddevolucionserver.controller;

import backenddevolucionservice.backenddevolucionserver.entity.Devolucion;
import backenddevolucionservice.backenddevolucionserver.service.DevolucionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/devoluciones")
public class DevolucionController {

    private final DevolucionService devolucionService;

    @Autowired
    public DevolucionController(DevolucionService devolucionService) {
        this.devolucionService = devolucionService;
    }

    @GetMapping
    public ResponseEntity<List<Devolucion>> obtenerTodasDevoluciones() {
        List<Devolucion> devoluciones = devolucionService.obtenerTodasDevoluciones();
        return ResponseEntity.ok(devoluciones);
    }

    @GetMapping("/{devolucionId}")
    public ResponseEntity<Devolucion> obtenerDevolucionPorId(@PathVariable Long devolucionId) {
        Devolucion devolucion = devolucionService.obtenerDevolucionPorId(devolucionId);
        return ResponseEntity.ok(devolucion);
    }

    @PostMapping
    public ResponseEntity<Devolucion> guardarDevolucion(@RequestBody Devolucion devolucion) {
        Devolucion devolucionGuardada = devolucionService.guardarDevolucion(devolucion);
        return ResponseEntity.ok(devolucionGuardada);
    }

    // Puedes agregar otros métodos según tus necesidades
}
