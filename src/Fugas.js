import React from 'react'
import MtrFugas from './components/MtrFugas'
import RptFugas from './components/RptFugas'
import Vales from './components/Vales'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

const Fugas = () => {

    return (

        <Router>
            <div className="container">
                <div className="btn-group">

                    <Link to="/MtrFugas" className="btn btn-dark">
                        Metricas
                    </Link>

                    <Link to="/RptFugas" className="btn btn-dark">
                        Rep Fugas
                    </Link>

                    <Link to="/Vales" className="btn btn-dark">
                        Vales PC
                    </Link>

                </div>
            </div>
            <Switch>

                <Route path="/MtrFugas">
                    <div className="container">
                        <h4 className="text-center">en Metrica</h4>
                        <hr />
                    </div>
                    <MtrFugas />
                </Route>

                <Route path="/RptFugas">
                    <div className="container">
                        <h4 className="text-center">Reporte de Fugas</h4>
                        <hr />
                    </div>
                    <RptFugas />
                </Route>

                <Route path="/Vales">
                    <div className="container">
                        <h4 className="text-center">Vales de P civil</h4>
                        <hr />
                    </div>
                    <Vales />
                </Route>

            </Switch>

        </Router>
    )
}

export default Fugas
