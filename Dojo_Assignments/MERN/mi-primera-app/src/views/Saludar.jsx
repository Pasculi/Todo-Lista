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
    )
}

export default Saludar
