import React from 'react'
import Levantar from "./components/Levantar"
import Agenda from './Agenda'
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

                    <Link to="/Levantar" className="btn btn-dark">
                        Nuevo
                    </Link>

                    <Link to="/Agenda" className="btn btn-dark">
                        Agenda
                    </Link>

                </div>
            </div>
            <Switch>

                <Route  path="/Levantar">
                    <div className="container">
                        <h4 className="text-center">Nuevos</h4>
                        <hr/>
                    </div>
                    <Levantar />
                </Route>

                <Route  path="/Agenda">
                    <div className="container">
                        <h4 className="text-center"> en Agenda</h4>
                    <hr/>
                    </div>
                    <Agenda />
                </Route>

              
            </Switch>

        </Router>

    )
}

export default Pedidos
