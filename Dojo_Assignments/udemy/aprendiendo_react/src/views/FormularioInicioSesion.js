import React, { useState } from 'react';


const FormularioInicioSesion = () => {
    const [usuario, cambiaUsuario] = useState('');
    const [password, cambiaPassword] = useState('');

    const onChange = (evento) => {
        if (evento.target.name === 'usuario') {
            cambiaUsuario(evento.target.value);

        } else if (evento.target.name === 'password') {
            cambiaPassword(evento.target.value);

        }

    }

    return (
        <div>

            <form action="">
                <p>Usuario: {usuario} </p>
                <p>Contraseña: {password} </p>
                <br />
                <br />
                <br />
                <label htmlFor="user">Usuario:</label>
                <input
                    name="usuario"
                    id="user"
                    type="text"
                    value={usuario}
                    onChange={onChange}
                /><br />
                <label htmlFor="pass">Contraseña:</label>
                <input
                    name="password"
                    id="pass"
                    type="password"
                    value={password}
                    onChange={onChange}
                /><br />
                <button type="submit">Iniciar sesión</button>

            </form>
        </div>
    )
}

export default FormularioInicioSesion
