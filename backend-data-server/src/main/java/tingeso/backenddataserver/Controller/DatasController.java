package tingeso.backenddataserver.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tingeso.backenddataserver.entity.Datas;
import tingeso.backenddataserver.Service.DatasService;

import java.util.List;

@RestController
@RequestMapping("/datas")
public class DatasController {

    @Autowired
    private DatasService datasService;


    @GetMapping
    public List<Datas> obtenerDatas() {
        return datasService.obtenerTodosLosDatos();
    }

    @GetMapping("/{id}")
    public Datas obtenerDatasPorId(@PathVariable Long id) {
        return datasService.obtenerDatosPorId(id);
    }

    @PostMapping
    public Datas crearDatas(@RequestBody Datas datas) {
        return datasService.crearDatos(datas);
    }


}
