import React from 'react';
import Programados from "./components/Programados.jsx";
import Seguimiento from "./components/Seguimiento.jsx";


function Agenda() {
    return (
        <div className="container mt-5" >

            <h5>Unidad</h5>
                <br/>
            <Programados At="At-020-144" pago="efect" idAgente={1578} />
                <br/>
            <Programados At="At-020-101" pago="terminal" idAgente={1154} />
                <br/>
                <hr/>

            <h5>Seguimiento de pedido</h5>
            <Seguimiento 
                At="At-020-144" 
                idAgente={1578}
                pago="efect" 
            />

        </div>
    )
}

export default Agenda