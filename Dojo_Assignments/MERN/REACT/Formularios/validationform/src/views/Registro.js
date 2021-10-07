import React from 'react';
import Form from 'react-bootstrap/Form';

const Registro = (props) => { //const Registro = (userApp, setUserApp) => {

    const {userApp, setUserApp} = props;
    const {firstName, lastName,email, password, confirmPassword} = userApp;

    const handleChange = (e) => {
        setUserApp({...userApp, [e.target.className]: e.target.value});
    }


    return (
        <div className='card-container'>
            <h1>Registro de usuario</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="firstName" className="etiqueta">Nombre:</Form.Label>
                    <Form.Control onChange={handleChange} name="firstName" className="input" type="text" placeholder="Ingrese su nombre" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 2 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="lastName" className="etiqueta">Apellido:</Form.Label>
                    <Form.Control onChange={handleChange} name="lastName" id="lastName" className="input" type="text" placeholder="Ingrese su apellido" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 2 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="email" className="etiqueta">Email:</Form.Label>
                    <Form.Control onChange={handleChange} name="email" id="email" className="input" type="email" placeholder="Ingrese un email" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 5 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="password" className="etiqueta">Contraseña:</Form.Label>
                    <Form.Control onChange={handleChange} name="password" id="password" className="input" type="password" placeholder="Ingrese una contraseña" />
                    <Form.Text className="text-muted">
                        <p className="danger">El campo debe tener al menos 8 caracteres.</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="confirmPassword" className="etiqueta">Confirme contraseña:</Form.Label>
                    <Form.Control onChange={handleChange} name="confirmPassword" id="confirmPassword" className="input" type="password" placeholder="Confirmar contraseña" />
                    <Form.Text className="text-muted">
                        <p className="danger">Las contraseñas no coiciden.</p>
                    </Form.Text>
                </Form.Group>


            </Form>
        </div>
    )
}


export default Registro;
