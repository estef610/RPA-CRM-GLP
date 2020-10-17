import React, { useState } from 'react';


const Estado = () => {

    const [texto, setTexto] = useState('Activa')
    const [jornada, setJornada] = React.useState(true)

    const estadoClick = () => {
        setTexto('Inactiva')
    }

    return (
        <div>
            <h3>{texto}</h3>
            <button
                className="btn btn-dark btn-primary"
                type="submit"
                //onClick=
                onClick={() => estadoClick(), () => setJornada(!jornada)}
            >
               {jornada ? 'Inactiva' : 'Activar'}
               </button>
        </div>

    )
}

export default Estado
