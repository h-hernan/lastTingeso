package tingeso.backenddataserver.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tingeso.backenddataserver.entity.Datas;

public interface DatasRepository extends JpaRepository<Datas, Long> {
}
