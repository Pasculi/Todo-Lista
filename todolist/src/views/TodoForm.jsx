import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const TodoForm = (props) => {
    const { todoList, setTodoList } = props;

    const [todoForm, setTodoForm] = useState({
        title: '',
        description: '',
        priority: '',
        status: '',

    })

    useEffect(() => {
        console.log(todoForm)
    }, [todoForm])


    const handleChange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setTodoForm({
            ...todoForm,
            [e.target.name]: e.target.value
        })

    }

    const newTodo = (e) => {
        e.preventDefault()
        setTodoList([...todoList, todoForm])
    }

    return (
        <div className="form-container mt-4">
            <h1>Ingresar nueva tarea:</h1>
            <Form onSubmit={newTodo}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo" name="title" value={todoForm.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" name="description" value={todoForm.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prioridad</Form.Label>
                    <Form.Select size="lg" name="priority" value={todoForm.priority} onChange={handleChange}>
                        <option value={"Alta"}>ALTA</option>
                        <option value={"Media"}>MEDIA</option>
                        <option value={"Baja"}>BAJA</option>
                    </Form.Select>
                </Form.Group>
                {/*<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select size="lg">
                        <option>PENDIENTE</option>
                        <option>tERMINADA</option>
                    </Form.Select>
                </Form.Group>
*/}
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    )
}

export default TodoForm
