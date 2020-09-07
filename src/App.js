import React from 'react'
import Perfil from "./Perfil.js";
import Agenda from "./Agenda.js";
import Facturacion from "./Facturacion.js";
import Pedidos from "./Pedidos.js";
import Inicio from "./components/Inicio.jsx";
import Glp from "./components/Glp.jsx";


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

      </div>
        <hr/>
    </div>

    <Switch>

      <Route path="/Perfil">
        Perfil de unidad
        <Perfil />
      </Route>

      <Route path="/Pedidos">
        Pedidos
        <Pedidos />
      </Route>

      <Route path="/Agenda">
        Pedidos Programados
        <Agenda />
      </Route>
      
      <Route path="/Facturacion">
        Facturacion
        <Facturacion />
      </Route>

      <Route path="/Inicio">
        Inicio
        <Inicio />
      </Route>

    </Switch>
  </Router>
    
  );
}
 
export default App;
