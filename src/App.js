import { useState } from 'react';

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  return (
    <div className="app-container">
      <h1>Pokemon codex</h1>
      <div className="Pokemon-container">
        <div className="all-container">

        </div>
        <button className="Press-me">Press Me!</button>
      </div>
    </div>
  );
}

export default App;
