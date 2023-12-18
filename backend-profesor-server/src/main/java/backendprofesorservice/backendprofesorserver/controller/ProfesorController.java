package backendprofesorservice.backendprofesorserver.controller;

import backendprofesorservice.backendprofesorserver.entity.Profesor;
import backendprofesorservice.backendprofesorserver.Service.ProfesorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profesor")
public class ProfesorController {

    @Autowired
    private ProfesorService profesorService;

    @GetMapping
    public List<Profesor> obtenerProfesores() {
        return profesorService.obtenerTodosLosProfesores();
    }

    @GetMapping("/{id}")
    public Profesor obtenerProfesorPorId(@PathVariable Long id) {
        return profesorService.obtenerProfesorPorId(id);
    }

    @PostMapping
    public Profesor crearProfesor(@RequestBody Profesor profesor) {
        return profesorService.crearProfesor(profesor);
    }


}
