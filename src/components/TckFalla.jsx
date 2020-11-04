import React from 'react'

const TckFalla = () => {
    const [ticket, setTicket] = React.useState(311)

    //const numTik = () => {
    //   console.log('click')
    //    setTicket(ticket + 1)
    

    return (

        <div className="container">
            <div>
                <h6>Ticket #</h6>
                <h3>{ticket} </h3>
                
            </div>

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
                    className="btn btn-dark mr-2"
                    onClick={() => setTicket(ticket +1)}
                >
                    Guardar
                        </button>
                <button
                    className="btn btn-dark mr-2"
                    onClick={() => setTicket(ticket +1)}
                >
                    Imprimir
                        </button>
                <button
                    className="btn btn-dark mr-2"
                    onClick={() => setTicket(ticket +1)}
                >
                    Enviar
                        </button>
            </form>
            <br /><br />
        </div>

    );
}

export default TckFalla
