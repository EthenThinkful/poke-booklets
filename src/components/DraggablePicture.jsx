import React from "react";
import { useDrag } from "react-dnd";

function DraggablePicture({ src, key }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {key: key},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={src}
      key={key}
      className="card zoom rounded-xl"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
    />
  );
}

export default DraggablePicture;
