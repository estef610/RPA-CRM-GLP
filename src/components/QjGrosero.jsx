import React from 'react'

const QjGrosero = () => {
    const [ticket, setTicket] = React.useState (199)
    
    return (
        <div className="container">
            <div>
                <h6>Ticket #</h6>
                <h3>{ticket} </h3>
            </div>
                <form action="">
                    
                    <input type="text" className="form mb-2 mr-2" placeholder="Id Operador" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id Ayudante" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id Ergonomico" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id Ruta" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id Supervisor" />
                    <br /><br />
                    <input type="text" className="form mb-2 mr-2" placeholder="Fecha" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Hora" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Calle" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Colonia" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Municipio" />
                    <br /><br />
                    <input type="text" className="form mb-2 mr-2" placeholder="Tipo de Robo" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Numero de Asaltantes" />
                    <input type="text" className="form-control mb-2" placeholder="Conteo de perdida" />
                    <br /><br />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id de Patrulla" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id de Peritos" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id de Ambulancia" />
                    <input type="text" className="form mb-2 mr-2" placeholder="Id de P Civil" />
                    <input type="text" className="form-control mb-2" placeholder="Version de Testigo" />
                    <input type="text" className="form-control mb-2" placeholder="Version de Operador" />
                    <input type="text" className="form-control mb-2" placeholder="Version de Ayudante" />
                    <input type="text" className="form-control mb-2" placeholder="Version de Cabina" />
                    <input type="text" className="form-control mb-2" placeholder="Version de Supervisor" />
                    <input type="text" className="form-control mb-2" placeholder="Describa los hechos" />
                    <input type="text" className="form-control mb-2" placeholder="Reporte de Cabina" />
                    <input type="text" className="form-control mb-2" placeholder="Reporte de Supervisor" />
                    <button
                        className="btn btn-dark mr-2"
                        onClick={() => setTicket(ticket + 1)}
                    >
                        Guardar
                        </button>
                    <button
                        className="btn btn-dark mr-2"
                        onClick={() => setTicket(ticket + 1)}
                    >
                        Imprimir
                        </button>
                    <button
                        className="btn btn-dark mr-2"
                        onClick={() => setTicket(ticket + 1)}
                    >
                        Enviar
                        </button>
                </form>
                <br /><br />
        </div>
    )
}

export default QjGrosero
