import React, {useState}  from 'react';


const Pago= ()=> {

    const [texto, setTexto]= useState('Efectivo')

    const pagoClick= ()=> {
        setTexto('Efectivo y Terminal')
    }

    return (
        <div>
           <h3>{texto}</h3> 
           <button onClick={ ()=> pagoClick()}>Pago</button>
        </div>
        
    )
}

export default Pago
