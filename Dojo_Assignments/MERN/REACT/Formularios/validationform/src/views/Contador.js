import React, { useState } from 'react';

const Contador = (props) => {

    const [inicial, setInicial] = useState(0);

    const incrementa = (numero) => {
        setInicial (inicial + numero);
    }
    const decrementa = (numero) => {
        setInicial(inicial - numero);
    }

    return (
        <div>
            <h1>Contador: {inicial} </h1>
            <button onClick={()=>incrementa(props.incremento)}>Incrementa</button>
            <button onClick={()=>decrementa(props.decremento)}>Decrementa</button>
        </div>
    )
}

export default Contador
