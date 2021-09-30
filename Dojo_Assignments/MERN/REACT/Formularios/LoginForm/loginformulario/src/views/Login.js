import React, { useState } from 'react';

const Login = (props) => {
const {txt, setTxt, password, setPassword, confirm, setConfirm} = props;
return(
        <div>
            <form>
                    <h1>Login</h1><br/>
                    <label>Nombre:</label>
                    <input type='text' value={txt} onChange={(e) => setTxt(e.target.value)}></input><br/>
                    <label>{txt}</label>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                    <h2>{password}</h2>
                    <label>Confirm Password:</label>
                    <input type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)}></input><br/>
                    <h2>{confirm}</h2>
            </form>
        </div>
    );
}


export default Login;