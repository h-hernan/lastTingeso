package tingeso.backenddataserver.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Datas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String estado;

}
