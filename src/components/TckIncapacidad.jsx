import React from 'react'

const TckIncapacidad = () => {

    return (

        <div className="container">
            <form action="">
                
                <input type="text" className="form mb-2 mr-2" placeholder="Quien solicita el ticket?" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Operador" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ayudante" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ergonomico" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ruta" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Supervisor" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Fecha de solicitud" />
                <input type="text" className="form mb-2 mr-2" placeholder="Hora" />
                <input type="text" className="form mb-2 mr-2" placeholder="Fecha de inasistencia" />
                <input type="text" className="form mb-2 mr-2" placeholder="Tipo de insidente" />
                <input type="text" className="form mb-2 mr-2" placeholder="Justificante medico..." />
                <br /><br />
                <input type="text" className="form-control mb-2" placeholder="Describa los hechos" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Supervisor" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Compañero" />

                <button
                    className="btn btn-dark btn-primary mr-2"
                    type="submit"
                    onClick=""
                >
                    Guardar
                        </button>
                <button
                    className="btn btn-dark btn-primary mr-2"
                    type="submit"
                    onClick=""
                >
                    Imprimir
                        </button>
                <button
                    className="btn btn-dark btn-primary mr-2"
                    type="submit"
                    onClick=""
                >
                    Enviar
                        </button>
            </form>
            <br /><br />
        </div>
    )
}

export default TckIncapacidad
