import React from 'react'
import Nuevaf from "./components/Nuevaf"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Facturacion() {
  return (
  <Router>
    
    <div className="container mt-5" >
      <div className="btn-group" >

        <Link to="/Nuevaf" className="btn btn-dark">
          Nueva Factura
        </Link>

      </div>
        <hr/>
    </div>

    <Switch>

      <Route path="/Nuevaf">
        Perfil de unidad
        <Nuevaf />
      </Route>

    </Switch>
  </Router>
    
  );
}
 
export default Facturacion
