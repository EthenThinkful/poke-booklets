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
    // console.log(src);
    const pictureList = src;
    // console.log(board.length);
    // console.log(board);
    board.length < 6 ? setBoard((current) => [...current, pictureList]) : null;
    console.log(board);
  };

  const boardRef = useRef(1);

  // <Draggable nodeRef={nodeRef}>
  //           <span
  //             ref={nodeRef}
  //             className="cursor-pointer"

  //           >
  //             <TransformComponent>
  //               <img src={pokemon1.img} />
  //               {/* {ability ? (
  //                 <div className="flex">
  //                   <div className="bg-stone-700 rounded-xl cursor-pointer p-4 text-xs">
  //                     Ability: {pokemon1.ability}
  //                   </div>
  //                 </div>
  //               ) : null} */}
  //             </TransformComponent>
  //           </span>
  //         </Draggable>

  return (
    <div>
      <Draggable ref={boardRef}>
        <div className="cardBook bg-orange-600 mt-8" ref={drop}>
          {board.length === 0 ? (
            <div></div>
          ) : (
            board.slice(0, 6).map((picture) => (
              <DraggablePicture src={picture} id={picture}/>
            )) 
          )}
        </div>
      </Draggable>
    </div>
  );
}
