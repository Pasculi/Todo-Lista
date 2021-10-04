import React from "react";

const Registro = (props) => {
    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Registro</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">Nombre</label>
                    <input onChange={onChange} type="text" name="firstName"></input>
                </div><br />
                <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input onChange={onChange} type="text" name="lastName"></input>
                </div><br />
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input onChange={onChange} type="text" name="email"></input>
                </div><br />
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={onChange} type="password" name="password"></input>
                </div><br />
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input onChange={onChange} type="password" name="confirmPassword"></input>
                </div>
            </form>

        </div>

    );
};

export default Registro;