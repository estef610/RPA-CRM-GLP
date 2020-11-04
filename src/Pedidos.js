import React from 'react'
import Agenda from './Agenda'
import Levantar from "./components/Levantar"
import Metricas from "./Metricas"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Pedidos() {
    return (
        <Router>

            <div className="container">
                <div className="btn-group">

                    <Link to="/Agenda" className="btn btn-dark">
                        Agenda
                    </Link>
                    
                    <Link to="/Levantar" className="btn btn-dark">
                        Nuevo
                    </Link>
                    
                    <Link to="/Metricas" className="btn btn-dark">
                        Metricas
                    </Link>

                </div>
            </div>
            <Switch>

                <Route  path="/Agenda">
                    <div className="container">
                        <h4 className="text-center"> en Agenda</h4>
                    <hr/>
                    </div>
                    <Agenda />
                </Route>

                <Route  path="/Levantar">
                    <div className="container">
                        <h4 className="text-center">Nuevos</h4>
                        <hr/>
                    </div>
                    <Levantar />
                </Route>

                <Route  path="/Metricas">
                    <div className="container">
                        <h4 className="text-center"> en Metricas</h4>
                    <hr/>
                    </div>
                    <Metricas />
                </Route>
              
            </Switch>

        </Router>

    )
}

export default Pedidos
