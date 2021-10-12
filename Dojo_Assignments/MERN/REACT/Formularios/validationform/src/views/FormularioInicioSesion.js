import React, { useState } from 'react';
import './../App.css';


const FormularioInicioSesion = () => {
    const [formUser, setFromUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    //Estado de los errores
    const [errMsg, setErrMsg] = useState('');
    

    //Funcion para detectar escritura en un input
    const handleChange = (e) => {
        setFromUser({ ...formUser, [e.target.name]: e.target.value });
        if (e.target.name === 'password' && e.target.value !== formUser.confirmPassword) {
            setErrMsg('* Las contraseñas deben coicidir')
        } else {
            setErrMsg('');
        }

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formUser).includes('')) {
            setErrMsg('* Debe llenar todos los campos del formulario');
        } else {
            setErrMsg('');

        }
    };

    return (
        <div>

            <form onSubmit={handleOnSubmit}>
                <p>Usuario: {formUser.nombre} </p>
                <p>Contraseña: {formUser.apellido} </p>
                <p>Usuario: {formUser.email} </p>
                <p>Contraseña: {formUser.password} </p>
                <p>Confirmar contraseña: {formUser.confirmPassword} </p>
                <br />
                <br />
                <br />
                <div>
                    <label htmlFor="nombre">Usuario:</label>
                    <input
                        name="nombre"
                        id="nombre"
                        type="text"
                        value={formUser.nombre}
                        onChange={handleChange}
                    /> <br />
                </div>
                <label htmlFor="apellido">Apellido:</label>
                <input
                    name="apellido"
                    id="apellido"
                    type="text"
                    value={formUser.apellido}
                    onChange={handleChange}
                /><br />
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    id="email"
                    type="text"
                    value={formUser.email}
                    onChange={handleChange}
                /><br />
                <label htmlFor="password">Contraseña:</label>
                <input
                    name="password"
                    id="password"
                    type="text"
                    value={formUser.password}
                    onChange={handleChange}
                /><br />
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="text"
                    value={formUser.confirmPassword}
                    onChange={handleChange}
                />
               
                <br />
                <button type="submit">Iniciar sesión</button>

            </form>
            <p className='error'>{errMsg}</p>
        </div>
    )
}

export default FormularioInicioSesion
