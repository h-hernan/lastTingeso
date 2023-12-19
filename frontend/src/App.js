import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/home';
import IngresoProyectoresPage from './component/proyector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingreso-proyectores" element={<IngresoProyectoresPage />} />
      </Routes>
    </Router>
  );
}

export default App;