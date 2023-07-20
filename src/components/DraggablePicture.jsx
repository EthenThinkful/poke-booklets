import React from "react";
import { useDrag } from "react-dnd";

function DraggablePicture({ src, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {src: src},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (   
    <img
      ref={drag}
      src={src}
      key={id}
      className="carousel__card zoom"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
    />
  );
}

export default DraggablePicture;
