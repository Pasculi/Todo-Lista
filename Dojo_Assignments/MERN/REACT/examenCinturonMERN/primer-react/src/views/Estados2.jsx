import React, { Component } from 'react';
import { Button } from './style';

class Estados2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    addYear = () => {
        const masEdad = this.state.age + 1;
        this.setState({ age: masEdad });
    };
    render() {


        return (
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <Button onClick={this.addYear}>Birthay Button for {this.props.firstName} {this.props.lastName}</Button>
            </>
        )
    }
}

export default Estados2;
