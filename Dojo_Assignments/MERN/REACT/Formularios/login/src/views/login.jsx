import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [registerForm,setRegisterForm] = useState({
        userName:'',
        address:'',
        email:'',
        rut:'',
        phoneNumbers:'',
        password:'',
        confirmPassword:'',

    })
    const [isRegisterOn, setIsRegisterOn] = useState(false);

    const handleOnChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setRegisterForm({...registerForm,[e.target.name]: e.target.value})
    }

    return(
        <div className='card-container'>
        {isRegisterOn ?
        (
            <div>
            <h1>Registro</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre completo:</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar nombre completo" value={registerForm.userName} name='userName' onChange={handleOnChange} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Direccion:</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Ingresar dirección" value={registerForm.address} name='address' onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" value={registerForm.email} name='email' onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rut:</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar rut" value={registerForm.rut} name='rut' onChange={handleOnChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar un número telefónico" value={registerForm.phoneNumbers} name='phoneNumbers' onChange={handleOnChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar contraseña" value={registerForm.password} name='password' onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirma Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Confirmar contraseña" value={registerForm.confirmPassword} name='confirmPassword' onChange={handleOnChange}/>
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit" >Enviar</Button>
                </Form>
                <p>Ya soy un usuario redireccioname al<Button variant="link" onClick={() => setIsRegisterOn(false)}>Login</Button></p>
            </div>
        )
        :
        (
            <div>
                <Form>
                <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" value={registerForm.email} name='email' onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar contraseña" value={registerForm.password} name='password' onChange={handleOnChange}/>
                    </Form.Group>
                    <Button variant="info" type="submit" >Enviar</Button>
                </Form>
                <p>Aún no soy un usuario redireccioname al<Button variant="link" onClick={() => setIsRegisterOn(true)}>Registro</Button></p>
            </div>
        )}
        </div>
    )
}

export default Login;