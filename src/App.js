import React from 'react';
import Perfil from "./Perfil.js";
import Agenda from "./Agenda.js";
import Facturacion from "./Facturacion.js";
import Pedidos from "./Pedidos.js";
import Inicio from "./Inicio.js";
import Glp from "./components/Glp.jsx";
import Login from "./Login.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

  <Router>
    <div><Glp /></div>
    <div className="container mt-0" >
      
      <div className="btn-group" >

        <Link to="/Inicio" className="btn btn-dark">
          Inicio
        </Link>

        <Link to="/Pedidos" className="btn btn-dark">
          Pedidos
        </Link>

        <Link to="/Perfil" className="btn btn-dark">
          Perfil
        </Link>

        <Link to="/Agenda" className="btn btn-dark">
          Agenda
        </Link>

        <Link to="/Facturacion" className="btn btn-dark">
          Factura
        </Link>

        <Link to="/Login" className="btn btn-dark">
          Login
        </Link>

      </div>
        <hr/>
    </div>

    <Switch>

      <Route path="/Perfil">
      <div className="container">
          <h4 className="text-center">Perfil de unidad</h4>
          <hr/>
        </div>
        <Perfil />
      </Route>

      <Route path="/Pedidos">
      <div className="container">
          <h4 className="text-center">Pedidos</h4>
          <hr/>
        </div>
        <Pedidos />
      </Route>

      <Route path="/Agenda">
      <div className="container">
          <h4 className="text-center">Pedidos programados</h4>
          <hr/>
        </div>
        <Agenda />
      </Route>
      
      <Route path="/Facturacion">
      <div className="container">
          <h4 className="text-center">Facturacion</h4>
          <hr/>
        </div>
        <Facturacion />
      </Route>

      <Route path="/Inicio">
      <div className="container">
          <h4 className="text-center">Inicio</h4>
          <hr/>
        </div>
        <Inicio />
      </Route>

      <Route path="/Login">
        <div className="container">
          <h4 className="text-center">Login and sing up</h4>
          <hr/>
        </div>
        <Login />
      </Route>

    </Switch>
  </Router>
    
  );
}
 
export default App;
