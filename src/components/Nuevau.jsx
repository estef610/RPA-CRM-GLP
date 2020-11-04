import React from 'react'

const Nuevau = () => {


    //const [Unidad, setUnidad] = React.useState('')

    return (
        <div  className='container'>
            <br />
            <h3>Registro de Nueva Unidad</h3>
            <br />

            <div>
                <form action="">
                    <input type="text" className="form mr-2 mb-2" placeholder="Tipo Unidad" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Cabina" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Id Unidad" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Id Operador" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Asigne el Horario" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Colonias de Cobertura" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Colonias de BlackList" />
                    <input type="text" className="form mr-2 mb-2" placeholder="Días de actividad" />
                        <br/><br/>
                    <button
                        className="btn btn-dark btn-primary mr-2"
                        type="submit"
                        onClick="" >
                        Registrar
                    </button>
                    <button
                        className="btn btn-dark btn-primary mr-2"
                        type="submit"
                        onClick="" >
                        Regresar
                    </button>
                        <br/><br/> 
                </form>
            </div>
        </div>
    )
}

export default Nuevau
