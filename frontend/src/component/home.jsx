import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Bienvenido al Proyecto de Gestion de proyectores</h1>
      </div>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ingresar Datos de Proyectores</h5>
            <p className="card-text">Registra proyectores.</p>
            <Link to="/ingreso-proyectores" className="btn btn-primary">
              Ingresar
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ingresar Datos de Profesores</h5>
            <p className="card-text">Registra profesores.</p>
            <Link to="/ingreso-profesores" className="btn btn-primary">
              Ingresar
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Realizar Préstamo</h5>
            <p className="card-text">Realiza un préstamo de proyector.</p>
            <Link to="/ingreso-prestamo" className="btn btn-primary">
              Realizar Préstamo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
