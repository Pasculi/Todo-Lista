import React, { Component } from 'react';


class Estados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    render() {
        const onClick = () => {
            (this.state.position === "On") ? this.setState({ position: "Off" }) : this.setState({ position: "On" })
        }
        return (
            <>
                <fieldset>
                    <p>La luz esta actualmente en {this.state.position}</p>

                    <button onClick={onClick} >Interruptor</button>
                </fieldset>

            </>
        );
    }
}

export default Estados;