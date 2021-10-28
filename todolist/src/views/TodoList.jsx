import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const TodoList = (props) => {
    const { list } = props;
    useEffect(() => {
        console.log('TodoList: useEffect');
    }, [list]);
    return (
        <div>
            <h1>Lista de tareas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Prioridad</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    {list.length > 0 && list.map((item, index) => (

                        <tr key={index}>
                            <th>{item.title}</th>
                            <th>{item.description}</th>
                            <th>{item.priority}</th>
                            <th>{item.status}</th>
                        </tr>

                    ))}

                </tbody>
            </Table>
        </div>
    )

}

export default TodoList
