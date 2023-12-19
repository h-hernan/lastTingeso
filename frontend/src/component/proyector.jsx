import React, { useState } from 'react';
import DatasService from '../service/proyectorService';
import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Container } from '@mui/material';
import '@mui/material/styles';

const IngresoProyectoresPage = () => {
  const [marca, setMarca] = useState('');
  const [estado, setEstado] = useState('disponible'); // Modificado el estado inicial

  const marcasPredefinidas = ['Epson', 'Sony', 'BenQ', 'Optoma', 'ViewSonic'];

  const handleIngresoDatos = async () => {
    try {
      console.log('Datos a enviar:', marca, estado);
      // Utiliza el servicio para enviar los datos al backend
      await DatasService.crearDatas(marca, estado);
      console.log('Datos de proyector ingresados con éxito');
    } catch (error) {
      console.error('Error al ingresar datos de proyector:', error);
    }
  };
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Ingreso de Datos de Proyectores
        </Typography>
        <form>
          <p>
          Marca:
        </p>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select value={marca} onChange={(e) => setMarca(e.target.value)}>
              <MenuItem value="" disabled>
                Selecciona una marca
              </MenuItem>
              {marcasPredefinidas.map((marca) => (
                <MenuItem key={marca} value={marca}>
                  {marca}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>
          Estado:
        </p>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField type="text" value={estado} onChange={(e) => setEstado(e.target.value)} disabled /> {/* Modificado el input */}
          </FormControl>
          <Button variant="contained" onClick={handleIngresoDatos}>
            Ingresar Datos
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default IngresoProyectoresPage;