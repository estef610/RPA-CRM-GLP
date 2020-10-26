import React from 'react'

const Nuevaf = () => {


    //const [Factura, setFacturacion] = React.useState('')

    return (
        <div className='container'>
            <div>
                <br />
                <h3>Nuevo Registro de Factura</h3>
                <br />
                <h5>Ingrese ...</h5>
                <br />

                <div>
                    <form action="">
                        <input type="text" className="form-control mb-2" placeholder="Id Nota" />
                        <input type="text" className="form-control mb-2" placeholder="RFC" />
                        <input type="text" className="form-control mb-2" placeholder="E-mail" />
                        <input type="text" className="form-control mb-2" placeholder="Telefono" />
                        <input type="text" className="form-control mb-2" placeholder="Nombre ó Razón social" />
                        <input type="text" className="form-control mb-2" placeholder="Calle" />
                        <input type="text" className="form-control mb-2" placeholder="Número exterior" />
                        <input type="text" className="form-control mb-2" placeholder="Número Interior" />
                        <input type="text" className="form-control mb-2" placeholder="Colonia" />
                        <input type="text" className="form-control mb-2" placeholder="Cp" />
                        <input type="text" className="form-control mb-2" placeholder="Delegación ó Municipio" />
                        <input type="text" className="form-control mb-2" placeholder="Ciudad ó Localidad" />
                        <input type="text" className="form-control mb-2" placeholder="Estado" />
                        <input type="text" className="form-control mb-2" placeholder="Pais" />
                        <br />

                        <button
                            className="btn btn-dark btn-primary mr-2"
                            type="submit"
                            onClick=""
                        >
                            Agregar
                    </button>
                        <button
                            className="btn btn-dark btn-primary mr-2"
                            type="submit"
                            onClick=""
                        >
                            Facturar
                    </button>
                        <button
                            className="btn btn-dark btn-primary mr-2"
                            type="submit"
                            onClick=""
                        >
                            Regresar
                    </button>
                    </form>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

export default Nuevaf
