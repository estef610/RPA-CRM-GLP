import React from 'react'

const Nuevau = () => {


    const [Unidad, setUnidad] = React.useState('')

    return (
        <div>
            <br />
            <h3>Registro de Nueva Unidad</h3>
            <br />
            <h5>Ingrese ...</h5>
            <br />

            <div>
                <form action="">
                    <input type="text" className="form-control mb-2" placeholder="Tipo Unidad" />
                    <input type="text" className="form-control mb-2" placeholder="Cabina" />
                    <input type="text" className="form-control mb-2" placeholder="Id Unidad" />
                    <input type="text" className="form-control mb-2" placeholder="Id Operador" />
                    <input type="text" className="form-control mb-2" placeholder="Asigne el Horario" />
                    <input type="text" className="form-control mb-2" placeholder="Ingrese las colonias de Cobertura" />
                    <input type="text" className="form-control mb-2" placeholder="Ingrese las colonias de BlackList" />
                    <input type="text" className="form-control mb-2" placeholder="Espesifique días de actividad" />

                    <button
                        className="btn btn-dark btn-primary"
                        type="submit"
                        onClick="" >
                        Registrar
                        </button>
                    <button
                        className="btn btn-dark btn-primary"
                        type="submit"
                        onClick="" >
                        Regresar
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Nuevau
