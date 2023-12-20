import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/home';
import IngresoProyectoresPage from './component/proyector';
import IngresoProfesoresPage from "./component/profesor";
import PrestamoForm from './component/prestamo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingreso-proyectores" element={<IngresoProyectoresPage />} />
        <Route path="/ingreso-profesores" element={<IngresoProfesoresPage />} />
        <Route path="/ingreso-prestamo" element={<PrestamoForm/>} />
      </Routes>
    </Router>
  );
}

export default App;