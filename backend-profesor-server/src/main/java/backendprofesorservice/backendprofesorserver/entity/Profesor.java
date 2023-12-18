package backendprofesorservice.backendprofesorserver.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "profesor")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Profesor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String historial;


}