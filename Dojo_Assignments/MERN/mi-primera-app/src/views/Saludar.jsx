import React from 'react'

const Saludar = (props) => {
console.log(props)
    return (
        <div>
            <h2>Hola!! soy {props.userInfo.nombre} y mi edad es de {props.userInfo.edad} años, mi color favorito es {props.userInfo.color}</h2>
            <button onClick={() => props.greet(props.userInfo.nombre)}>Click me</button>
            </div>
    )
}

export default Saludar
