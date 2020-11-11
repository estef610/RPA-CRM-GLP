import React from 'react'
import './index.css'
import Cajas from "./Cajas"
import Login from "./Login"
import Ergonomico from "./Ergonomico"
import Facturacion from "./Facturacion"
import Glp from "./components/Glp"
import Pedidos from "./Pedidos"
import QF from "./QF"


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

        <Link to="/Cajas" className="btn btn-dark">
          Cajas
        </Link>
        
        <Link to="/Ergonomico" className="btn btn-dark">
          Ergonomico
        </Link>

        <Link to="/Facturacion" className="btn btn-dark">
          Factura
        </Link>

        <Link to="/Pedidos" className="btn btn-dark">
          Pedidos
        </Link>

        <Link to="/QF" className="btn btn-dark">
          Q&F
        </Link>

      </div>
        <hr/>
    </div>

    <Switch>

      <Route path="/Cajas">
        <div className="container">
          <h4 className="text-center">Cajas</h4>
          <hr/>
        </div>
        <Cajas />
      </Route>

      <Route path="/Login">
        <div className="container">
          <h4 className="text-center">Login and sing up</h4>
          <hr/>
        </div>
        <Login />
      </Route>
      
      <Route path="/Ergonomico">
      <div className="container">
          <h4 className="text-center"></h4>
        </div>
        <Ergonomico />
      </Route>

      <Route path="/Facturacion">
      <div className="container">
          <h4 className="text-center">Facturacion</h4>
        </div>
        <Facturacion />
      </Route>
 
      <Route path="/Pedidos">
      <div className="container">
          <h4 className="text-center">Pedidos</h4>
        </div>
        <Pedidos />
      </Route>

      <Route path="/QF">
        <div className="container">
          <h4 className="text-center">Reportes</h4>
        </div>
        <QF />
      </Route>

    </Switch>
  </Router>
    
  )
}
export default App