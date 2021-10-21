import React, { useState } from 'react'

const FormBox = (props) => {
    const { boxes, setBoxes } = props;


    const [color, setColor] = useState('#000000');

    const onSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Generador de cajas de colores</h1>

                <label htmlFor="colores">Elija un colores</label>
                <input onChange={(e) => setColor(e.target.value)} type="color" name="colores" id="colores" value="" />
                <br />
                <br />
                <label htmlFor="ancho">Ingrese un ancho en pixeles (px)</label>
                <input type="text" name="ancho" id="ancho" value="" />
                <br />
                <label htmlFor="alto">Ingrese un alto en pixeles (px)</label>
                <input type="text" name="alto" id="alto" value="" />
                <br />
                <br />
                <input type="submit">Generar</input>

            </form>
        </div>

    )
}

export default FormBox;
