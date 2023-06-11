import { useState } from "react";
import DraggablePicture from "./DraggablePicture";
import { useDrop } from "react-dnd";

export default function CardBook({ boardCard }) {
  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
  }))

  const addImageToBoard = (key) => {

  }

  return (
    <div className="cardBook bg-orange-600 mt-8" ref={drop}>
      {board.map((picture) => {
        return <DraggablePicture src={picture.src} key={picture.key} />;
      })}
    </div>
  );
}
