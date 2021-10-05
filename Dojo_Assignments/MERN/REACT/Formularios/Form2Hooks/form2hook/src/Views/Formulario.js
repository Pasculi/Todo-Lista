//import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = (props) => {
    const { inputForm, setInputForm } = props;

    const handleChange = (e) => {
        setInputForm ({...inputForm,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="container card-container" >
        <h1>Registro</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control value={inputForm.nombre} onChange={handleChange} name='nombre' type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control value={inputForm.apellido} onChange={handleChange} name='apellido' type="text" placeholder="Ingrese su apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={inputForm.email} onChange={handleChange} name='email' type="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={inputForm.password} onChange={handleChange} name="password" type="password" placeholder="Ingrese su contraseña"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmar password</Form.Label>
                    <Form.Control value={inputForm.confirmPassword} onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirme su contraseña" />
                </Form.Group>
                <Button variant="danger">Enviar</Button>{' '}
            </Form>
        </div>
    )
}
export default Formulario;
