import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [register,SetRegister] = useState({
        userName:'',
        address:'',
        email:'',
        rut:'',
        phoneNumbers:'',
        password:'',
        confirmPassword:'',

    })
    const handleOnChange = (e) => {
        console.log({[e.target.name]: e.target.value});
    }

    return(
        <div className='card-container'>
        <h1>Registro</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre completo:</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre completo" value={register.userName} name='useName' onChange={} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Direccion:</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Ingresar dirección" value={register.address} name='address' onChange={}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" value={register.email} name='address' onChange={}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rut:</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar rut" value={register.rut} name='rut' onChange={}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar un número telefónico" value={register.phoneNumbers} name='phoneNumbers' onChange={}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar contraseña" value={register.password} name='password' onChange={}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirma Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" value={register.confirmPassword} name='confirmPassword' onChange={}/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default Login;