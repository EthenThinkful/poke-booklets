import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
function DraggablePictureTwo({ src, id }) {

  // for retaining draggable images src & id properties while dragging
  const idRef = useRef(null);
  
  useEffect(() => {
    idRef.current = id;
  }, [id])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: ({id: idRef}), 
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <img
      ref={drag}
      src={src}
      className="card zoom rounded-lg shadow-lg"
      style={{ border: isDragging ? "4px solid red" : "0px" }}
      />
    </>
  );
}

export default DraggablePictureTwo;