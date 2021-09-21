import React, {useState} from 'react';

const Login = (props) =>{
     const {nombre, setNombre} = props;
              
          return(
               <div>
                    <h1>Formulario Login</h1>
                    <h3>{':-)'}</h3>
                    <label>Nombre: </label>
                    <input value= {nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <br></br>
                    <label>Password: </label>
                    <input type='password'></input>
                    <br></br>
                    <label>Confirmar: </label>
                    <input type='password'></input>
                    <br></br>
                    <br></br>
                    
               </div>

          );
     }


export default Login;