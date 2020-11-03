import React from 'react'
import GPS from './GPS'
import Perfil from './Perfil'
import Unidad from './Unidad'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function Ergonomico () {
    return (
        <Router>
            <div className='container'>
                <div className='btn-group'>

                    <Link to="/GPS" className="btn btn-dark">
                        GPS
                    </Link>

                    <Link to="/Perfil" className="btn btn-dark">
                        Perfil
                    </Link>

                    <Link to="/Unidad" className="btn btn-dark">
                        Unidad
                    </Link>

                </div>
            </div>
            <Switch>

                <Route path="/GPS">
                    <div className="container">
                        <h4 className="text-center">GPS</h4>
                    </div>
                    <GPS /> 
                </Route>

                <Route path="/Perfil">
                    <div classeName="container">
                        <h4 className="text-center">Perfil</h4>
                    </div>
                    <Perfil />
                </Route>

                <Route path="/Unidad">
                    <div classeName="container">
                        <h4 className="text-center">Unidad</h4>
                    </div>
                    <Unidad />
                </Route>

            </Switch>

        </Router>
        
    );
}

export default Ergonomico

