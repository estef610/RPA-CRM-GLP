import React from 'react'

const Vales = () => {
    const [flVale, setFlVale] = React.useState(377)

    return (
        <div className="container">
            <div>
                <h6>Folio #</h6>
                <h3>{flVale} </h3>
                
            </div>

            <form action="">
                
                <input type="text" className="form mb-2 mr-2" placeholder="Quien solicita el ticket?" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Folio de PCivil" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Operador" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ayudante" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ergonomico" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Ruta" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Cliente" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Nota" />
                <input type="text" className="form mb-2 mr-2" placeholder="Id pedido" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Fecha" />
                <input type="text" className="form mb-2 mr-2" placeholder="Hora" />
                <br /><br />
                <input type="text" className="form mb-2 mr-2" placeholder="Tipo de carga" />
                <input type="text" className="form mb-2 mr-2" placeholder="Capacidad" />
                <br /><br />
                <input type="text" className="form-control mb-2" placeholder="Magnitud de daños" />
                <input type="text" className="form-control mb-2" placeholder="Describa los hechos" />
                <input type="text" className="form-control mb-2" placeholder="Reporte de Cabina" />
                <br />
                <button
                    className="btn btn-dark mr-2"
                    onClick={() => setFlVale(flVale +1)}
                >
                    Guardar
                        </button>
                <button
                    className="btn btn-dark mr-2"
                    onClick={() => setFlVale(flVale +1)}
                >
                    Imprimir
                        </button>
                <button
                    className="btn btn-dark mr-2"
                    onClick={() => setFlVale(flVale +1)}
                >
                    Enviar
                        </button>
            </form>
            <br /><br />
        </div>

    )
}

export default Vales
