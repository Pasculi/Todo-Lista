import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const Login = () => {
    //Necesitamos 2 estados correo y contraseña

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault()
        const usuario = { email, password }
        const respuesta = await axios.get('localhost:8000/api/users/login', usuario)
        const mensaje = respuesta.data.email
        if(mensaje===email) {
            return (Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              }))
        }else{
            return alert('Incorrecto')
        }

    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center fa-4x">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Inicio de sesión</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <label htmlFor="email"> Correo</label>
                                    <input type="email" name="email" id="email" className="form-control" autoFocus required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" >Contraseña</label>
                                    <input name="password" id="password" type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                                </div><br />
                                <input type="submit" className="btn btn-primary btn-block form-control" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
