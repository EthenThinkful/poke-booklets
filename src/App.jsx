import React from "react";
import "./App.css";
import GetPokemon from "./components/GetPokemon";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  return (
      <DndProvider backend={HTML5Backend}>
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
