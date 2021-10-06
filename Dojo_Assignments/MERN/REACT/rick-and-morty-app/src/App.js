import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Characters from './views/Characters';
import Pagination from './components/Pagination';




function App() {

  const [characters, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info)
      })
      .catch((error) => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacteres(info.prev);
  }
  const onNext = () => {
    fetchCharacteres(info.next);
  }

  useEffect(() => {
    fetchCharacteres(initialurl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />

        <Characters characters={characters} />

        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>


    </>
  );
}

export default App;
