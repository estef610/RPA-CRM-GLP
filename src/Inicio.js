import React from 'react';
import {firebase} from './firebase'

function Inicio() {

    const [pedido, setPedido] = React.useState([])
    const [ergonomico, setErgonomico] = React.useState('')


    React.useEffect(() => {
        const loginSingUp = async () => {
            try {
                const db = db.firestore ()
                const data = await db.collection ('pedido').get()
                const arrayData = await data.docs.map (doc => ({id:doc.id, ...doc.data()}))
                console.log(arrayData)
                setPedido(arrayData)
            }catch (error) {
                console.log(error)
            }
        }
        loginSingUp()
    }, [])

    const agregar = async (e) => {
        e.preventDefault()
        if(!ergonomico.trim()){
            console.log('agregar')
            return
        }
        try {
            const db = firebase.firestore()
            const ruta = {
                ruta: ergonomico,
                fecha: Date.now()
            }
           // const data = await firebase.collection('pedido').add(nuevoPedido)
           //     setPedido([
            //   ...pedido,
            //    {...nuevoPedido,id: data.id}
          //  ])
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-3">
            <hr/>
            <div className="row">
                <div className="name-md-6">
                    <ul className="singUp">
                        {
                        pedido.map(item => (
                        <li className="singUp-item" key={item.id}>
                            {item.ergonomico}
                            <button className="btn.btn-danger.btn-sm-float-right mr-2">
                                eliminar
                            </button>
                            <button className="btn.btn-warning.btn-sm-float-right mr-2">
                                editar
                            </button>

                        </li>
                        ))
                        }
                    </ul>
                </div>
                <div className="pin-md-6">
                    <h3>Formulario</h3>
                    <form onSubmit={agregar}>
                        <input
                        type="text"
                        placeholder="Id unidad"
                        className="form-control mb-2"
                        onChange={e => setErgonomico(e.target.value)}
                        value={ergonomico}
                        />
                    </form>
                </div>
            </div>
          
        </div>
    );
}
export default Inicio;


