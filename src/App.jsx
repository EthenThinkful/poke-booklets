import React from "react";
import "./App.css";
import CardRender from "./components/CardRender";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import {Route,Routes} from 'react-router-dom';
import Users from "./components/Users";


function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="font-pokeFont">
        <Routes>
        {/* <Route  path="/" element={<Home/>}/>
        <Route  path="/patientDetails/:patientId" element={<CollectClinicals/>}/>
        <Route  path="/addPatient" element={<AddPatient/>}/>
        <Route  path="/analyze/:patientId" element={<AnalyzeData/>}/> */}
        <Route path="/" element={<CardRender />} />
        {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </div>
      </DndProvider>
  );
}

export default App;
