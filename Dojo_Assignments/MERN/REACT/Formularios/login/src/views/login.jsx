import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const Login = () => {
    const [nombre, setNombre] = setState ('');
    const [apellido, setApellido] = setState ('');
    const [email, setEmail] = setState ('');

    return(
        <div>
        <fieldset>
            <legend>
                <h1>Login</h1>
            </legend>
        <label>Nombre: </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        <br />
        <label>Apellido: </label>
        <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
        <br />
        <label>Email: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <br />
        <br />
        <Button variant="primary">Mostrar</Button>
        </fieldset>
        </div>
    )
}

export default Login;