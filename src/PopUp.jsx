import React from "react";
import { useState, useRef } from "react"
import PokemonRender from "./PokemonRender"
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Axios from "axios";


export default function PopUp() {

    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}> Ability </div>
        </Draggable>
        
    )
}