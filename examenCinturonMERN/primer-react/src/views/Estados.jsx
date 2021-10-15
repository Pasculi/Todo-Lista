import React, { Component } from 'react';


class Estados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On";
        };
    }

    render() {
        const onClick = () => {
            (this.state.position === "On") ? this.setState({ position: "Off" }) : this.setState({ position: "Of" })
        }
        return (
            <>
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                
                <button onClick={ () => { this.setState({ position: "Off" }) }} >Flip Switch</button>
            </fieldset>
        
            </>
        );
    }
}

export default Estados;