import React from 'react'
import Search from './Search'
import Estado from "./components/Estado"
import Nuevau from './components/Nuevau'
import Pago from "./components/Pago"

function Perfil(props) {

    return (

        <div className="container">
            <hr />
            <div className="subcontainer">

                {   <div className="logo">
                    {props.title}
                </div> }

                <div className="Search">
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
                        className="btn btn-dark btn-primary mr-2"
                        onClick="./components/Nuevau"
                    >
                        Nueva Unidad
                    </button>
                    <br/><br/>
                </div>

            </div>
        </div>
    )
}


export default Perfil