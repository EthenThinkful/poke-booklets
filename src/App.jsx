import { useState, useRef } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import pokeNames from "./assets/PokeJSON/pokeNames.json";
import PopUp from "./PopUp";
import PokemonRender from "./PokemonRender";

function App() {

  return (
    <div className="App font-pokeFont">
      <PokemonRender />
    </div>
  )
}

export default App;
