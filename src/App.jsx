import { useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState('');
  function getPokemon() {
    Axios.get
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Pokedex!</h1>
      <input
      className='p-2 rounded-md'
      placeholder='search pokemon'
      type='text'
      onChange={(event) => {
        setPokemon(event.target.value);
      }}
      />
      <button className='m-8 bg-orange-300 p-2 rounded-md'>search</button>
    </div>
  )
}

export default App
