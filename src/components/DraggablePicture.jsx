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
    <>
    <button className="w-6 bg-slate-900 rounded-xl">+</button>
    <img
      ref={drag}
      src={src}
      key={id}
      className="carousel__card zoom"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
      onClick={() => console.log("HIHIHI")}
    />
</>
  );
}

export default DraggablePicture;
