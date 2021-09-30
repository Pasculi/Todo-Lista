import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CharacterList = () => {
     const apiRickandMorty = 'https://rickandmortyapi.com/api/character/';
     const characterapi = async (req, res) => {
          try {
               const response = await axios.get(apiRickandMorty)
          }catch (err) {

          }
     }
     useEffect(() => {
          characterapi();
     }, []);

     return(
          <div>
          <h1>Hola</h1>

          </div>
     )

}
export default CharacterList;