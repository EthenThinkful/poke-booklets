import React, { useState, useRef, useEffect } from "react";
import DraggablePicture from "./DraggablePicture";
import { useDrop } from "react-dnd";
import pokemon from "pokemontcgsdk";
import Draggable from "react-draggable";

pokemon.configure({ apiKey: "b2c47130-c144-4d25-8d96-c71708597019" });

export default function CardBook() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (src) => {
    const pictureList = src;
    board.length < 6 ? setBoard((current) => [...current.slice(-5), pictureList]) : null;
  };

  return (
    <div>
        <div className="cardBook bg-orange-600 mt-8" ref={drop}>
          {board.length === 0 ? (
            <div></div>
          ) : (
            board.map((picture) => (
              <DraggablePicture src={picture} key={Math.random()}/>
            )) 
          )}
        </div>
    </div>
  );
}
