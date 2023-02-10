import React from "react";
import { useState, useRef } from "react"
import PokemonRender from "./PokemonRender"
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Axios from "axios";


export default function PopUp() {

    const handlePoke = (e) => {
        e.preventDefault();
        console.log("PANUS")
      };

    const nodeRef = useRef(null);

    return (
        <button onClick={handlePoke} className="cursor-pointer bg: bg-red-200 p-6 rounded-md">
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}> Ability </div>
        </Draggable>
        </button>
    )
}