import { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [load, setLoad] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [nextUrl, setNextUrl] = useState(null)
  
  useEffect(() => {
    console.log("Useeffect called")
    const getAllPokemons = async () => {
      const res = await fetch(load)
      const data = await res.json()

      setNextUrl(data.next)

      data.results.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentlist => [...currentlist, data])
      })
    }
    getAllPokemons()
  }, [load])

  return (
    <div className="app-container">
      <h1>Pokemon codex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          { allPokemons.map((pokemon, index) => 
          <PokemonCards
          id={pokemon.id}
          name={pokemon.name}
          
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          key={index}
          />
          )}
        </div>
        <button className="press-me" onClick={() => setLoad(nextUrl)}>Press Me!</button>
      </div>
    </div>
  );
}

export default App;
