import React, { Component } from 'react';

let estaciones = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
let auth=false;

class Login extends Component {
render() {
    const {msg} = this.props;
    return (
        <>
            <h1>Soy un componente de clase</h1>
            <h2>{msg}</h2>
            <h1 className="btn btn-primary me-1" >Enviar</h1>
            <p>{auth ? "El usuario esta logueado" : "El usuario no se encuentra logueado"}</p>
            <ul>
                {estaciones.map((el, index) => (
                <li key={index}>{el}</li>
                    ))}
            </ul>
        </>
    )
    }
}
export default Login;
