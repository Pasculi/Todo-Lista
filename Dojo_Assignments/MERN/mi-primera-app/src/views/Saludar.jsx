<<<<<<< HEAD
import React, { useState} from 'react'

const Saludar = (props) => {

const {userInfo, greet} = props
console.log(greet)
const {nombre = "Anonimo", edad, color} = userInfo
console.log(edad)

const [onOff, setOnOff] = useState(false);

const encenderApagar = () => {
    setOnOff(!onOff)

}
    return (
        <div>
            <h2>Hola!! soy {nombre} y mi edad es de {edad} años, mi color favorito es {color}</h2>
            <button onClick={() => greet(nombre, color)}>Click me</button>
            <h3>El coche esta: {setOnOff ? 'Encendido' : 'Aapagado'}</h3>
            <button onClick={encenderApagar} >Encender / Apagar</button>
            </div>
=======
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
>>>>>>> 97ed2a57105e42f5b481ed8d3d4008b7c206c13d
    )
}

export default Saludar
