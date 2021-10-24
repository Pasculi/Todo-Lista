import React, { Component } from 'react'

class Home extends Component {
    render() {
        const { someText, nombre, apellido, edad } = this.props;
        return (
            <>
                <h1>{someText}</h1>
                <h3>Things I need to do:</h3>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
                <p>Mi nombre es {nombre} {apellido} y tengo {edad} años.-</p>
            </>
        )
    }
}
export default Home;