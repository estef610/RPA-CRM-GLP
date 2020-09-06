import React, {useState}  from 'react';


const Estado= ()=> {

    const [texto, setTexto]= useState('Activa')

    const estadoClick= ()=> {
        setTexto('Inactiva')
    }

    return (
        <div>
           <h3>{texto}</h3> 
           <button onClick={ ()=> estadoClick()}>Unidad</button>
        </div>
        
    )
}

export default Estado
