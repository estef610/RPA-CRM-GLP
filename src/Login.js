import React from 'react'
import {firebase} from './firebase'

const Login = () => {

    const [idEmpleado, setIdEmpleado] = React.useState('')
    const [password, setPasword] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if (!idEmpleado.trim()) {
            //console.log('Ingrese su id de empleado')
            setError('Ingrese su id de empleado')
            return
        }
        if (!password.trim()) {
            //console.log('Ingrese su password')
            setError('Ingrese su password')
            return
        }
        if (password.length < 6) {
            //console.log("Password mayor a 6 caracteres ó más")
            setError('Password mayor a 6 caracteres ó más')
            return
        }
        setError(null)
        console.log("Buen turno!")

        if(esRegistro){
            registrar()
        }
    }

    const registrar = React.useCallback(async() => { 

        try {
            const respuesta = await firebase.createUserWithEmailAndPassword(idEmpleado, password)
        } catch (error) {
            setError(error)
        }

    }, [idEmpleado, password])

    return (
        <div className="container mt-3">
            {
                esRegistro ? 'Registro de acceso a empleado' : 'Login de acceso'
            }
            <div className="row justify-content-center">
                <div claseName="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input
                            type="idEmpreado"
                            className="form-control mb-3"
                            placeholder="Ingrese su id de empleado"
                            onChange={e => setIdEmpleado(e.target.value)}
                            value={idEmpleado}
                        />
                        <input
                            type="password"
                            className="form-control mb-4"
                            placeholder="Ingrese su password"
                            onChange={e => setPasword(e.target.value)}
                            value={password}
                        />
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                        >
                            {esRegistro ? 'Registrarse' : 'Acceder'}
                        </button>
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={() => setEsRegistro(!esRegistro)}
                        >
                            {esRegistro ? 'Iniciar sesion' : '¿No tienes acceso?'}
                        </button>
                    </form>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Login
