import React from 'react'

const Levantar = () => {

    const [idunidad, setIdunidad]= React.useState('')
    const [idcliente,setIdcliente]= React.useState('')
    const [capacidad, setCapacidad]= React.useState('')
    const [telcliente, setTelcliente]= React.useState('')
    const [pago,setPago]= React.useState('')
    const [descripcion, setDescripcion]= React.useState('')
   
    const[lista,setLista]= React.useState([])

    const guardarDatos= (e) => {
        e.preventDefault()
        
        if(!idunidad.trim()){
            console.log("esta vacio")
            return}
        if(!idcliente.trim()){
            return}
        if(!capacidad.trim()){
            return}
        if(!telcliente.trim()){
            return}
        if(!pago.trim()){
            return}
        if(!descripcion.trim()){
            return}

        setLista([
            ...lista,
            {nameidunidad: idunidad, nameidcliente: idcliente, namecapacidad:capacidad, nametelcliente: telcliente, namepago: pago, namedescripcion:descripcion}
        ])
        
        e.target.reset()
        setIdunidad('')
        setIdcliente('')
        setCapacidad('')
        setTelcliente('')
        setPago('')
        setDescripcion('')


    }
    return (
        <div className="container">

            <form>
                <br/>
                <input type="text" className="form mb-2 mr-2" placeholder="Id Unidad"
                    onChange={ (e) => setIdunidad(e.target.value) } />
                <input type="text" className="form mb-2 mr-2" placeholder="Id Cliente"
                    onChange={ (e) => setIdcliente(e.target.value) } />
                <input type="text" className="form mb-2 mr-2" placeholder="Capacidad"
                    onChange={ (e) => setIdunidad(e.target.value) } />
                <input type="text" className="form mb-2 mr-2" placeholder="Tel Cliente"
                    onChange={ (e) => setTelcliente(e.target.value) } />
                <input type="text" className="form mb-2 mr-2" placeholder="Pago"
                    onChange={ (e) => setPago(e.target.value) } />
                <input type="text" className="form-control mb-2" placeholder="Descripcion"
                    onChange={ (e) => setDescripcion(e.target.value) } />
                <br/>
                <button 
                className="btn btn-dark btn-primary mr-2" 
                type="submit" >
                    Levantar
                </button>
                <button 
                className="btn btn-dark btn-primary mr-2" 
                type="submit"
                >
                    Regresar
                </button>
                </form>
            <form onSubmit={guardarDatos}>...
                <ul>{
                    lista.map((item,index) =>(
                        <li key={index}>
                            {item.nameidunidad}-{item.nameidcliente}-{item.namecapacidad}-{item.nametelcliente}-{item.namepago}-{item.namedescripcion}
                        </li>
                    ))
                }</ul>
                    
            </form>
        </div>
    )
}

export default Levantar
