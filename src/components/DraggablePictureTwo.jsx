import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

function DraggablePictureTwo({ src, id }) {

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
      className="card zoom rounded-xl"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
      />
    </>
  );
}

export default DraggablePictureTwo;