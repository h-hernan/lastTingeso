import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Proyecto de Ingreso de Datos de Proyectores</h1>
      <Link to="/ingreso-proyectores">Ingresar Datos de Proyectores</Link>
    </div>
  );
};

export default HomePage;