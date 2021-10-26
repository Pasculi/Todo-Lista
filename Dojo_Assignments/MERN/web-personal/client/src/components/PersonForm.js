import React, { useState } from 'react'
import axios from 'axios';
const ProductoForm = () => {
    //keep track of what is being typed via useState hook
    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:27017/manager/productos', {
            titulo,
            precio,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update firstName and lastName
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Titulo</label><br />
                <input type="text" onChange={(e) => setTitulo(e.target.value)} />
            </p>
            <p>
                <label>Precio</label><br />
                <input type="text" onChange={(e) => setPrecio(e.target.value)} />
            </p>
            <p>
                <label>Descripción</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>

    )
}
export default ProductoForm;