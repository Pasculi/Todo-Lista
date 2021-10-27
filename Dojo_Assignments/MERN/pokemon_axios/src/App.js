import { useState, useEffect } from "react";


function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const response = await fetch(loadMore)
    const data = await response.json()
    setLoadMore(data.next)
    console.log(data)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])

        await console.log(allPokemons)
      })
    }
    createPokemonObject(data.results)
  }

    useEffect(() => {
      getAllPokemons()
    }, [])


    return (
      <div className="app-container">
        <h1>Pokemon Evolution</h1>
        <div className="pokemon-container">
          <div className="all-container">

          </div>
          <button className="load-more">Load more</button>
        </div>
      </div>
    );
  }
export default App;