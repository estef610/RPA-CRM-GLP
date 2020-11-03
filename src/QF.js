import React from 'react'
import Fugas from './components/Fugas'
import Quejas from './components/Quejas'
import Tickets from './Tickets'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function QF() {
    return (
        <Router>
            <div className="container">
                <div className="btn-group">
                    <Link to="/Quejas" className="btn btn-dark">
                        Quejas
                    </Link>

                    <Link to="/Fugas" className="btn btn-dark">
                        Fugas
                    </Link>

                    <Link to="/Tickets" className="btn btn-dark">
                        Tickets
                    </Link>

                </div>
                <hr />
            </div>
            <Switch>

                <Route  path="/Quejas">
                    <div className="container">
                        <h4 className="text-center">Quejas</h4>
                        <hr/>
                    </div>
                    <Quejas />
                </Route>

                <Route  path="/Fugas">
                    <div className="container">
                        <h4 className="text-center">Fugas</h4>
                        <hr/>
                    </div>
                    <Fugas />
                </Route>

                <Route  path="/Tickets">
                    <div className="container">
                        <h4 className="text-center">Tickets</h4>
                    </div>
                    <Tickets />
                </Route>
            </Switch>

        </Router>

    );
}

export default QF
