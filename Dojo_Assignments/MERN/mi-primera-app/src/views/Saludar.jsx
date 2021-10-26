import React, { useState, useEffect } from 'react'

const Saludar = (props) => {
    console.log(props)
    const [contar, setContar] = useState(0)

    useEffect(() => {
        console.log(`Se ha aumentado el contador: ${contar}`)
    }, [contar])
    
    const aumentar = () => {
        setContar(contar + 1)
    }

    return (
        <div>
            <h2>Hola!! soy {props.userInfo.nombre} y mi edad es de {props.userInfo.edad} años, mi color favorito es {props.userInfo.color}</h2>
            <button onClick={() => props.greet(props.userInfo.nombre)}>Click me</button>
            <button onClick={aumentar}>Clicks:{contar} </button>
        </div>
    )
}

export default Saludar
