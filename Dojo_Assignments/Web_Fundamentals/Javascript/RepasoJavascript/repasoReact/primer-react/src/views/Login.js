import React, { useState } from 'react';
const Login = (props) => {

    const {age, setAge} = props;
    const {txt, setTxt} = props;

    return(
        <div>
            <h1>Soy un componente funcional y soy mas cool!!</h1>
            <h3>{':-)'}</h3>
            <h1>{age}</h1>
            <button onClick={() => setAge(age + 1)}>Sumar edad</button>
            
            <form>
                <p></p>
                <label>Nombre: </label>
                <input value={txt} onChange={(e) => setTxt(e.target.value)} ></input>
            </form>

        </div>

    );
}

export default Login;