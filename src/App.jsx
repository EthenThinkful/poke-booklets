import { useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState('');

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Pokedex!</h1>
      <input
      placeholder='search pokemon'
      type='text'
      onChange={(event) => {
        setPokemon(event.target.value);
      }}
      />
      <button>search</button>
    </div>
  )
}

export default App
