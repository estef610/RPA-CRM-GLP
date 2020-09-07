import React from 'react'


const Programados= (props)=> {

    console.log(props)
    return(
        <div className="container mr-6">
            <h6>Programado a  {props.unidad}</h6>
            <p>Unidad {props.At}</p>
            <p>Pago {props.pago}</p>
            
        </div>
    )
}

export default Programados
