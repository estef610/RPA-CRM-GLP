import React from 'react'

const TckFalla = () => {

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
                <input type="text" className="form mb-2 mr-2" placeholder="Fecha" />
                <input type="text" className="form mb-2 mr-2" placeholder="Hora" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Mecanico" />
                <br /><br />
                <input type="text" className="form-control mb-2" placeholder="Describa los hechos" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Cabina" />

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

    );
}

export default TckFalla
