import React, { useState } from 'react';
import ProfesorService from '../service/profesorService';
import { Paper, Typography, TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistroProfesoresPage = () => {
  const [nombre, setNombre] = useState('');
  const [historial, setHistorial] = useState('Habilitado');
  const [confirmacion, setConfirmacion] = useState('');
  const [error, setError] = useState('');

  const handleRegistroProfesor = async () => {
    try {
      if (!nombre) {
        setError('Por favor, ingresa el nombre del profesor.');
        return;
      }

      await ProfesorService.crearProfesor({ nombre, historial });
      setConfirmacion('Profesor registrado con éxito');
      setError('');
      // Limpiar campos después del éxito
      setNombre('');
      setHistorial('Habilitado'); // Puedes ajustar el valor predeterminado según tu lógica
    } catch (error) {
      setConfirmacion('');
      setError('Error al registrar profesor. Por favor, verifica los datos e intenta nuevamente.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Registro de Profesores
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Nombre del Profesor"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            variant="outlined"
            margin="normal"
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="historial-label">Historial</InputLabel>
            <Select
              labelId="historial-label"
              id="historial"
              value={historial}
              onChange={(e) => setHistorial(e.target.value)}
              label="Historial"
            >
              <MenuItem value="Habilitado">Habilitado</MenuItem>
              <MenuItem value="Deshabilitado">Deshabilitado</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" onClick={handleRegistroProfesor}>
            Registrar Profesor
          </Button>
          {confirmacion && <Typography color="success">{confirmacion}</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          <Link to="/" className="btn btn-secondary" style={{ marginTop: '16px' }}>
            Atrás
          </Link>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistroProfesoresPage;
