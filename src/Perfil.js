import React from 'react';
import Search from './Search.js';
import Estado from "./components/Estado.jsx";
import Nuevau from './components/Nuevau.jsx';

function Perfil(props){
    return(

        <div className="container">
            <div className="subcontainer">

            { /*   <div className="logo">
                    {props.title}
                </div> */}

                <div className="search">
                    <Search />
                </div>
 

                <div className="Estado">
                    <Estado/>
                </div> 

                <div className="NuevaU">
                    <Nuevau/>
                    <button className='button new-u' onClick="./components/Nuevau.jsx">Nueva Unidad</button>
                </div> 

            </div>
        </div>
    );
}

export default Perfil;