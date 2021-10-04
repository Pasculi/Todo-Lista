import React from 'react';

const Espejo = (props) => {

    const { firstName, lastName, email, password, confirmPassword } = props.info;


    return (
        <div>
            <h1>Información</h1>
            <br />
            <p>Nombre: {firstName} </p><br />
            <p>Apellido: {lastName} </p><br />
            <p>Email: {email} </p><br />
            <p>Contraseña: {password} </p><br />
            <p>Confirmar Contraseña: {confirmPassword} </p><br />
        </div>
    )


}

export default Espejo;