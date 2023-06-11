import React from "react";
import { useDrag } from "react-dnd";

function DraggablePicture({ id, src }) {
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
      id={id}
      className="card zoom rounded-xl"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
    />
  );
}

export default DraggablePicture;
