import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Draggable from "react-draggable";
import pokeNames from './assets/PokeJSON/pokeNames.json'

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(
    [],
  );



  function getPokemon() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (response) => {

        setPokemonData([...pokemonData,
          {
            name: pokemon,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            key: pokemon
          },
        ]);
      }
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    getPokemon();
  }

  const handleKeypress = e => {
    // triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
};

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Pokedex!</h1>
      <form>
      <input
        className="p-2 rounded-md w-48"
        placeholder="search pokemon"
        type="text"
        onKeyDown={handleKeypress}
        onChange={(event) => {
          setPokemon(event.target.value.toLocaleLowerCase());
          {console.log(pokemon)}
        }}
      />
      <div className="autoCorrect">
        {pokeNames.map((item) => <div>
          {item}
          </div>)}

      </div>
      <button className="m-8 bg-orange-300 p-2 rounded-md" type="submit" onClick={handleSubmit}>
        search
      </button>
      </form>
      <div className="flex justify-center">
        {pokemonData.map((poke) => (
          <Draggable>
            <img src={poke.img} className="w-40 m-0" />
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default App;
