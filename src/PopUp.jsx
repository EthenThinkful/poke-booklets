import React from "react";
import { useState, useRef } from "react"
import PokemonRender from "./PokemonRender"
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Axios from "axios";


export default function PopUp({pokemon}) {
    
    const [details, setDetails] = useState([])

    const handlePoke = (e) => {
        e.preventDefault();
        getDetails();
      };

// https://pokeapi.co/api/v2/ability/{id or name}/
    function getDetails() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
          (response) => {
            setDetails([
              ...details,
              {
                ability: response.data.abilities[0].ability.name
                
              },
            ]);
            console.log(details)
          }
          
        );
      }

    const nodeRef = useRef(null);

    return (
        <div className="PopUp">
        <Draggable nodeRef={nodeRef}>
            <button className="bg: bg-red-200 p-8 rounded-lg" ref={nodeRef} onClick={handlePoke}> Ability </button>
        </Draggable>
        {details.map((pokemon) =>(
            <div key={pokemon} className="text-xl p-3">{pokemon.ability}</div>
        ))}
        </div>
    )
}