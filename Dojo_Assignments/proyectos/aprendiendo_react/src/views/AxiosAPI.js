import React from 'react';
import axios from 'axios';

const AxiosAPI = () => {

    axios
    .get('https://pokeapi.co/api/v2/pokemon/2')
        .then((result) => {
            console.log(result.data)
        }).catch(console.log())


    return (
        <div>
            <h1>Pokemon API</h1>

        </div>
    )
}


export default AxiosAPI;
