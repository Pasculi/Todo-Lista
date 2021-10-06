import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Registro = () => {
    return (
        <div className='card-container'>
            <h1>Registro de usuario</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 2 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 2 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 5 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese una contraseña" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 8 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirme contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" />
                    <Form.Text className="text-muted">
                        <p className="danger">Las contraseñas no coiciden.</p>
                    </Form.Text>
                </Form.Group>


            </Form>
        </div>
    )
}

export default Registro;
