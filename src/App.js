import React from 'react'
import Login from "./Login"
import Agenda from "./Agenda"
import Facturacion from "./Facturacion"
import Glp from "./components/Glp"
import GPS from "./GPS"
import Pedidos from "./Pedidos"
import Perfil from "./Perfil"
import Unidad from "./Unidad"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (

  <Router>
    <div><Glp /></div>
    <div className="container mt-0" >
      
      <div className="btn-group" >

      <Link to="/Login" className="btn btn-dark">
          Login
        </Link>

        <Link to="/Agenda" className="btn btn-dark">
          Agenda
        </Link>

        <Link to="/Facturacion" className="btn btn-dark">
          Factura
        </Link>

        <Link to="/GPS" className="btn btn-dark">
          GPS
        </Link>

        <Link to="/Pedidos" className="btn btn-dark">
          Pedidos
        </Link>

        <Link to="/Perfil" className="btn btn-dark">
          Perfil
        </Link>


        <Link to="/Unidad" className="btn btn-dark">
          Unidad
        </Link>

      </div>
        <hr/>
    </div>

    <Switch>

    <Route path="/Login">
        <div className="container">
          <h4 className="text-center">Login and sing up</h4>
          <hr/>
        </div>
        <Login />
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

      <Route path="/GPS">
      <div className="container">
          <h4 className="text-center">GPS</h4>
          <hr/>
        </div>
        <GPS />
      </Route>
 
      <Route path="/Pedidos">
      <div className="container">
          <h4 className="text-center">Pedidos</h4>
          <hr/>
        </div>
        <Pedidos />
      </Route>

      <Route path="/Perfil">
      <div className="container">
          <h4 className="text-center">Perfil de unidad</h4>
          <hr/>
        </div>
        <Perfil />
      </Route>

      <Route path="/Unidad">
      <div className="container">
          <h4 className="text-center">Unidad</h4>
          <hr/>
        </div>
        <Unidad />
      </Route>

    </Switch>
  </Router>
    
  );
}
 
export default App
