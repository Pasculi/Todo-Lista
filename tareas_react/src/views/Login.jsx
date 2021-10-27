import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Correo electrónico: </label>
                <input name="email" id="email" type="text" placeholder="Ingrese su correo" />
                <label htmlFor="password">Contraseña: </label>
                <input name="password" id="password" type="text" placeholder="Ingrese su contraseña" />
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Login
