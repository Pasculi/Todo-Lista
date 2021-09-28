import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            position:'On',
            user:{
                name:'Carolina',
                age:38,
                address:'Pedro de Valdivia'
            }
        };
    }

    render(){
        const {message} = this.props;
        const {name, age, address} = this.state.user;
        console.log(this.props);
        return(
            <div>
                <h2>Saludos desde el componente de clase</h2>
                <h2>{message}</h2>
                <p>Hola {name}</p>
                <p>Edad: {age}</p>
                <p>Direccion: {address}</p>
                <button onClick={() => this.setState({user: {...this.state.user, age: age + 1} }) }>Aumentar edad</button>
                
            </div>
        );
    }

}

export default Home;