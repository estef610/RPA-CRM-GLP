import React from 'react';
import Search from './Search.js';
import Estado from "./components/Estado.jsx";
import Nuevau from './components/Nuevau.jsx';
import Pago from "./components/Pago.jsx";
function Perfil(props) {
    return (

        <div className="container">
            <hr />
            <div className="subcontainer">

                { /*   <div className="logo">
                    {props.title}
                </div> */}

                <div className="search">
                    <Search />
                </div>


                <div className="Estado">
                    <Estado />
                </div>

                <div className="Pago">
                    <Pago />
                </div>

                <div className="NuevaU">
                    <Nuevau />
                    <button
                        className="btn btn-dark btn-primary mt-2"
                        onClick="./components/Nuevau.jsx"
                    >
                        Nueva Unidad
                    </button>
                    <br/><br/>
                </div>

            </div>
        </div>
    );
}


export default Perfil;