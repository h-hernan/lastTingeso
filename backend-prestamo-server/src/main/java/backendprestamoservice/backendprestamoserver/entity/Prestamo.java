package backendprestamoservice.backendprestamoserver.entity;

import lombok.*;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "prestamo")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Prestamo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long dataId;
    private Long profesorId;
    private Date fechaPrestamo;
    private String usoProyector;
}