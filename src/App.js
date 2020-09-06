import React from 'react'
import Perfil from "./Perfil.js";
import Agenda from "./Agenda.js";
import Facturacion from "./Facturacion.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    
    <div className="container mt-3" >
      <div className="btn-group" >

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

      <Route path="/Agenda">
        Pedidos Programados
        <Agenda />
      </Route>
      
      <Route path="/Facturacion">
        Facturacion
        <Facturacion />
      </Route>

    </Switch>
  </Router>
    
  );
}
 
export default App;
