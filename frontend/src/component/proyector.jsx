import React, { useState } from 'react';
import DatasService from '../service/proyectorService';
import { Paper, Typography, FormControl, Select, MenuItem, TextField, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const IngresoProyectoresPage = () => {
  const [marca, setMarca] = useState('');
  const [estado, setEstado] = useState('disponible');
  const [confirmacion, setConfirmacion] = useState('');
  const [error, setError] = useState('');

  const marcasPredefinidas = ['EPSON', 'ViewSonic'];

  const handleIngresoDatos = async () => {
    try {
      if (!marca) {
        setError('Por favor, selecciona una marca.');
        return;
      }

      await DatasService.crearDatas(marca, estado);
      setConfirmacion('Datos de proyector ingresados con éxito');
      setError('');
      // Limpiar campos después del éxito
      setMarca('');
    } catch (error) {
      setConfirmacion('');
      setError('Error al ingresar datos de proyector. Por favor, verifica los datos e intenta nuevamente.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Ingreso de Datos de Proyectores
        </Typography>
        <form>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              displayEmpty
            >
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
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              disabled
              label="Estado"
            />
          </FormControl>
          <Button variant="contained" onClick={handleIngresoDatos}>
            Ingresar Datos
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

export default IngresoProyectoresPage;