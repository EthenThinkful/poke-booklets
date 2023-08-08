import React from "react";
import "./App.css";
import CardRender from "./components/CardRender";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="font-pokeFont">
        <Routes>
        <Route path="/" element={<CardRender />} />
        </Routes>
      </div>
      </DndProvider>
  );
}

export default App;
