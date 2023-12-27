import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  Typography,
} from '@mui/material';
import DatasService from '../service/proyectorService';
import ProfesorService from '../service/profesorService';
import PrestamoService from '../service/prestamoService';
import { Link } from 'react-router-dom';

const PrestamoForm = () => {
  const [proyectores, setProyectores] = useState([]);
  const [filteredProyectores, setFilteredProyectores] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [selectedProyector, setSelectedProyector] = useState('');
  const [selectedProfesor, setSelectedProfesor] = useState('');
  const [tipoUso, setTipoUso] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');

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
        const profesoresData = response.data || [];

        // Filtrar profesores con historial 'Habilitado'
        const profesoresHabilitados = profesoresData.filter(profesor => profesor.historial === 'Habilitado');

        setProfesores(profesoresHabilitados);
      } catch (error) {
        console.error('Error al obtener datos de profesores:', error);
      }
    };

    fetchProyectores();
    fetchProfesores();
  }, []);

  useEffect(() => {
    // Filtrar proyectores según el tipo de uso
    const filteredProyectors = proyectores.filter((proyector) => {
      return (
        (tipoUso === 'Reuniones Varias' && proyector.marca === 'ViewSonic') ||
        ((tipoUso === 'Dictado de Clases' || tipoUso === 'Exámenes de Título') && proyector.marca === 'EPSON')
      );
    });

    setFilteredProyectores(filteredProyectors);
  }, [tipoUso, proyectores]);

  const handleIngresoPrestamo = async () => {
    try {
      if (!tipoUso || !selectedProyector || !selectedProfesor) {
        setError('Por favor, selecciona un tipo de uso, un proyector y un profesor.');
        return;
      }

      const prestamoData = {
        proyectorId: selectedProyector,
        profesorId: selectedProfesor,
        usoProyector: tipoUso,
        fechaPrestamo: new Date(),
      };

      // Utilizar el servicio para crear un préstamo
      const response = await PrestamoService.createPrestamo(prestamoData);

      // Mostrar mensaje de éxito
      setConfirmation('Préstamo creado con éxito:');
      setError('');

      // Limpiar el formulario
      limpiarFormulario();
    } catch (error) {
      // Mostrar mensaje de error específico
      setError('Error al crear el préstamo. Por favor, verifica los datos e intenta nuevamente.');
      setConfirmation('');
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const limpiarFormulario = () => {
    setSelectedProyector('');
    setSelectedProfesor('');
    setTipoUso('');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <form>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="tipo-uso-label">Tipo de uso</InputLabel>
          <Select
            labelId="tipo-uso-label"
            id="tipo-uso"
            value={tipoUso}
            onChange={(e) => setTipoUso(e.target.value)}
          >
            <MenuItem value="" disabled>
              Selecciona el tipo de uso
            </MenuItem>
            <MenuItem value="Reuniones Varias">Reuniones Varias</MenuItem>
            <MenuItem value="Dictado de Clases">Dictado de Clases</MenuItem>
            <MenuItem value="Exámenes de Título">Exámenes de Título</MenuItem>
          </Select>
        </FormControl>

        {filteredProyectores.length === 0 && tipoUso && (
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            No hay proyectores disponibles para el tipo de uso seleccionado.
          </Typography>
        )}

        <FormControl fullWidth sx={{ mb: 2 }} disabled={!tipoUso || filteredProyectores.length === 0}>
          <InputLabel id="proyector-label">Selecciona un proyector</InputLabel>
          <Select
            labelId="proyector-label"
            id="proyector"
            value={selectedProyector || ''}
            onChange={(e) => setSelectedProyector(e.target.value)}
          >
            <MenuItem value="" disabled>
              Selecciona un proyector
            </MenuItem>
            {filteredProyectores.map((proyector) => (
              <MenuItem key={proyector.id} value={proyector.id}>
                {proyector.marca}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {profesores.length === 0 && (
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            No hay profesores disponibles para realizar el préstamo.
          </Typography>
        )}

        <FormControl fullWidth sx={{ mb: 2 }} disabled={!tipoUso || profesores.length === 0}>
          <InputLabel id="profesor-label">Selecciona un profesor</InputLabel>
          <Select
            labelId="profesor-label"
            id="profesor"
            value={selectedProfesor || ''}
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

        <Button
          variant="contained"
          onClick={handleIngresoPrestamo}
          disabled={!tipoUso || !selectedProyector || !selectedProfesor}
        >
          Ingresar Préstamo
        </Button>
        {confirmation && <Typography color="success">{confirmation}</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        <Link to="/" className="btn btn-secondary" style={{ marginTop: '16px' }}>
          Atrás
        </Link>
      </form>
    </Container>
  );
};

export default PrestamoForm;
