package backenddevolucionservice.backenddevolucionserver.repository;

import backenddevolucionservice.backenddevolucionserver.entity.Devolucion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DevolucionRepository extends JpaRepository<Devolucion, Long> {
}