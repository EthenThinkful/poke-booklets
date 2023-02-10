import React from "react";
import { useState, useRef } from "react";
import Axios from "axios";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import pokeNames from "./assets/PokeJSON/pokeNames.json";
import PopUp from "./PopUp";
import "./PokemonRender.css";

export default function PokemonRender() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [ability, setAbility] = useState(false);

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
            ability: response.data.abilities[0].ability.name,
          },
        ]);
        // console.log(response)
      }
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("STUPID")
    getPokemon();
  };

  const handleKeypress = (e) => {
    // triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleAbility = (e) => {
    e.preventDefault();
    console.log("HIHI")
    setAbility(!ability);
  };

  const nodeRef = useRef(null); // do get around strictMode

  return (
    <div className="PokemonRender">
      <h1 className="text-3xl font-bold sm: pb-6">Pokedex</h1>
      <form className="sm: grid-flow-row">
        <input
          className="p-4 text-xs rounded-md w-48 bg-stone-600"
          placeholder="search"
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
          className="m-8 bg-orange-300 p-4 rounded-md text-xs"
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
                className="cursor-pointer pb-6"
              >
                {item}
              </div>
            ))}
        </div>
      </form>
      <div className="flex justify-center" >
        {pokemonData.map((poke, i) => (
          <button onClick={handleAbility} className="cursor-pointer" key={i}>
          <Draggable key={i} nodeRef={nodeRef} >
              <TransformComponent>
                <img src={poke.img} className="w-40 m-0 pb-6" ref={nodeRef}/>
                {ability
                  ? pokemonData.map((pokemon) => (
                      <div className="flex" key={pokemon}>
                        <div className="bg-stone-700 rounded-xl p-4 text-xs" >
                          Ability: {pokemon.ability}
                        </div>
                      </div>
                    ))
                  : null}
              </TransformComponent>
          </Draggable>
        </button>
        ))}
      </div>
    </div>
  );
}
