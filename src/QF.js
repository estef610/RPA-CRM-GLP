import React from 'react'
import Fugas from './Fugas'
import Quejas from './Quejas'
import Tickets from './Tickets'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function QF() {
    return (
        <Router>
            <div className="container">
                <div className="btn-group">

                    <Link to="/Fugas" className="btn btn-dark">
                        Fugas
                    </Link>

                    <Link to="/Tickets" className="btn btn-dark">
                        Tickets
                    </Link>

                    <Link to="/Quejas" className="btn btn-dark">
                        Quejas
                    </Link>


                </div>
                <hr />
            </div>
            <Switch>

                <Route  path="/Fugas">
                    <div className="container">
                        <h4 className="text-center">Fugas</h4>
                    </div>
                    <Fugas />
                </Route>

                <Route  path="/Tickets">
                    <div className="container">
                        <h4 className="text-center">Tickets</h4>
                    </div>
                    <Tickets />
                </Route>
                
                <Route  path="/Quejas">
                    <div className="container">
                        <h4 className="text-center">Quejas</h4>
                    </div>
                    <Quejas />
                </Route>

            </Switch>

        </Router>

    )
}

export default QF
