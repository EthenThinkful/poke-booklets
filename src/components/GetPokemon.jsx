import React, { useState, useRef } from "react";
import Axios from "axios";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
import CardRender from "./CardRender";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});
  const [pokemon3, setPokemon3] = useState({});
  const [limitReached, setLimitReached] = useState(true);

  const handleKeypress = (e) => {
    // triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Why do I love Pokemon so much?");
    getPokemon();
    setLimitReached(!limitReached);
  };

  function getPokemon() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (response) => {
        Object.keys(pokemon1).length === 0
          ? setPokemon1({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon2).length === 0
          ? setPokemon2({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon3).length === 0
          ? setPokemon3({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : null;
      }
    );
  }

  const nodeRef = useRef(1); // to get around strictMode
  const nodeRef2 = useRef(2);
  const nodeRef3 = useRef(3);
  return (
    <div className="iphoneScreen">
        <CardRender poke={pokemon} />
    <div className="PokemonRender">
    <div>
      <form className="flex">
        <input
          className="p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"
          placeholder="search"
          type="text"
          value={pokemon}
          onKeyDown={handleKeypress}
          onChange={(event) => {
            setPokemon(event.target.value.toLocaleLowerCase());
            {
              // console.log(pokemon);
            }
          }}
        />
        <button
          className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14"
          type="submit"
          onClick={handleSubmit}
        >
          Add Pokemon!
        </button>
      </form>
    </div>
    <div className="dropDown text-xs mt-4">
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
                className="cursor-pointer p-2"
              >
                {item}
              </div>
            ))}
        </div>
    
    {limitReached && Object.keys(pokemon3).length !== 0
          ? setTimeout(() => setLimitReached(!limitReached), 3000) && (
              <div className="animate-bounce pt-4 text-xs">
                Pokemon Limit Reached!
              </div>
            )
          : null}
          <div className="flex justify-center">
          {
          <Draggable nodeRef={nodeRef}>
            <span
              ref={nodeRef}
              className="cursor-pointer"
              
            >
              <TransformComponent>
                <img src={pokemon1.img} />
                {/* {ability ? (
                  <div className="flex">
                    <div className="bg-stone-700 rounded-xl cursor-pointer p-4 text-xs">
                      Ability: {pokemon1.ability}
                    </div>
                  </div>
                ) : null} */}
              </TransformComponent>
            </span>
          </Draggable>
        }
        </div>
        <div className="flex justify-center">
        {
          <Draggable nodeRef={nodeRef2}>
            <span
              ref={nodeRef2}
              className="cursor-pointer "
              
            >
              <TransformComponent>
                <img src={pokemon2.img} />
                {/* {abilityTwo === true ? (
                  <div className="flex">
                    <div className="bg-stone-700 rounded-xl cursor-pointer p-4 text-xs">
                      Ability: {pokemon2.ability}
                    </div>
                  </div>
                ) : null} */}
              </TransformComponent>
            </span>
          </Draggable>
        }
        </div>
        <div className="flex justify-center">
        {
          <Draggable nodeRef={nodeRef3}>
            <span
              ref={nodeRef3}
              className="cursor-pointer "
              
            >
              <TransformComponent>
                <img src={pokemon3.img} />
                {/* {abilityThree ? (
                  <div className="flex">
                    <div className="bg-stone-700 rounded-xl cursor-pointer p-4 text-xs">
                      Ability: {pokemon3.ability}
                    </div>
                  </div>
                ) : null} */}
              </TransformComponent>
            </span>
          </Draggable>
        }
        </div>
      </div>
    </div>
  );
}
