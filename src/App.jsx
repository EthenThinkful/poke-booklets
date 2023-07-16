import React from "react";
import "./App.css";
import GetPokemon from "./components/GetPokemon";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline

function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="font-pokeFont">
        {/* <PokeRender /> */}
        {/* no way to render cards here because of prop passing */}
        {/* <CardRender /> */}
        <GetPokemon />
      </div>
      </DndProvider>
    
  );
}

export default App;
