import React from 'react'

const Titulos = ({ usuario = "user matrix", color = "orange" }) => {

    return (
        <div>
            <h1 style={{color}}>Como estas, {usuario} </h1>
        </div>
    )
}


export { Titulos };
