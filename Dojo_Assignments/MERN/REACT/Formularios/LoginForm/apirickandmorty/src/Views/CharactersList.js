import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {
     const [CharacterList, SetCharcterList] = useState([]);

     useEffect(() => {
          axios.get('https://rickandmortyapi.com/api/character/')
     })



     return
}

export default CharacterList;