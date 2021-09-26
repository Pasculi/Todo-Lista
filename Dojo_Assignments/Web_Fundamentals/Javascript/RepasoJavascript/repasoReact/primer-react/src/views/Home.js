import React, { Component } from 'react';

class Home extends Component{
    render(){

        const msg ='Bienvenidos a programación con Javascript'
        return(
            <div>
                <h2>Academia Coding Dojo</h2>
                <h2>{msg}</h2>
            </div>
        );
    }

}

export default Home;