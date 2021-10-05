import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
const Results = (props) => {
    const { nombre, apellido, email, password, confirmPassword } = props.data;

    return (
        <div className="container card-container center" >
            <Form className="form-center">
                <h1>Resultado</h1><br />
                <Card border="primary" style={{ width: '18rem' }}>
                    <label>Nombre:<Card.Header>{nombre}</Card.Header></label>
                </Card>
                <Card border="warning" style={{ width: '18rem' }}>
                    <label>Apellido:<Card.Header>{apellido}</Card.Header></label>
                </Card>
                <Card border="success" style={{ width: '18rem' }}>
                    <label>Email:<span><Card.Header>{email}</Card.Header></span></label>
                </Card>
                <Card border="info" style={{ width: '18rem' }}>
                    <label>Contraseña:<Card.Header>{password}</Card.Header></label>
                </Card>
                <Card border="danger" style={{ width: '18rem' }}>
                    <label>Confirmar contraseña:<Card.Header>{confirmPassword}</Card.Header></label>
                </Card>
            </Form>
        </div>
    )
}
export default Results;
