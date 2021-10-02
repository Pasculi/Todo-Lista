import React, { Component } from 'react';

class Espejo extends Component{
    render(){
        const {nombre, lastNombre, email, password, confirm} = this.props;
        return(
            <div>
                <form>
                    <h1>Espejo</h1><br/>
                    <label>First Name:</label>
                    <span>{nombre}</span><br/>
                    <label>Last Name:</label>
                    <span>{lastNombre}</span><br/>
                    <label>Email:</label>
                    <span>{email}</span><br/>
                    <label>Password:</label>
                    <span>{password}</span><br/>
                    <label>Confirm Password:</label>
                    <span>{confirm}</span><br/>
                </form>
            </div>
        );
    }
}
export default Espejo;