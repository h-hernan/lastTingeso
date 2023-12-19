import React, { useState } from 'react';
import ProfesorService from '../service/profesorService';
import { Paper, Typography, TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '@mui/material/styles';

const RegistroProfesoresPage = () => {
  const [nombre, setNombre] = useState('');
  const [historial, setHistorial] = useState('Habilitado');

  const handleRegistroProfesor = async () => {
    try {
      console.log('Datos a enviar:', nombre, historial);
      // Utiliza el servicio para enviar los datos al backend
      await ProfesorService.crearProfesor({ nombre, historial });
      console.log('Profesor registrado con éxito');
    } catch (error) {
      console.error('Error al registrar profesor:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Registro de Profesores
        </Typography>
        <form>
          <p>
            Nombre:
          </p>
          <TextField fullWidth value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <p>
            Historial:
          </p>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select value={historial} onChange={(e) => setHistorial(e.target.value)}>
              <MenuItem value="Habilitado">Habilitado</MenuItem>
              <MenuItem value="Deshabilitado">Deshabilitado</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" onClick={handleRegistroProfesor}>
            Registrar Profesor
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistroProfesoresPage;