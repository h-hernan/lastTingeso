import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  TextField,
} from '@mui/material';
import DatasService from '../service/proyectorService';
import ProfesorService from '../service/profesorService';

const PrestamoForm = () => {
  const [proyectores, setProyectores] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [selectedProyector, setSelectedProyector] = useState('');
  const [selectedProfesor, setSelectedProfesor] = useState('');
  const [usoProyector, setUsoProyector] = useState('');

  useEffect(() => {
    const fetchProyectores = async () => {
      try {
        const response = await DatasService.obtenerDatos();
        setProyectores(response.data);
      } catch (error) {
        console.error('Error al obtener datos de proyectores:', error);
      }
    };

    const fetchProfesores = async () => {
      try {
        const response = await ProfesorService.obtenerProfesores();
        setProfesores(response.data);
      } catch (error) {
        console.error('Error al obtener datos de profesores:', error);
      }
    };

    fetchProyectores();
    fetchProfesores();
  }, []);

  const handleIngresoPrestamo = () => {
    // Aquí puedes realizar la lógica para enviar el préstamo al backend
    console.log('Datos a enviar:', selectedProyector, selectedProfesor, usoProyector);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <form>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="proyector-label">Selecciona un proyector</InputLabel>
          <Select
            labelId="proyector-label"
            id="proyector"
            value={selectedProyector}
            onChange={(e) => setSelectedProyector(e.target.value)}
          >
            <MenuItem value="" disabled>
              Selecciona un proyector
            </MenuItem>
            {proyectores.map((proyector) => (
              <MenuItem key={proyector.id} value={proyector.id}>
                {proyector.marca}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="profesor-label">Selecciona un profesor</InputLabel>
          <Select
            labelId="profesor-label"
            id="profesor"
            value={selectedProfesor}
            onChange={(e) => setSelectedProfesor(e.target.value)}
          >
            <MenuItem value="" disabled>
              Selecciona un profesor
            </MenuItem>
            {profesores.map((profesor) => (
              <MenuItem key={profesor.id} value={profesor.id}>
                {profesor.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Uso del proyector"
          value={usoProyector}
          onChange={(e) => setUsoProyector(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" onClick={handleIngresoPrestamo}>
          Ingresar Préstamo
        </Button>
      </form>
    </Container>
  );
};

export default PrestamoForm;
