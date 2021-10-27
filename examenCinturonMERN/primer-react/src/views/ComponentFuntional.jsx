import React from 'react'
import { Button } from './style';

export const ComponentFuntional = (props) => {

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <Button onClick={props.onClick}>Sumar</Button>
        </div>
    )
}
