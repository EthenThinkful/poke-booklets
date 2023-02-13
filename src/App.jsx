import { useState, useRef } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import pokeNames from "./assets/PokeJSON/pokeNames.json";
import PopUp from "./PopUp";
import PokemonRender from "./PokemonRender";
import rivalryPhoto from './assets/PokePICS/The-Rivalry.jpg'
import gbaGif from './assets/PokePICS/gba.gif'

function App() {

  return (
     <div className="font-pokeFont flex justify-center"> 
     <img src={gbaGif} className="w-20 h-20"/>
      <PokemonRender />
     </div> 
    
  )
}

export default App;
