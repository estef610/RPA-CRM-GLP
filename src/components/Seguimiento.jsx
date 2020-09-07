import React from 'react'

const Seguimiento = (props) => {
    return (
        <div>
            <h6>Seguimiento</h6>
            <div>
                <p className="mt-0"> {props.idAgente}</p>
                <p className="mt-0"> {props.At}</p>
                <p className="mt-0"> {props.pago}</p>
            </div>
        </div>
    )
}

export default Seguimiento
