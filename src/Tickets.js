import React from 'react'
import TckFalla from './components/TckFalla'
import TckIncapacidad from './components/TckIncapacidad'
import TckPcivil from './components/TckPcivil'
import TckRobo from './components/TckRobo'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Tickets() {
    return (
        <Router>

            <div className="container">
                <div className="btn-group">

                    <Link to="/TckFalla" className="btn btn-dark">
                        Falla
                    </Link>

                    <Link to="/TckIncapacidad" className="btn btn-dark">
                        Incapacidad
                    </Link>

                    <Link to="/TckPcivil" className="btn btn-dark">
                        Proteccion Civil
                    </Link>

                    <Link to="/TckRobo" className="btn btn-dark">
                        Robo
                    </Link>

                </div>
            </div>
            <Switch>

                <Route  path="/TckFalla">
                    <div className="container">
                        <h4 className="text-center">por Falla</h4>
                        <hr/>
                    </div>
                    <TckFalla />
                </Route>

                <Route  path="/TckIncapacidad">
                    <div className="container">
                        <h4 className="text-center">por Incapacidad</h4>
                    <hr/>
                    </div>
                    <TckIncapacidad />
                </Route>

                <Route  path="/TckPcivil">
                    <div className="container">
                        <h4 className="text-center">por Proteccion Civil</h4>
                        <hr/>
                    </div>
                    <TckPcivil />
                </Route>

                <Route  path="/TckRobo">
                    <div className="container">
                        <h4 className="text-center">por Robo</h4>
                        <hr/>
                    </div>
                    <TckRobo />
                </Route>

            </Switch>

        </Router>

    );
}

export default Tickets
