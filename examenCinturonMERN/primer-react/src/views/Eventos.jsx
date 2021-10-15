import React, { Component } from 'react';
class Eventos extends Component {
    render(){
        return(
            <button onClick={() => alert("Esto es un evento de alerta!!")}>Click me</button>
        )
    }
}
export default Eventos;