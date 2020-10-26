import React from 'react'
import Cobertura from './components/Cobertura'
/*import GPS from './components/GPS'*/
import { firebase } from './firebase'

function Unidad() {

    const [unidad, setUnidad] = React.useState([])
    const [ergonomico, setErgonomico] = React.useState('')
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState(true)

    React.useEffect(() => {

        const obternerDatos = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('unidad').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                
                setUnidad(arrayData)

            } catch (error) {
            }
        }
        obternerDatos()
    }, [])

    const agregar = async (e) => {
        e.preventDefault()
        if (!ergonomico.trim()) {
            console.log('esta vacio')
            return
        }
        try {
            const db = firebase.firestore()
            const nuevoPedido = {
                name: ergonomico,
                fecha: Date.now()
            }
            const data = await db.collection('unidad').add(nuevoPedido)
            setUnidad([
                ...unidad,
                { ...nuevoPedido, id: data.id }
            ])

            setErgonomico('')

        } catch (error) {
        }
    }
    const eliminar = async (id) => {
        try {
            const db = firebase.firestore()
            await db.collection('unidad').doc(id).delete()

            const arrayFiltrado = unidad.filter(item => item.id !== id)
            setUnidad(arrayFiltrado)

        } catch (error) {
        }
    }

    const activarEdicion = (item) => {
        setModoEdicion (true)
        setErgonomico(item.name)
        setId(item.id)
    }

    const editar = async (e) => {
        e.preventDefault()
        if(!ergonomico.trim()){
        return
    }
    try {
        const db = firebase.firestore()
        await db.collection('unidad').doc(id).delete(id).update({
            name: ergonomico
        })
        const arrayEditado = unidad.map(item => (
            item.id === id ? {id: item.id, fecha: item.fecha, name: ergonomico} : item
        ))
        setUnidad(arrayEditado)
        setModoEdicion (false)
        setErgonomico('')
        setId('')

    } catch (error) {
        
    }
    }

    return (
        <div className="container">
            <hr />
            <div className="row">

                <div className="name-md-6">
                    <ul className="list-group">
                        {
                            unidad.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    {item.name}
                                    <button
                                        className="btn btn-danger btn-sm float-right mr-2"
                                        onClick={() => eliminar(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                    <button 
                                        className="btn btn-warning btn-sm float-right mr-2"
                                        onClick={() => activarEdicion(item.id)}
                                        >
                                        {
                                        editar ? 'Editar' : 'Agregar'
                                        }
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="pin-md-0">
                    <h3>
                        {
                        modoEdicion ? 'Editar Unidad' : 'Agregar Unidad'
                        }
                    </h3>
                    <form onSubmit={agregar}>
                        <input
                            type="text"
                            placeholder="Id unidad"
                            className="form-control mb-2"
                            onChange={e => setErgonomico(e.target.value)}
                            value={ergonomico}
                        />
                        <button
                            className=
                            { modoEdicion ? 'btn btn-blue btn-primary mr-2' : 'btn btn-dark btn-primary mr-2'}
                            type="submit"
                            onClick=""
                        >
                           { modoEdicion ? 'Editar' : 'Agregar'}
                        </button>

                    </form>
                </div>
                <div className="container">
                    <Cobertura />
                </div>
            </div>
        </div>
        
    );
}
export default Unidad


