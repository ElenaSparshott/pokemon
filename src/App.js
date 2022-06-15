import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentlist => [...currentlist, data])
      })
    }
      createPokemonObject(data.results)
      await console.log(allPokemons)
    }
  

  useEffect(() => {
   getAllPokemons()
  }, [])
  

  return (
    <div className="app-container">
      <h1>Pokemon codex</h1>
      <div className="Pokemon-container">
        <div className="all-container">
          {allPokemons.map(pokemon => <li>{pokemon.name}</li>)}
        </div>
        <button className="Press-me">Press Me!</button>
      </div>
    </div>
  );
  }

export default App;
