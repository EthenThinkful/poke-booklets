import React, { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";

function DraggablePictureTwo({ src }) {
  

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {src: src},
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