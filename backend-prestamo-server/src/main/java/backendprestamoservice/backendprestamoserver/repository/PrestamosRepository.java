package backendprestamoservice.backendprestamoserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import backendprestamoservice.backendprestamoserver.entity.Prestamo;

@Repository
public interface PrestamosRepository extends JpaRepository<Prestamo, Long> {

}