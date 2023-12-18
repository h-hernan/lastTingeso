package backendprofesorservice.backendprofesorserver.Service;

import backendprofesorservice.backendprofesorserver.Repository.ProfesorRepository;
import backendprofesorservice.backendprofesorserver.entity.Profesor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesorService {

    @Autowired
    private ProfesorRepository profesorRepository;


    public ProfesorService(ProfesorRepository profesorRepository) {
        this.profesorRepository = profesorRepository;
    }

    public List<Profesor> obtenerTodosLosProfesores() {
        return profesorRepository.findAll();
    }

    public Profesor obtenerProfesorPorId(Long id) {
        Optional<Profesor> optionalProfesor = profesorRepository.findById(id);
        return optionalProfesor.orElse(null);
    }

    public Profesor crearProfesor(Profesor profesor) {
        return profesorRepository.save(profesor);
    }

}
