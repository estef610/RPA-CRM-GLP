import React from 'react'
import QjDemora from './components/QjDemora'
import QjGrosero from './components/QjGrosero'
import Competencia from './components/Competencia'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function Quejas() {

    return (

        <Router>
            <div className="container">
                <div className="btn-group">

                    <Link to="/Competencia" className="btn btn-dark">
                        Competencia
                    </Link>

                    <Link to="/QjDemora" className="btn btn-dark">
                        Demora
                    </Link>

                    <Link to="/QjGrosero" className="btn btn-dark">
                        Px Grosero
                    </Link>

                </div>
            </div>

            <Switch>

                <Route  path="/Competencia">
                    <div className="container">
                        <h4 className="text-center">Competencia</h4>
                        <hr/>
                    </div>
                    <Competencia />
                </Route>

                <Route  path="/QjDemora">
                    <div className="container">
                        <h4 className="text-center">Demora</h4>
                        <hr/>
                    </div>
                    <QjDemora />
                </Route>
                
                <Route  path="/QjGrosero">
                    <div className="container">
                        <h4 className="text-center">Personal grosero</h4>
                        <hr/>
                    </div>
                    <QjGrosero />
                </Route>

            </Switch>

        </Router>
    )
}

export default Quejas
