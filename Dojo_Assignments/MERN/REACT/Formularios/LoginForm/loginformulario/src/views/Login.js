import React, { useState } from 'react';


const Login = (props) => {
const {nombre, setNombre, lastNombre, setLastNombre, email, setEmail, password, setPassword, confirm, setConfirm} = props;
return(
        <div>
            <form>
                    <h1>Login</h1><br/>
                    <label>First Name</label>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}></input><br/>
                    <label>Last Name</label>
                    <input type='text' value={lastNombre} onChange={(e) => setLastNombre(e.target.value)}></input><br/>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                    <label>Confirm Password:</label>
                    <input type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)}></input><br/>
            </form>
        </div>
    );
}
export default Login;