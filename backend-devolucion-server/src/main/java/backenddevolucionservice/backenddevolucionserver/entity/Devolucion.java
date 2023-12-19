package backenddevolucionservice.backenddevolucionserver.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "devolucion")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Devolucion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long prestamoId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaDevolucion;

    private String estadoDevolucion;

    private int tiempoPrestado;
}
