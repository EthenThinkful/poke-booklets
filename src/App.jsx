import { useState, useRef } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import Draggable from "react-draggable";
import pokeNames from "./assets/PokeJSON/pokeNames.json";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  function getPokemon() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (response) => {
        setPokemonData([
          ...pokemonData,
          {
            name: pokemon,
            species: response.data.species.name,
            img: response.data.sprites.front_default,
            hp: response.data.stats[0].base_stat,
            key: pokemon,
          },
        ]);
      }
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const handleKeypress = (e) => {
    // triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const nodeRef = useRef(null) // do get around strictMode
  return (
    
    <div className="App">
      <h1 className="text-3xl font-bold sm: pb-6">Pokedex!</h1>
      <form>
        <input
          className="p-2 rounded-md w-48"
          placeholder="search pokemon"
          type="text"
          value={pokemon}
          onKeyDown={handleKeypress}
          onChange={(event) => {
            setPokemon(event.target.value.toLocaleLowerCase());
            {
              console.log(pokemon);
            }
          }}
        />
        <button
          className="m-8 bg-orange-300 p-2 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          Add Pokemon!
        </button>
        <div className="dropDown">
          {pokeNames
            .filter((item) => {
              const searchTerm = pokemon.toLocaleLowerCase();
              const fullName = item.toLocaleLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => setPokemon(item.toLocaleLowerCase())}
                key={item}
                className="cursor-pointer"
              >
                {item}
              </div>
            ))}
        </div>
      </form>
      <div className="flex justify-center">
        {pokemonData.map((poke, i) => (
          <Draggable 
          key={i}
          nodeRef={nodeRef}
          >
            <span ref={nodeRef}>
            <img
              src={poke.img}
              className="w-40 m-0 cursor-pointer"
            />
            </span>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default App;
