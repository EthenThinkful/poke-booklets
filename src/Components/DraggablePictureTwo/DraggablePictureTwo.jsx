import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

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
      className="w-[76.5px] h-[106.25px] zoom rounded-lg shadow-lg custom-sm:w-[114.75px] custom-sm:h-[159.375px] lg:w-[150px] lg:h-[209px]"
      style={{ border: isDragging ? "4px solid red" : "0px" }}
      />
    </>
  );
}

export default DraggablePictureTwo;