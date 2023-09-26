import React from "react";
import "./App.css";
// import { DndProvider } from "react-dnd";
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import {Route,Routes} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "../Login/Login";
import Home from "../Home/Home";
import Create from "../Create/Create";


function App() {
  return (
      <DndProvider options={HTML5toTouch}>
      <ToastContainer autoClose={2000} 
        position = {toast.POSITION.BOTTOM_CENTER}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </DndProvider>
  );
}

export default App;
