import React from 'react'
import MtrDia from './components/MtrDia'
import MtrMes from './components/MtrMes'
import MtrSemana from './components/MtrSemana'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Metricas() {
    
    return (
        <Router>

            <div className="container">
                <div className="btn-group">

                    <Link to="/MtrDia" className="btn btn-dark">
                        Día
                    </Link>

                    <Link to="/MtrSemana" className="btn btn-dark">
                        Semana
                    </Link>

                    <Link to="/MtrMes" className="btn btn-dark">
                        Mes
                    </Link>

                </div>
            </div>
            <Switch>

                <Route path="/MtrDia">
                    <div className="container">
                        <h4 className="text-center"> por Día</h4>
                        <hr />
                    </div>
                    <MtrDia />
                </Route>

                <Route path="/MtrSemana">
                    <div className="container">
                        <h4 className="text-center">por Semana</h4>
                        <hr />
                    </div>
                    <MtrSemana />
                </Route>

                <Route path="/MtrMes">
                    <div className="container">
                        <h4 className="text-center"> por Mes</h4>
                        <hr />
                    </div>
                    <MtrMes />
                </Route>

            </Switch>

        </Router>
    )
}

export default Metricas
