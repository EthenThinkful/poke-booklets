import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import {Route,Routes} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EnterPage from "../EnterPage/EnterPage";
import Home from "../Home/Home";


function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <ToastContainer autoClose={2000} 
        position = {toast.POSITION.BOTTOM_CENTER}/>
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </DndProvider>
  );
}

export default App;
