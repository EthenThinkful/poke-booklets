import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState('');

  return (
    <div className="App">
      <h1>Pokedex!</h1>
      <input
      placeholder='search pokemon'
      type='text'
      onChange={(event) => {
        setPokemon(event.target.value);
      }}
      />
      <button></button>
    </div>
  )
}

export default App
