import { useState, useRef } from "react";
import React from "react";
import "./App.css";
import PokemonRender from "./PokemonRender";
import rivalryPhoto from "./assets/PokePICS/The-Rivalry.jpg";
import CardRender from "./components/CardRender";
import GetPokemon from "./components/GetPokemon";


function App() {
  return (
    
      <div className="font-pokeFont">
      
        {/* <PokeRender /> */}
        {/* no way to render cards here because of prop passing */}
        {/* <CardRender /> */}
        <GetPokemon />
        
      </div>
    
  );
}

export default App;
