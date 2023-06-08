import { useState, useRef } from "react";
import React from "react";
import "./App.css";
import PokemonRender from "./PokemonRender";
import PokeRender from "./components/PokeRender";
import rivalryPhoto from "./assets/PokePICS/The-Rivalry.jpg";


function App() {
  return (
    
      <div className="font-pokeFont">
        <PokeRender />
      </div>
    
  );
}

export default App;
