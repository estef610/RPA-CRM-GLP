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
                <input type="text" className="form mb-2 mr-2" placeholder="Id Mecanico" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Fecha" />
                <input type="text" className="form mb-2 mr-2" placeholder="Hora" />
                <input type="text" className="form mb-2 mr-2" placeholder="Calle" />
                <input type="text" className="form mb-2 mr-2" placeholder="Colonia" />
                <input type="text" className="form mb-2 mr-2" placeholder="Municipio" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Id de Patrulla" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id de Peritos" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id de Ambulancia" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id de P Civil" />
                <input type="text" className="form-control mb-2" placeholder="Conteo de Perdida" />
                <input type="text" className="form-control mb-2" placeholder="Conteo de Daños dentro de la unidad " />
                <input type="text" className="form-control mb-2" placeholder="Conteo de Daños Fuera de la unidad " />
                <input type="text" className="form-control mb-2" placeholder="Estado medico de Personal" />
                <br /><br />
                <input type="text" className="form-control mb-2" placeholder="Version de Testigo" />
                <input type="text" className="form-control mb-2" placeholder="Version de Operador" />
                <input type="text" className="form-control mb-2" placeholder="Version de Ayudante" />
                <input type="text" className="form-control mb-2" placeholder="Version de Cabina" />
                <input type="text" className="form-control mb-2" placeholder="Version de Supervisor" />
                <input type="text" className="form-control mb-2" placeholder="Describa los hechos" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Cabina" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Supervisor" />

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